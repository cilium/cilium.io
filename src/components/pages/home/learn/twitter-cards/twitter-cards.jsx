import React from 'react';

import TwitterIcon from 'icons/twitter.inline.svg';

const items = [
  {
    text: 'Cilium and the team around it have impressed me from the beginning. My mind is spinning with the possibilities of eBPF.',
    name: 'Tim Hockin (@thockin), co-founder Kubernetes, Google',
  },
  {
    text: `If you're not getting with <a href="https://twitter.com/hashtag/ebpf?src=hashtag_click" target="_blank" rel="noopener noreferrer">#ebpf</a> and <a href="https://twitter.com/hashtag/cilium?src=hashtag_click" target="_blank" rel="noopener noreferrer">#cilium</a> you really don't know what you're doing.`,
    name: 'Tony Lambiris (@thelambeers), Capital One',
  },
];

const TwitterCards = () => (
  <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:mt-28">
    {items.map(({ text, name }, index) => (
      <div
        className="flex flex-col p-8 text-lg leading-relaxed border rounded-lg border-gray-3"
        key={index}
      >
        <TwitterIcon className="w-7 h-7" />
        <p className="my-5 with-link-primary" dangerouslySetInnerHTML={{ __html: text }} />
        <span className="mt-auto font-semibold">{name}</span>
      </div>
    ))}
  </div>
);

export default TwitterCards;
