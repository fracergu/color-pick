import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorDetails } from 'src/app/interfaces/color-details';
import { ColorpickService } from 'src/app/services/colorpick.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colorDetails : ColorDetails;

  constructor(private _cps: ColorpickService,
              private _ar: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this._ar.snapshot.params.id;
    this._cps.GetColorDetails(id).subscribe( det => {
      this.colorDetails = det;
      console.log(det)
    })

  }

}
