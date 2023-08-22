import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: 'posts', component: PostsTableComponent},
  { path: 'detail/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
