import DOMPurify from 'dompurify';

export function sanitize(html) {
  return DOMPurify.sanitize(html);
}
