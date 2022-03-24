import { APP_INITIALIZER, NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { initializeFirebase } from './firebase/firebase.init';
import { FirebaseService } from './firebase/firebase.service';

@NgModule({
  declarations: [],
  imports: [IconsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFirebase,
      multi: true,
      deps: [FirebaseService],
    },
  ],
  exports: [],
})
export class CoreModule {}
