# Cilium Website

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://cdn.jsdelivr.net/gh/cilium/cilium@main/Documentation/images/logo.png">
    <img src="https://cdn.jsdelivr.net/gh/cilium/cilium@main/Documentation/images/logo-dark.png" width="350" alt="Cilium Logo">
  </picture>
</div>

<!-- Horizontal badges -->
<p align="center">
  <a href="https://cilium.io">
    <img src="https://img.shields.io/badge/Website-cilium.io-blue?style=for-the-badge">
  </a>
  <a href="https://docs.cilium.io/en/stable/">
    <img src="https://img.shields.io/badge/Docs-docs.cilium.io-green?style=for-the-badge">
  </a>
  <a href="https://github.com/cilium/cilium">
    <img src="https://img.shields.io/badge/GitHub-cilium/cilium-black?style=for-the-badge&logo=github">
  </a>
  <a href="https://slack.cilium.io/">
    <img src="https://img.shields.io/badge/Slack-Join%20Community-purple?style=for-the-badge&logo=slack">
  </a>
  <a href="https://www.youtube.com/c/eBPFCiliumCommunity/">
    <img src="https://img.shields.io/badge/YouTube-eBPF%20%26%20Cilium-red?style=for-the-badge&logo=youtube">
  </a>
</p>

---

## Table of Contents

- [Cilium Website](#cilium-website)
  - [Table of Contents](#table-of-contents)
  - [Contributing](#contributing)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
    - [Run the website](#run-the-website)
    - [Build the website](#build-the-website)
    - [Run the built website](#run-the-built-website)
    - [Clean Gatsby cache](#clean-gatsby-cache)
  - [Project Structure](#project-structure)
  - [Component Folder Structure](#component-folder-structure)
    - [Each component includes](#each-component-includes)
    - [Each component optionally may include](#each-component-optionally-may-include)
    - [Example structure](#example-structure)
  - [Code Style](#code-style)
    - [ESLint](#eslint)
    - [Prettier](#prettier)
    - [VS Code](#vs-code)
    - [Development Commands](#development-commands)
  - [How to create blog post](#how-to-create-blog-post)

## Contributing

Please see [Contributing](CONTRIBUTING.md) for guidelines on adding blogs, documentation, Cilium distributions and trainings, or any other content to the website.

## Getting Started

1. Fork this repository and clone the forked one

```bash
git clone git@github.com:<your-handle>/cilium.io.git
```

2. Install dependencies

```bash
npm install
```

3. Copy .env.example and rename it into .env

```bash
cp .env.example .env
```

**Note:** This project includes a Makefile with all the development commands.

You can quickly set up the project using:

```bash
make env     # Setup environment file
make install # Install dependencies
make start   # Start the development server
```

Explore the [Development Commands](#development-commands) section for more available options.

## Usage

### Run the website

```bash
npm install
npm run start
```

> **Note:** If you encounter the error:
>
> ```
> FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
> ```
>
> This happens because Node.js has a default memory limit (usually around 4 GB), which may not be sufficient for memory intensive tasks such as image processing in Gatsby.
>
> To fix this, increase the memory limit by running the following command:
>
> **Linux/macos**:
>
> ```bash
> NODE_OPTIONS="--max-old-space-size=8192" npm run start
> ```
>
> **Windows**:
>
> ```powershell
> $env:NODE_OPTIONS="--max-old-space-size=8192"
> npm run start
> ```
>
> This allows Node.js to use up to 8 GB of RAM. You can adjust the number (`8192`) if needed based on your system capacity.
>
> **Tip for laptops without fans** (e.g., MacBook Air):  
> To reduce heat and memory usage during development, you can limit Gatsby to fewer CPU cores:
>
> ```bash
> NODE_OPTIONS="--max-old-space-size=6144" GATSBY_CPU_COUNT=2 npm run develop
> ```

### Build the website

```bash
npm run build
```

### Run the built website

```bash
npm run serve
```

### Clean Gatsby cache

```bash
npm run clean
```

## Project Structure

```text
├── src
│   ├── components
│   │  ├── pages — React components that are being used specifically on a certain page
│   │  └── shared — React components that are being used across the whole website
│   ├── hooks
│   ├── images — Images that are being quired using graphql. Read more about it here — gatsbyjs.org/docs/working-with-images. Also note, that folder structure should be equal to the structure of components folder
│   ├── pages
│   ├── styles
│   ├── templates
│   ├── utils
│   └── html.js — HTML template for all generated pages. Read more about it here — gatsbyjs.org/docs/custom-html
├── static
│   └── fonts - Self-hosted fonts
├── gatsby-browser.js — This file is where Gatsby expects to find any usage of the Gatsby browser APIs (if any). These allow customization/extension of default Gatsby settings affecting the browser. Read more about it here — gatsbyjs.org/docs/browser-apis
├── gatsby-config.js — This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. Read more about it here — gatsbyjs.org/docs/gatsby-config
├── gatsby-node.js — This file is where Gatsby expects to find any usage of the Gatsby Node APIs (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. Read more about it here — gatsbyjs.org/docs/node-apis
└── gatsby-ssr.js — This file is where Gatsby expects to find any usage of the Gatsby server-side rendering APIs (if any). These allow customization of default Gatsby settings affecting server-side rendering. Read more about it here — gatsbyjs.org/docs/ssr-apis
```

## Component Folder Structure

### Each component includes

1. Main JavaScript File
2. Index File

### Each component optionally may include

1. Folder with icons and images

Also, each component may include another component that follows all above listed rules.

### Example structure

```bash
component
├── nested-component
│  ├── images
│  │  ├── image.png
│  │  └── icon.svg
│  ├── nested-component.jsx
│  └── index.js
├── images
│  ├── image.png
│  └── icon.svg
├── component.jsx
└── index.js
```

## Code Style

### ESLint

[ESLint](https://eslint.org/) helps find and fix code style issues and force developers to follow same rules. Current configuration is based on [Airbnb style guide](https://github.com/airbnb/javascript).

Additional commands:

```bash
npm run lint
```

Run it to check the current status of eslint issues across project.

```bash
npm run lint:fix
```

Run it to fix all possible issues.

### Prettier

[Prettier](https://prettier.io/) helps to format code based on defined rules. [Difference between Prettier and ESLint](https://prettier.io/docs/en/comparison.html).

Additional commands:

```bash
npm run format
```

Run it to format all files across the project.

### VS Code

Following extensions required to simplify the process of keeping the same code style across the project:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

After installation enable "ESLint on save" by adding to your VS Code settings.json the following line:

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

You can navigate to settings.json by using Command Pallete (CMD+Shift+P) and then type "Open settings.json".

To enable Prettier go to Preferences -> Settings -> type "Format". Then check that you have esbenp.prettier-vscode as default formatter, and also enable "Format On Save".

Reload VS Code and auto-format will work for you.

### Development Commands

This project uses a Makefile to simplify common tasks. Below are the available commands:

```bash
make install       # Install dependencies
make env           # Setup environment file (.env)
make start         # Start dev server (fast, skips image processing)
make start-full    # Start dev server (full build with image processing)
make build         # Build the site for production
make serve         # Serve production build locally
make clean         # Clean Gatsby cache
make lint          # Run ESLint linter
make lint-fix      # Fix ESLint issues

make docker-build   # Build the Docker image
make docker-run     # Run the project inside Docker (production mode)
make docker-run-dev # Run the project inside Docker (development mode with hot reload)
make docker-shell   # Open a shell inside the Docker container
```

## How to create blog post

The blog is created using `gatsby-source-filesystem` plugin and `gatsby-plugin-mdx` along with the createPages Gatsby Node API. The blog is configured to dynamically create pages with `.md` files from `src/posts/`.

In `.md` files we can declare frontmatter at the beginning:

- path: the path of blog post;
- date: the publish date of blog post;
- title: the title of blog post;
- isPopular: the boolean value that defines posts in block `Popular posts`;
- isFeatured: the boolean value that defines the post in block `Featured Story`
  (NOTE: featured post can be only 1);
- draft: the boolean value that defines the post is still in the process of being written. (it's false by default, if it's true, the post will not be rendered on production, but only on localhost);
- categories: the categories of blog post;
- tags: the tags of blog post, which is displayed in Twitter share card;
- ogImage: the og:image in SEO metadata, also it is the cover image, which is displayed in the blog post card (featured story, popular posts);
- ogSummary: the og:description in SEO metadata, also it is the description text, which is displayed in the blog post card (featured story, popular posts).
- externalUrl: the external blog post url
- ogImageUrl: the image url for the og:image in SEO metadata (use for the external blog posts)

The preview tags in `.md` files (which is used in the old Cilium blog) are fully converted to `ogImage` and `ogSummary` in `frontmatter`.

```markdown
---
path: "/blog/2021/10/13/cilium-joins-cncf"
date: "2021-10-13T17:00:00.000Z"
title: "Cilium joins the CNCF"
isPopular: true
isFeatured: false
draft: false
ogImage: cilium-cncf-card.png
ogSummary: "CNCF TOC chair Liz Rice explains why she's excited about the future of
Cilium as an Incubation project in the CNCF." 
categories:
  - Technology
  - Community
tags:
  - eBPF
  - BPF
  - Cilium
  - CNCF
---

import authors from 'utils/author-data.js';

![Cilium joins the CNCF](cilium-cncf-card.png)

I'm beyond thrilled that Cilium has joined the CNCF as an Incubation project!
I'm excited about it not just as an advocate for the Cilium project, but also as
an Isovalent team member, and in my role as Chair of the CNCF's Technical
Oversight Committee - and I'd like to share why.
```

In `.md` files, it's able to use the custom component `Blog Author` and pass `header`, `bio` as props to the component.
For example:

```markdown
<BlogAuthor
header="Thomas Graf"
bio={`Thomas Graf is a Co-Founder of Cilium and the CTO & Co-Founder of <a href="https://isovalent.com">Isovalent</a>, the company behind Cilium. Before that, Thomas spent 15 years as a kernel developer working on the <a href="https://kernel.org">Linux kernel</a> in networking, security and eventually eBPF.`}
/>
```

Or you can import the author data in `.md` files from `src/utils/author-data.js`:

```markdown
import authors from 'utils/author-data';

<BlogAuthor {...authors.thomasGraf}/>
```

The default theme of Blog Author is `primary`.

If you want to use another theme, pass the prop `theme` with value `secondary`:

```markdown
<BlogAuthor
theme="secondary"
header="Guest Blog Post:"
bio={`This is a guest blog by a Cilium user based on the <a href="https://davidlovezoe.club/wordpress/archives/851">the original blog post</a>. If you would like to publish a blog post as well, contact us on Slack.`}
/>
```
