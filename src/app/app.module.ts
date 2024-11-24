import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Si usas rutas
import { AppComponent } from './app.component';
import { FormuClienteComponent } from './forms/formu-cliente/formu-cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RegistrarClienteComponent } from './forms/formu-cliente/registrar-cliente/registrar-cliente.component'

const routes: Routes = [
 {
  path: 'cliente',
  component:  FormuClienteComponent
},
{
  path:'registrarcliente',
  component: RegistrarClienteComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    FormuClienteComponent,
    RegistrarClienteComponent, // Otros componentes aquí
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule // Si tienes un archivo app-routing.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

