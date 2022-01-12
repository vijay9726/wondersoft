import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DevComponent } from './dev/dev.component';
import { TestingComponent } from './testing/testing.component';
import { DeploymentComponent } from './deployment/deployment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServiceComponent,
    RegisterComponent,
    GalleryComponent,
    HomeComponent,
    ErrorpageComponent,
    DevComponent,
    TestingComponent,
    DeploymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
