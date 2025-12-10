import { Injectable, signal } from '@angular/core';
import type { Game, NewsItem } from './models';

/**
 * Mock data service — uses signals for local reactive state.
 * Replace with API calls as needed.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
  private _games = signal<Game[]>([
    {
      id: 'the-play',
      title: 'The Play',
      tagline: 'Strategy beats spectacle.',
      description: 'The Play is a tactical football game where formations matter more than spectacle, and every decision compounds across a season-like run. Build players, master plays, and outthink your opponent one drive at a time.',
      image: '',
      release: '2026-03-01',
      tags: ['auto-battler', 'sports', 'roguelike']
    },
    {
      id: 'odyssey-of-eons',
      title: 'Odyssey of Eons',
      tagline: 'Some mistakes outlive everyone who made them.',
      description: 'When time shatters, no era remains innocent. Odyssey of Eons is a lore-driven RTS about fractured civilizations, permanent consequences, and the impossible weight of history.',
      image: '',
      release: '2026-11-15',
      tags: ['real-time strategy']
    },
    {
      id: 'deck-and-dagger',
      title: 'Deck and Dagger',
      tagline: 'High-speed heists, neon streets.',
      description: 'Neon Cartel is a stylized top-down racer/stealth hybrid where you assemble your crew and pull off synth-laced heists.',
      image: '',
      release: '2024-11-15',
      tags: ['action', 'roguelite']
    }
  ]);

  private _news = signal<NewsItem[]>([
    {
      id: 'launch-rift',
      title: 'Rift Blade Early Access Announced',
      date: '2025-03-01',
      excerpt: 'We are thrilled to launch Rift Blade in Early Access. Join us and shape the game with feedback.',
      link: '#'
    },
    {
      id: 'neon-update',
      title: 'Neon Cartel v1.1 Patch Notes',
      date: '2024-12-05',
      excerpt: 'Small quality-of-life improvements and performance optimizations.',
      link: '#'
    }
  ]);

  games = this._games.asReadonly();
  news = this._news.asReadonly();

  addGame(game: Game) {
    this._games.update(g => [...g, game]);
  }

  addNews(item: NewsItem) {
    this._news.update(n => [item, ...n]);
  }

  getGameById(id: string) {
    return this._games().find(g => g.id === id) ?? null;
  }
}
