import { Component } from '@angular/core';
import { fadeInLeft } from './core/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeInLeft],
})
export class AppComponent {}
