import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'posts', component: PostsTableComponent},
  { path: 'detail/:id', component: PostDetailComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
