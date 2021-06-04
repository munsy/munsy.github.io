import { Inject, Injectable, InjectionToken } from '@angular/core';

// don't put sensitive data in these settings. use a server-side session instead.
export class MunsyioEmailSettings {
  public isOptedIn: boolean;
  public returningUser: boolean;
}

export class MunsyioCookieSettings {
  public isOptedIn: boolean;
  public returningUser: boolean;

  constructor(){}
}

export class MunsyioSettings {
  public cookieSettings: MunsyioCookieSettings;
  
  constructor(){}
}

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}