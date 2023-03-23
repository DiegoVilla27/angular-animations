import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'animation', component: AnimationComponent, data: { animation: 'AnimationPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
