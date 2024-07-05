import { base } from '../astro.config.mjs';

export default function getLink(url: string = "/"): string {
  const separator = url.startsWith('/') ? '' : '/';
  return base + separator + url;
}