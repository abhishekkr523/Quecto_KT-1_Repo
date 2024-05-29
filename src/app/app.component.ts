import { Component, OnInit, inject } from '@angular/core';
import { ActivationStart, ChildActivationStart, NavigationCancel, NavigationError, NavigationStart, ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router,Event } from '@angular/router';
import AOS from 'aos';
import { RouterEventsService } from './services/router-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'OpenSea';
  routes:Router=inject(Router)
  
  constructor(private routerEventsService: RouterEventsService) {

  }
  
  ngOnInit() {
    AOS.init({
      duration: 1200,
    });

  }
}
