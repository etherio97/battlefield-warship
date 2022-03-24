import { FirebaseService } from './firebase.service';
import { FIREBASE_CONFIG } from 'src/app/app.config';

export function initializeFirebase(firebase: FirebaseService) {
  return () => {
    firebase.init(FIREBASE_CONFIG);
  };
}