import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserAuthComponent } from '../user-auth/user-auth.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // @ViewChild(CarouselComponent) carousel!: CarouselComponent;

  activeIndex1: number = 0; // Initialize active index to the first item

  constructor(public dialog: MatDialog) {}
  
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

  customOptionsNavBar: OwlOptions = {
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
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      422: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

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
        items: 1,
      },
      422: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

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
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      422: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  showSideNav: boolean = false;

  toggleSideNav(): void {
    this.showSideNav = !this.showSideNav;
  }


  openDialog(){
    this.dialog.open(UserAuthComponent, {
      width: 'auto', // Set the width to auto
      maxWidth: '80vw', // Optionally, set a maximum width
    });
  }
}
