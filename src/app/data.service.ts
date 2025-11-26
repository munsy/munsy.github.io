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
      tagline: 'Slash between dimensions.',
      description: 'Rift Blade is a 2.5D action roguelite that blends crisp melee with portal mechanics. Fight, craft, and tear open rifts to new arenas.',
      image: '',
      release: '2025-03-01',
      tags: ['action', 'roguelite']
    },
    {
      id: 'deck-and-dagger',
      title: 'Deck and Dagger',
      tagline: 'High-speed heists, neon streets.',
      description: 'Neon Cartel is a stylized top-down racer/stealth hybrid where you assemble your crew and pull off synth-laced heists.',
      image: '',
      release: '2024-11-15',
      tags: ['racing', 'stealth']
    },
    {
      id: 'odyssey-of-eons',
      title: 'Odyssey of Eons',
      tagline: 'High-speed heists, neon streets.',
      description: 'Neon Cartel is a stylized top-down racer/stealth hybrid where you assemble your crew and pull off synth-laced heists.',
      image: '',
      release: '2024-11-15',
      tags: ['racing', 'stealth']
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
