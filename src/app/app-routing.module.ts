import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './pages/users/users.component';
import {HomeComponent} from './pages/home/home.component';
import {UserComponent} from './pages/user/user.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'users',
        component:UsersComponent,
    },
    {
        path:'user/:id',
        component:UserComponent,
    },
    {
        path:'about',
        component:AboutComponent,
    },
    {
        path:'create',
        component:CreateComponent,
    },
    {
        path:'update/:id',
        component:UpdateComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
