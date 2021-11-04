import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MapComponent } from './MyComponents/map/map.component';
import { ProductComponent } from './MyComponents/product/product.component';
import { TableComponent } from './MyComponents/table/table.component';
import { TrafficComponent } from './MyComponents/traffic/traffic.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExcuteComponent } from './MyComponents/excute/excute.component';
import { RunComponent } from './MyComponents/run/run.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './MyComponents/update/update.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    ProductComponent,
    TableComponent,
    TrafficComponent,
    ContactComponent,
    ExcuteComponent,
    RunComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
