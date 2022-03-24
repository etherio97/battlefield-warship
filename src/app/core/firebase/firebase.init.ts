import { FirebaseService } from './firebase.service';
import { FIREBASE_CONFIG } from 'src/app/app.config';

export function initializeFirebase(firebase: FirebaseService) {
  return () => {
    (<any>console).time('firebase');
    firebase.init(FIREBASE_CONFIG);
    (<any>console).timeEnd('firebase');
  };
}
