import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  { path: 'animate', component: AnimateComponent },
  { path: 'second-page', component: SecondPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }