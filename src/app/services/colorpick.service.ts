import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Color } from '../interfaces/color';
import { ColorDetails } from '../interfaces/color-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorpickService {

  baseUrl: string  = 'https://www.thecolorapi.com/';
  colors : Color[] = [];
  loading : boolean = false;

  constructor( private _hc : HttpClient) { }

  GenerateRamdomColor():string {  
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";  
  }

  GetRandomColors(n: number){
    this.loading = true;
    for (var i = 0; i < n; i++){
      this._hc.get<Color>(`${this.baseUrl}id?`, {
        params: {
          rgb: this.GenerateRamdomColor()
        }
      })
      .subscribe( color => {
        this.colors.push(color);
        if(i = n){
          this.loading = false;
        }
      });
    }
  }

  GetColorDetails(hex: string):Observable<ColorDetails>{
    return this._hc.get<ColorDetails>(`${this.baseUrl}scheme?`, {
      params: {
        hex: hex
      }
    })
  }
}
