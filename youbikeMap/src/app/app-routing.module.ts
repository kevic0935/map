import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapGroupComponent } from './map-group/map-group.component';
import { ListGroupComponent } from './list-group/list-group.component';

const routes: Routes = [
  { path: 'Map', component: MapGroupComponent },
  { path: 'list', component: ListGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
