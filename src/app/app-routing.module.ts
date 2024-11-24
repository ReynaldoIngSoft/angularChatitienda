import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormuClienteComponent } from './forms/formu-cliente/formu-cliente.component';
import { RegistrarClienteComponent } from './forms/formu-cliente/registrar-cliente/registrar-cliente.component'

const routes: Routes = [
  {path : 'clientes', component:FormuClienteComponent},
  {path:'',redirectTo:'clientes',pathMatch:'full'},
  {path:'registrar-cliente',component:RegistrarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
