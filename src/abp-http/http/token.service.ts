import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TokenService {

  private token: string = null;

  constructor(private storage: Storage) {
    this.storage.get('token').then((token) => {
      this.token = token;
    });
  }

  public getToken(): string {
    return this.token;
  }

  public getTokenPromise(): Promise<string> {
    if (this.token) {
      return new Promise((resolve, reject) => {
        resolve(this.token);
      });
    } else {
      return this.storage.get('token');
    }
  }

  public setToken(authToken: string, expireDate?: Date): void {
    this.token = authToken;
    this.storage.set('token', authToken);
  }

  public clearToken(): void {
    this.storage.remove('token');
    this.token = null;
  }

}
