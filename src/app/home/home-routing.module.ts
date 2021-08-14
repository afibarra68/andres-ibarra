import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";

const routes: Routes = [

  {
    path:'',
    component:MainComponent
  },
  {
    path:'profile',
    loadChildren: () =>import('../components/components.module').then((m) => m.ComponentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
