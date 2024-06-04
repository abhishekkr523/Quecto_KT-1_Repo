import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { guardGuard } from './guard/guard.guard';
import { FooterComponent } from './footer/footer.component';
import { canDeactiveGuard } from './guard/can-deactive.guard';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path:"", component:MainComponent,
  },
  {
    path:"footer",component:FooterComponent,canActivate:[guardGuard]
  },
  {
    path:"main", component:MainComponent,canDeactivate:[canDeactiveGuard]
  },
  {
    path: 'user-auth',canActivateChild: [guardGuard],children: [
      { path: '', component: FooterComponent }
    ]
  },
  {
    path:"user-auth", component:UserAuthComponent
  },
  { path: 'feature', loadChildren: () => import('./modules/feature/feature.module').then(m => m.FeatureModule) },
  { path: 'form', loadChildren: () => import('./modules/angularForms/angularForms.module').then(m => m.AngularFormsModule) },
  {path:"parent", component:ParentComponent},
  {path:"child", component:ChildComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("app-module lazyly loaded.")
  }
}
