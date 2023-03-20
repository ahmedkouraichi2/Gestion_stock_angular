import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ProduitComponent } from './components/produit/produit.component';

const routes: Routes = [
  {path:"produit",component:ProduitComponent},
  {path:"",redirectTo:"dashbord",pathMatch :'full'},
  {path:"dashbord",component:DashbordComponent}
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
