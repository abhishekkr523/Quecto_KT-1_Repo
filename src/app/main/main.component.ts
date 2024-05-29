import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface carouselContent1type {
  image: string;
  title: string;
  floor: string;
  eth1: string;
  volume: string;
  eth2: string;

}
interface carouselContent2type {
  image: string;
  title: string;
}
interface carouselContent3type {
  image: string;
  title: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {
  activeIndex1: number = 0; // Initialize active index to the first item
  setActive1(index: number): void {
    this.activeIndex1 = index; // Set the active index when a list item is clicked
  }

  activeIndex2: number = 0; // Initialize active index to the first item
  setActive2(index: number): void {
    this.activeIndex2 = index; // Set the active index when a list item is clicked
  }

  activeIndex3: number = 2; // Initialize active index to the first item
  setActive3(index: number): void {
    this.activeIndex3 = index; // Set the active index when a list item is clicked
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    // margin:10,
    responsive: {
      0: {
        items: 1
      },
      422: {
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

  customOptions2nd: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    // navText: [
    //   '<img src="/assets/images/chevron-left-solid.svg" alt="Left Arrow">',
    //   '<img src="/assets/images/chevron-right-solid.svg" alt="Right Arrow">'
    // ],
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      422: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true,
  }
  


  showSideNav: boolean = false;

    toggleSideNav(): void {
        this.showSideNav = !this.showSideNav;
    }



    
  carouselContent1: carouselContent1type[] = [
    { image: "/assets/images/Rectangle 19.png", title: "Edit By Cam", floor: "Floor", eth1: "0.12 ETH", volume: "24h Volume", eth2: "432 ETh" },
    { image: "/assets/images/Rectangle 20.png", title: "Edit By Cam", floor: "Floor", eth1: "324 ETH", volume: "24h Volume", eth2: "1.03 ETH" },
    { image: "/assets/images/Rectangle 21.png", title: "Edit By Cam", floor: "Floor", eth1: "3.23 ETH", volume: "24h Volume", eth2: "4,190 ETH" },
  ];

  carouselContent2: carouselContent2type[] = [
    { image: "/assets/images/Rectangle 19 (1).png", title: "This is an NFT" },
    { image: "/assets/images/Rectangle 20 (1).png", title: "The way to buy an NFT" },
    { image: "/assets/images/Rectangle 21 (1).png", title: "Create an NFT" }
  ];

  carouselContent3:carouselContent3type[] = [
    { image: "/assets/images/Rectangle 25.png", title: "Art" },
    { image: "/assets/images/Rectangle 26.png", title: "Gaming" },
    { image: "/assets/images/Rectangle 27.png", title: "Photography" }
  ];
}
