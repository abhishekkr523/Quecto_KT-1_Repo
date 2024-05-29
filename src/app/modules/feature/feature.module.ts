import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { MusicComponent } from './music/music.component';
import { PhotographyComponent } from './photography/photography.component';
import { PfpsComponent } from './pfps/pfps.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { GammingComponent } from './gamming/gamming.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

const routes:Routes=[
  { path: 'art', component: ArtComponent },
  { path: 'gaming', component: GammingComponent },
  { path: 'memberships', component: MembershipsComponent },
  { path: 'pfps', component: PfpsComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'music', component: MusicComponent },
]


@NgModule({
  declarations: [PfpsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),RouterOutlet,FormsModule,MatDialogModule
  ],
  exports:[PfpsComponent] 
})
export class FeatureModule { 
  constructor(){
    console.log("feature-module lazyly loaded.")
  }
}
