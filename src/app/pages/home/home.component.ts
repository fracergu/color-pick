import { Component, HostListener, OnInit } from '@angular/core';
import { ColorGridComponent } from 'src/app/components/color-grid/color-grid.component';
import { ColorpickService } from 'src/app/services/colorpick.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _cps: ColorpickService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //Automatic loading when scroll is reaching the end of the page.

    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      window.innerHeight +
      1;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max && !this._cps.loading) {
      this._cps.GetRandomColors(20);
    }
  }

  ngOnInit(): void {
    if (this._cps.colors.length === 0){
      this._cps.GetRandomColors(document.documentElement.scrollHeight / 5);
    }
  }
}
