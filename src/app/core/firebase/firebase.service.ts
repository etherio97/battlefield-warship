import { Injectable } from '@angular/core';
import { initializeApp, FirebaseOptions, getApps, FirebaseApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firebaseApp!: FirebaseApp;

  init(options: FirebaseOptions): void {
    if (getApps().length) return;
    this.firebaseApp = initializeApp(options);
  }
}