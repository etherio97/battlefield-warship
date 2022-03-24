import { Injectable } from '@angular/core';
import {
  initializeApp,
  FirebaseOptions,
  getApps,
  FirebaseApp,
} from 'firebase/app';
import { getAuth, onAuthStateChanged, Unsubscribe, User } from 'firebase/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private _unsubscribeOnAuthStateChanged!: Unsubscribe;

  private readonly _auth$: Subject<User | null> = new Subject<User | null>();

  private _app!: FirebaseApp;

  init(options: FirebaseOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this._app) {
        return reject(new Error('Already initialize firebase app'));
      }
      this._app = initializeApp(options);
      this.subscribeOnAuthStateChanged().then(resolve).catch(reject);
    });
  }

  subscribeOnAuthStateChanged(): Promise<void> {
    let hasResolved = false;
    return new Promise((resolve) => {
      this._unsubscribeOnAuthStateChanged = onAuthStateChanged(
        getAuth(),
        (userOrNull) => {
          console.log(
            '[INFO] src/app/core/firebase/firebase.service.ts',
            hasResolved
          );
          this._auth$.next(userOrNull);
          if (!hasResolved) {
            resolve();
            hasResolved = true;
          }
        }
      );
    });
  }

  unsubscribeOnAuthStateChanged(): void {
    this._unsubscribeOnAuthStateChanged();
  }

  get auth$() {
    return this._auth$.asObservable();
  }
}
