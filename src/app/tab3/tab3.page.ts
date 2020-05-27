import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.5,
    freeMode: true,
  };
  constructor() {}

}
