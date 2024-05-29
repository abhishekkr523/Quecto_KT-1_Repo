import { Component, OnInit, input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
[x: string]: any;
  // type: any;
  @Input() type: string = "";
  @Input() firstData: any;
  @Input() secondData: any;
  @Input() thirdData: any;
  ngOnInit(): void {
    console.log("sdata",this.secondData[0].image)
    // console.log("data",this.thirdData)

    if (this.firstData) {
      console.log("Data received successfully:", this.firstData[0].title);
    } else {
      console.error("First data is undefined.");
    }
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }



}
