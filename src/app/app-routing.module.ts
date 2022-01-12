import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { DevComponent } from './dev/dev.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"service",
    component:ServiceComponent
  },
  {
    path:"dev",
    component:DevComponent
  },
  {
    path:"testing",
    component:TestingComponent
  
  },
  {
    path:"deployment",
    component:DeploymentComponent
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
