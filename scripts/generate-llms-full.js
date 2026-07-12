const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src/pages');
const POSTS = path.join(ROOT, 'src/posts');

const KEY_RE = /\b(heading|title|tagline|subHeading|category|description|paragraphs|texts)\s*:/g;
const CONST_RE = /const\s+(\w+)\s*=\s*[[{]/g;

function readString(text, start) {
  const q = text[start];
  let i = start + 1;
  let s = '';
  while (i < text.length) {
    const c = text[i];
    if (c === '\\') {
      s += c + (text[i + 1] || '');
      i += 2;
    } else if (c === q) {
      i += 1;
      break;
    } else {
      s += c;
      i += 1;
    }
  }
  return [s, i];
}

function parseValueAt(text, pos) {
  let i = pos;
  while (i < text.length && /\s/.test(text[i])) i += 1;
  const c = text[i];
  if (c === "'" || c === '"') {
    const [str] = readString(text, i);
    return str;
  }
  if (c === '[') {
    i += 1;
    const parts = [];
    let depth = 1;
    while (i < text.length && depth > 0) {
      const ch = text[i];
      if (ch === '[') {
        depth += 1;
        i += 1;
      } else if (ch === ']') {
        depth -= 1;
        i += 1;
      } else if (ch === "'" || ch === '"') {
        const [str, ni] = readString(text, i);
        if (str.trim()) parts.push(str);
        i = ni;
      } else {
        i += 1;
      }
    }
    return parts.join(' ');
  }
  return '';
}

function decode(s) {
  return s
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function classify(name) {
  const n = name.toLowerCase();
  if (n.includes('hero')) return 'hero';
  if (n.includes('section') || n.includes('bullet')) return 'section';
  return 'aux';
}

function extract(file) {
  const text = fs.readFileSync(file, 'utf8');

  const blocks = [];
  let m;
  CONST_RE.lastIndex = 0;
  m = CONST_RE.exec(text);
  while (m !== null) {
    blocks.push({ name: m[1], index: m.index, kind: classify(m[1]) });
    m = CONST_RE.exec(text);
  }
  const ownerOf = (idx) => {
    let owner = null;
    for (let b = 0; b < blocks.length; b += 1) {
      if (blocks[b].index < idx) owner = blocks[b];
      else break;
    }
    return owner;
  };

  const hero = {};
  const sections = [];
  let curSectionOwner = null;
  let curSection = null;
  const auxTitles = new Set();

  KEY_RE.lastIndex = 0;
  m = KEY_RE.exec(text);
  while (m !== null) {
    const key = m[1];
    const val = decode(parseValueAt(text, m.index + m[0].length));
    const owner = val ? ownerOf(m.index) : null;
    if (owner) {
      const isBody = key === 'description' || key === 'paragraphs' || key === 'texts';
      if (owner.kind === 'hero') {
        if (key === 'heading' || key === 'title') hero.title = hero.title || val;
        else if (key === 'category') hero.category = val;
        else if (key === 'tagline') hero.tagline = val;
        else if (key === 'subHeading') hero.subHeading = val;
        else if (isBody) hero.description = hero.description || val;
      } else if (owner.kind === 'section') {
        if (owner !== curSectionOwner) {
          curSection = { title: null, body: [] };
          sections.push(curSection);
          curSectionOwner = owner;
        }
        if ((key === 'heading' || key === 'title') && !curSection.title) curSection.title = val;
        else if (isBody || key === 'subHeading') curSection.body.push(val);
      } else if ((key === 'title' || key === 'heading') && /[a-z]/.test(val)) {
        auxTitles.add(val);
      }
    }
    m = KEY_RE.exec(text);
  }

  return { hero, sections, auxTitles: [...auxTitles] };
}

function noDashes(s) {
  return s
    .replace(/\s*—\s*/g, ', ')
    .replace(/ - /g, ', ')
    .replace(/ +,/g, ',')
    .replace(/,(\s*,)+/g, ',');
}

function stripEmojis(s) {
  return s
    .replace(/[✅✓✔]/g, 'Yes')
    .replace(/[❌✗✘]/g, 'No')
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2139}]/gu, '')
    .replace(/\u{FE0F}|\u{200D}|\u{20E3}/gu, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/ ([),.!?;:])/g, '$1');
}

function parseMap() {
  const lines = fs.readFileSync(path.join(ROOT, 'static/llms.txt'), 'utf8').split('\n');
  let headerEnd = lines.findIndex((l) => l.startsWith('## '));
  if (headerEnd === -1) headerEnd = lines.length;

  const header = lines
    .slice(0, headerEnd)
    .filter((l) => !l.startsWith('This file provides a high-level overview'))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd();

  const sections = [];
  let cur = null;
  lines.slice(headerEnd).forEach((line) => {
    if (line.startsWith('## ')) {
      cur = { heading: line.slice(3).trim(), links: [] };
      sections.push(cur);
    } else if (cur) {
      const link = line.match(/^-\s+\[([^\]]+)\]\(([^)\s]+)\)(?::\s*(.*))?\s*$/);
      if (link) cur.links.push({ title: link[1], url: link[2], note: (link[3] || '').trim() });
    }
  });
  return { header, sections };
}

function renderJsxPage(link, file) {
  const { hero, sections, auxTitles } = extract(file);
  const out = [];
  out.push(`### ${hero.title || link.title}`);
  out.push('');
  out.push(`URL: ${link.url}`);
  if (hero.category) out.push(`Category: ${hero.category}`);
  out.push('');
  if (hero.tagline) {
    out.push(`_${hero.tagline}_`);
    out.push('');
  }
  if (hero.subHeading) {
    out.push(`**${hero.subHeading}**`);
    out.push('');
  }
  if (hero.description) {
    out.push(hero.description);
    out.push('');
  }
  sections.forEach((sec) => {
    if (sec.title && sec.body.length) {
      out.push(`#### ${sec.title}`);
      out.push('');
    }
    sec.body.forEach((text) => {
      out.push(text);
      out.push('');
    });
  });
  if (auxTitles.length) {
    out.push(`_Adopters & resources referenced on this page:_ ${auxTitles.join('; ')}.`);
    out.push('');
  }
  return noDashes(stripEmojis(out.join('\n')));
}

function renderStub(link, extraNote) {
  const out = [`### ${link.title}`, '', `URL: ${link.url}`, ''];
  let note = [link.note, extraNote].filter(Boolean).join(' ');
  if (note) {
    note = note.charAt(0).toUpperCase() + note.slice(1);
    out.push(note.endsWith('.') ? note : `${note}.`);
    out.push('');
  }
  return out.join('\n');
}

function unquote(s) {
  const t = s.trim();
  if (t.length >= 2 && ((t[0] === "'" && t.endsWith("'")) || (t[0] === '"' && t.endsWith('"')))) {
    return t.slice(1, -1);
  }
  return t;
}

function parseFrontmatter(text) {
  if (!text.startsWith('---')) return [{}, text];
  const close = text.indexOf('\n---', 3);
  if (close === -1) return [{}, text];
  const raw = text.slice(text.indexOf('\n') + 1, close);
  const bodyStart = text.indexOf('\n', close + 1);
  const body = bodyStart === -1 ? '' : text.slice(bodyStart + 1);
  const fm = {};
  let listKey = null;
  raw.split('\n').forEach((line) => {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      fm[listKey].push(unquote(item[1]));
    } else {
      const kv = line.match(/^([A-Za-z]\w*):\s*(.*)$/);
      if (kv) {
        const [, key, value] = kv;
        if (value === '') {
          fm[key] = [];
          listKey = key;
        } else {
          fm[key] = unquote(value);
          listKey = null;
        }
      }
    }
  });
  return [fm, body];
}

function cleanBody(body, headingLevel) {
  const parts = body.split(/(```[\s\S]*?```)/);
  const prose = [];
  parts.forEach((part, i) => {
    if (i % 2 === 1) return;
    let s = part;
    s = s.replace(/^import\s+.*$/gm, '');
    s = s.replace(/<([A-Z]\w*)\b[^>]*>[\s\S]*?<\/\1>/g, '');
    s = s.replace(/<[A-Z]\w*\b[^>]*\/?>/g, '');
    s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
    s = s.replace(
      /<\/?(?:iframe|video|source|img|picture|figure|figcaption|br|hr|div|span|p|a|center|em|strong|b|i|u|sup|sub|ul|ol|li|table|thead|tbody|tr|td|th)\b[^>]*>/gi,
      ' '
    );
    s = stripEmojis(s);
    parts[i] = s;
    prose.push(i);
  });

  let minLevel = Infinity;
  prose.forEach((i) => {
    (parts[i].match(/^#{1,6}(?=\s)/gm) || []).forEach((h) => {
      if (h.length < minLevel) minLevel = h.length;
    });
  });
  const shift = minLevel === Infinity ? 0 : Math.max(0, headingLevel + 1 - minLevel);
  if (shift > 0) {
    prose.forEach((i) => {
      parts[i] = parts[i].replace(/^#{1,6}(?=\s)/gm, (h) =>
        '#'.repeat(Math.min(h.length + shift, 6))
      );
    });
  }

  return parts
    .join('')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function renderBlog(link) {
  const posts = [];
  const external = [];
  fs.readdirSync(POSTS).forEach((dir) => {
    const file = path.join(POSTS, dir, 'index.md');
    if (!fs.existsSync(file)) return;
    const [fm, body] = parseFrontmatter(fs.readFileSync(file, 'utf8'));
    if (fm.draft === 'true') return;
    const date = String(fm.date || '').slice(0, 10);
    if (fm.externalUrl) {
      external.push({ title: stripEmojis(fm.title || dir), url: fm.externalUrl, date });
    } else {
      posts.push({
        title: stripEmojis(fm.title || dir),
        url: fm.path ? `https://cilium.io${fm.path}` : '',
        date,
        categories: Array.isArray(fm.categories) ? fm.categories.join(', ') : '',
        body: cleanBody(body, 4),
      });
    }
  });
  const newestFirst = (a, b) => b.date.localeCompare(a.date);
  posts.sort(newestFirst);
  external.sort(newestFirst);

  const out = [];
  out.push(`### ${link.title}`);
  out.push('');
  out.push(`URL: ${link.url}`);
  out.push('');
  out.push(
    `Full text of all ${posts.length} posts published on the cilium.io blog, newest first, ` +
      'followed by an index of posts that link to articles hosted elsewhere.'
  );
  out.push('');
  posts.forEach((post) => {
    out.push(`#### ${post.title}`);
    out.push('');
    if (post.url) out.push(`URL: ${post.url}`);
    if (post.date) out.push(`Date: ${post.date}`);
    if (post.categories) out.push(`Categories: ${post.categories}`);
    out.push('');
    if (post.body) {
      out.push(post.body);
      out.push('');
    }
  });

  out.push('#### External posts index');
  out.push('');
  out.push(
    `${external.length} posts on the cilium.io blog link out to articles hosted elsewhere ` +
      '(community sites, adopter engineering blogs, conference recaps). Their full text is ' +
      'not part of cilium.io, so they are indexed here by title only, newest first.'
  );
  out.push('');
  external.forEach((post) => {
    out.push(`- ${post.date ? `${post.date}: ` : ''}[${post.title}](${post.url})`);
  });
  out.push('');
  return out.join('\n');
}

function renderLink(link) {
  const page = link.url.match(
    /^https:\/\/cilium\.io\/(use-cases|outcomes|industries)\/([\w-]+)\/?$/
  );
  if (page) {
    const file = path.join(SRC, page[1], `${page[2]}.jsx`);
    if (fs.existsSync(file)) return renderJsxPage(link, file);
    console.error('MISSING', file);
    return renderStub(link);
  }
  if (/^https:\/\/cilium\.io\/blog\/?$/.test(link.url)) return renderBlog(link);
  if (/^https:\/\/cilium\.io\/llms-full\.txt$/.test(link.url))
    return renderStub(link, '(this file)');
  return renderStub(link);
}

function generate() {
  const { header, sections } = parseMap();
  const note =
    'This is the **full** version (`llms-full.txt`). [llms.txt](https://cilium.io/llms.txt) is ' +
    'the map and this file is the territory: it contains one section per page linked from ' +
    'llms.txt, in the same order. Content pages on cilium.io are inlined in full, the Blog ' +
    'entry expands to the full text of every post published on the site plus an index of ' +
    'external posts, and map entries without substantive on-site text keep their one-line ' +
    'description. For deep technical specifications, see the official documentation at ' +
    'https://docs.cilium.io.';

  const out = [noDashes(header), '', '---', '', note, ''];
  sections.forEach((section) => {
    out.push(`## ${section.heading}`);
    out.push('');
    section.links.forEach((link) => {
      out.push(renderLink(link));
      out.push('');
    });
  });
  return `${out
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd()}\n`;
}

function writeLlmsFull(dest) {
  const result = generate();
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, result);
  return result.length;
}

module.exports = { generate, writeLlmsFull };

if (require.main === module) {
  const dest = process.argv[2] || path.join(ROOT, 'public/llms-full.txt');
  const bytes = writeLlmsFull(dest);
  console.error('WROTE', dest, bytes, 'bytes');
}
