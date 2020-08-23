import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { IndiaComponent } from './india/india.component';


const routes: Routes = [
  {path: '', component: WorldComponent},
  {path: 'world', component: WorldComponent},
  {path: 'india', component: IndiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
