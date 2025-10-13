---
path: '/blog/2017/5/4/demo-may-the-force-be-with-you'
date: '2017-05-05T00:08:35.000Z'
title: 'Demo: May the Fourth be with you'
categories:
  - How-To
  - Tutorials
tags:
  - star wars
  - http
  - policy
  - demo
  - microservices
  - network-policy
ogSummary: 'Learn how Cilium applies network and HTTP-level security policies in this Star Wars–themed Docker demo showcased at KubeCon and DockerCon.'
---

In celebration of today's date, May 4th, we are posting our Star Wars demo of Cilium that we showed at CNCF/KubeCon in Berlin or DockerCon in Austin. You can either watch the video linked below which starts directly at the time the demo begins or you can jump to the transcript of the demo embedded in the blog post. May the fourth be with you.

<YoutubeIframe embedId='ilKlmTDdFgk?list=PLkA60AVN3hh_nihZ1mh6cO3n-uMdF7UlV&amp;t=350&amp;wmode=opaque&amp;enablejsapi=1'/>

```
# A long time ago, in a container cluster far, far away....
#
# It is a period of civil war. The Empire has adopted
# microservices and continuous delivery, despite this,
# Rebel spaceships, striking from a hidden cluster, have
# won their first victory against the evil Galactic Empire.
#
# During the battle, Rebel spies managed to steal the
# swagger API specification to the Empire's ultimate weapon,
# the deathstar.
```

This first step creates a Docker network which the empire and rebel alliance can use to attach their containers to. It is of driver and IPAM type _cilium_ which implies that Cilium is in charge of both address management and providing networking whenever a container is attached to the network.

```
$ docker network create --ipv6 --subnet ::1/112 --driver cilium --ipam-driver cilium space
c712f2b0d915825bf16b45705f76d7bf5cb947159b9753edd1bfcf6c56749ca1
```

The empire starts constructing the deathstar by starting a container named _deathstar_ in the network _cilium_ with the label _id.empire.deathstar_. This label indicate that the container is a deathstar beloning to the empire.

```
$ docker run -dt --net=space --name deathstar -l id.empire.deathstar cilium/starwars
f55bacd444d0c552488650916183f045bdabcf9eb8d2771654f707bbbb986d60
```

The empire now wants to allow spaceship containers to launch and land at the deathstar. The spaceships have to use the deathstar's REST API to request landing permissions. This requires a network policy to allow for this communication. Cilium follows a whitelist policy model which means that if policy enforcement is enabled, all communication must be explicitly allowed, all other communication is prohibited.

```json
$ cat sw_policy_l4.json
{
  "name": "root",
  "rules": [{
    "coverage": ["id.empire.deathstar"],
    "allow": ["id.spaceship"]
  },{
    "coverage": ["id.empire.deathstar"],
    "l4": [{
      "in-ports": [{ "port": 80, "protocol": "tcp" }]
    }]
  }]
}
```

The policy above will allow spaceships to communicate to the deathstar by allowing:

- Any container with the label `id.spaceship` to communicate with any container with the label `id.empire.deathstar`. If a container does not have the label `id.spaceship` assigned, it will not be able to talk to `id.empire.deathstar`.
- Any container with the label `id.empire.deathtar` to only take incoming connections on port 80 using the TCP protocol. Use of any other port is prohibited.

The empire can import this policy...

```
$ cilium policy import sw_policy_l4.json
```

... and then test the connectivity by starting a spaceship container with the label `id.spaceship` and have it land on the deathstar after requesting landing permission:

```
$ docker run -dt --net=space --name ship1 -l id.spaceship tgraf/netperf
919cce790ef4344080aa0fd3ecf7435cb773c0a813b5dc6dce12c5e93f5c1102

$ docker exec -i ship1 curl -si -XPOST http://deathstar/v1/request-landing
HTTP/1.1 200 OK
Content-Type: text/plain
Date: Fri, 28 Apr 2017 15:18:02 GMT
Content-Length: 12

Ship landed
```

---

In the meantime.... The rebel alliance has noticed that the empire has started to construct a deathstar. They send out an X-Wing to scout and explore the situation:

```
$ docker run -dt --net=space --name xwing -l id.spaceship tgraf/netperf
0a87e2677eae25118a10c24c903e3b7a0efca4a70157996f72d8f29b731cfc76
```

The X-wing spaceship flies up to the deathstar and starts probing it with his radar:

```
$ docker exec -i xwing ping -c 2 deathstar
PING deathstar (10.15.116.202): 56 data bytes
64 bytes from 10.15.116.202: seq=0 ttl=64 time=0.170 ms
64 bytes from 10.15.116.202: seq=1 ttl=64 time=0.087 ms

--- deathstar ping statistics ---
2 packets transmitted, 2 packets received, 0% packet loss
round-trip min/avg/max = 0.087/0.128/0.170 ms
```

Why does the deathstar respond to the X-Wing? The X-Wing is a spaceship as well and thus has the label `id.spaceship` set which is covered by the network policy loaded by the empire.

Excited about the response, the X-Wing pilot triggers a REST API call `GET /` to the deathstar and gets a response:

```json
$ docker exec -i xwing curl -si -XGET http://deathstar/v1/
HTTP/1.1 200 OK
Content-Type: text/plain
Date: Fri, 28 Apr 2017 15:21:47 GMT
Content-Length: 548

{
  "name": "Death Star",
  "model": "DS-1 Orbital Battle Station",
  "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
  "cost_in_credits": "1000000000000",
  "length": "120000",
  "crew": "342953",
  "passengers": "843342",
  "cargo_capacity": "1000000000000",
  "hyperdrive_rating": "4.0",
  "starship_class": "Deep Space Mobile Battlestation",
  "api": [
    "GET  /v1",
    "GET  /v1/healthz",
    "POST /v1/request-landing",
    "PUT  /v1/cargobay",
    "GET  /v1/hyper-matter-reactor/status",
    "PUT  /v1/exhaust-port"
  ]
}
```

Wow, that's a lot of information. The deathstar API responds with a list of properties including the entire API surface that is available.

And look at this... we can access `PUT /v1/exhaust-port`. The rebels immediately realize that they have found a way to gain access to the ultimate weakness of the deathstar, the reactor core.

---

The X-Wing fly by does not go unnoticed by the empire though and the empire SecOps teams realized the vulnerability of their API. They read up on [Cilium documentation](http://docs.cilium.io) to implement HTTP level security policies to protect their API.

```json
$ cat sw_policy_http.show.json
{
  "name": "root",
  "rules": [{
    "coverage": ["id.empire.deathstar"],
    "allow": ["id.spaceship", "reserved:host"]
  },{
    "coverage": ["id.spaceship"],
    "l4": [{
      "out-ports": [{
        "port": 80, "protocol": "tcp",
        "l7-parser": "http",
        "l7-rules": [
          { "expr": "Method(\"GET\") && Path(\"/v1/\")" },
          { "expr": "Method(\"POST\") && Path(\"/v1/request-landing\")" }
        ]
      }]
    }]
  }]
}
```

The policy the empire consists of two rules:

- The first rule allows `id.spaceship` and the local host where the enforcement proxy is running to talk to `id.empire.deathstar`. This is the same policy as before with the addition of the proxy used for the second rule.
- The second rule says that any container with the label `id.spaceship` can only initiate connections on port 80 with protocol TCP and that any connection needs to pass through an HTTP protocol parser which then filters all communication an only passes through the following two requests:
  - `GET /v1/`
  - `POST /v1/request-landing` All other REST API calls are prohibited by Cilium.

The empire loads this policy into Cilium:

    $ cilium policy import sw_policy_http.real.json

```

Unsuspecting about the efforts of the empire, the rebels execute their attack. Their ships can still probe the deathstar via radar:

    $ docker exec -i xwing ping -c 2 deathstar
    PING deathstar (10.15.116.202): 56 data bytes
    64 bytes from 10.15.116.202: seq=0 ttl=64 time=0.078 ms
    64 bytes from 10.15.116.202: seq=1 ttl=64 time=0.091 ms

    --- deathstar ping statistics ---
    2 packets transmitted, 2 packets received, 0% packet loss
    round-trip min/avg/max = 0.078/0.084/0.091 ms

But as the X-Wing approaches the deathstar and issues the REST API call to access the thermal exhaust port:

    $ docker exec -i xwing curl -si -XPUT http://deathstar/v1/exhaust-port
    HTTP/1.1 403 Forbidden
    Content-Type: text/plain; charset=utf-8
    X-Content-Type-Options: nosniff
    Date: Fri, 28 Apr 2017 15:37:47 GMT
    Content-Length: 14

    Access denied

The shields are up. End of demo...

Obviously we can't end May 4 like this and change the story. We don't want to be on the wrong side of history. So here is what you missed...

While the deathstar was being constructed and the empire SecOps team but the HTTP aware policy in place, the Jedi managed to infiltrate the deathstar and put a different policy in place.

So let's run `diff` on the loaded policy and the policy you saw earlier:

    $ diff -Nru sw_policy_http.show.json sw_policy_http.real.json
    --- sw_policy_http.show.json    2017-04-28 16:43:32.372615840 +0200
    +++ sw_policy_http.real.json    2017-04-28 16:43:32.372615840 +0200
    @@ -11,7 +11,8 @@
             "l7-parser": "http",
             "l7-rules": [
               { "expr": "Method(\"GET\") && Path(\"/v1/\")" },
    -          { "expr": "Method(\"POST\") && Path(\"/v1/request-landing\")" }
    +          { "expr": "Method(\"POST\") && Path(\"/v1/request-landing\")" },
    +          { "expr": "Method(\"PUT\") && Header(\"X-Has-Force\", \"true\") && Path(\"/v1/exhaust-port\")" }
             ]
           }]
         }]

So the Jedi managed to add an additional rule to the policy which says:

- You an do a `PUT /v1/exhaust-port` if the request has the header `X-Has-Force: true` set.

We all know what is going to happen now...

    $ docker run -dt --net=space --name xwing_luke -l id.spaceship tgraf/netperf
    7c9992bfd3866f54b1b9fc142bdc2e0169034b7c6bf21603b819fe571c712f56

    $ docker exec -i xwing_luke curl -si -H 'X-Has-Force: true' -XPUT http://deathstar/v1/exhaust-port
    HTTP/1.1 503 Service Unavailable
    Content-Length: 275
    Content-Type: text/plain
    Date: Fri, 28 Apr 2017 15:46:59 GMT

    Panic: deathstar exploded

    goroutine 1 [running]:
    main.HandleGarbage(0x2080c3f50, 0x2, 0x4, 0x425c0, 0x5, 0xa)
            /code/src/github.com/empire/deathstar/
            temp/main.go:9 +0x64
    main.main()
            /code/src/github.com/empire/deathstar/
            temp/main.go:5 +0x85

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/default.min.css">  <script>hljs.initHighlightingOnLoad();</script>
```
