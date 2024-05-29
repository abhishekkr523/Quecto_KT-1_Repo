import { Injectable, NgModule } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized, GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd, RouteConfigLoadStart, RouteConfigLoadEnd, ChildActivationStart, ChildActivationEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouterEventsService {

  constructor(private router: Router) {
    this.subscribeToRouterEvents();
  }

  private subscribeToRouterEvents() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('navigationStart:', event);
      } else if (event instanceof NavigationEnd) {
        console.log('navigationEnd:', event);
      } else if (event instanceof NavigationCancel) {
        console.log('navigationCancel:', event);
      } else if (event instanceof NavigationError) {
        console.log('navigationError:', event);
      } else if (event instanceof RoutesRecognized) {
        console.log('routesRecognized:', event);
      } else if (event instanceof GuardsCheckStart) {
        console.log('guardsCheckStart:', event);
      } else if (event instanceof GuardsCheckEnd) {
        console.log('guardsCheckEnd:', event);
      } else if (event instanceof ResolveStart) {
        console.log('resolveStart:', event);
      } else if (event instanceof ResolveEnd) {
        console.log('resolveEnd:', event);
      } else if (event instanceof RouteConfigLoadStart) {
        console.log('routeConfigLoadStart:', event);
      } else if (event instanceof RouteConfigLoadEnd) {
        console.log('routeConfigLoadEnd:', event);
      } else if (event instanceof ChildActivationStart) {
        console.log('ChildActivationStart:', event);
      } else if (event instanceof ChildActivationEnd) {
        console.log('ChildActivationEnd:', event);
      }
    });
  }
}
