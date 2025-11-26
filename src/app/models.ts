export interface Game {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  image?: string; // url or data uri
  release?: string;
  tags?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string; // ISO or human readable
  excerpt: string;
  link?: string;
}
