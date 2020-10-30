import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColorpickService } from 'src/app/services/colorpick.service';

@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.css']
})
export class ColorGridComponent implements OnInit {

  constructor(public _cps: ColorpickService,
              private _rtr: Router) { }

  ngOnInit(): void {
  }

  colorClick(id: string)
  {
    if(!this._cps.loading){
      this._rtr.navigate(['/color', id]);
    }
  }

}
