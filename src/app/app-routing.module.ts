import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MapComponent } from './MyComponents/map/map.component';
import { ProductComponent } from './MyComponents/product/product.component';
import { RunComponent } from './MyComponents/run/run.component';
import { TableComponent } from './MyComponents/table/table.component';
import { TrafficComponent } from './MyComponents/traffic/traffic.component';
import { UpdateComponent } from './MyComponents/update/update.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'product', component: ProductComponent },
  { path: 'table', component: TableComponent },
  { path: 'traffic', component: TrafficComponent },
  { path: 'contact', component: ContactComponent  },
  { path: 'run', component: RunComponent  },
  { path: 'update/:id', component: UpdateComponent  },


  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
