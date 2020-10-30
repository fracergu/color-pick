import { Component } from '@angular/core';
import { ColorpickService } from './services/colorpick.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'color-pick';

  constructor( private _cps: ColorpickService){

  }
}
