import { Injectable } from '@angular/core';
import { FirebaseService } from '../core/firebase/firebase.service';
import { onAuthStateChanged, getAuth, User, Unsubscribe } from 'firebase/auth';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _firebase: FirebaseService) {}

  get user$(): Observable<User | null> {
    return this._firebase.auth$;
  }
}
