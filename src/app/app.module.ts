import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ConnectService } from './connect.service';
import { UsernameComponent } from './username/username.component';
import { ProdetComponent } from './prodet/prodet.component';
const rou: Routes=[
{path:' ' ,component:AppComponent},
{path:'details' ,component:DetailsComponent},
{path:'username' ,component:UsernameComponent},
{path:'prodent' ,component:ProdetComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    UsernameComponent,
    ProdetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rou)
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
