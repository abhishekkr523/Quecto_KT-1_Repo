import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FeatureModule } from './modules/feature/feature.module';
import { RouterEventsService } from './services/router-events.service';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AngularFormsModule } from './modules/angularForms/angularForms.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CarouselComponent,
    UserAuthComponent,
    ChildComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogClose,
    MatDialogActions,
    FeatureModule,
    ReactiveFormsModule,
    AngularFormsModule
  ],
 
  providers: [
    provideAnimationsAsync(), RouterEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
