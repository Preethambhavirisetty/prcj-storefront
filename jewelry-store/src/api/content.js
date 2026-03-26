import { PAGES } from '../mock/pages.js';

const delay = (ms = 100) => new Promise((r) => setTimeout(r, ms));

export async function getPage(slug) {
  await delay();
  const page = PAGES[slug];
  if (!page) throw new Error(`Page not found: ${slug}`);
  return page;
}
