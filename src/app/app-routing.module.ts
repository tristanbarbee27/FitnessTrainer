import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'my-classes',
    loadChildren: () => import('./my-classes/my-classes.module').then( m => m.MyClassesPageModule)
  },
  {
    path: 'class-detail',
    loadChildren: () => import('./class-detail/class-detail.module').then( m => m.ClassDetailPageModule)
  },
  {
    path: 'lesson',
    loadChildren: () => import('./lesson/lesson.module').then( m => m.LessonPageModule)
  },
  {
    path: 'gym-details',
    loadChildren: () => import('./gym-details/gym-details.module').then( m => m.GymDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
