import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { 
    path: 'sign-in', 
    component: SignInComponent
  },
  { 
    path: 'sign-up', 
    component: SignUpComponent
  },
  { 
    path: 'posts', 
    canActivate: [authGuard],
    component: PostsTableComponent,
  },
  { 
    path: 'posts/:id', 
    canActivate: [authGuard],
    component: PostDetailComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
