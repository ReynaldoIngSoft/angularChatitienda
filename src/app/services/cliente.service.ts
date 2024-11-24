import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //esta url obtiene el listado de clientes
  private baseURL = "http://localhost:8060/api/clientes/obtener"
  private urlRegi = "http://localhost:8060/api/clientes/guardar"
  constructor(
    private httpClient : HttpClient
  ) { }


  obtenetDatosClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`); 
  }
  registrarCliente(cliente:Cliente):Observable<Object>{
    return this.httpClient.post(`${this.urlRegi}`,cliente);
  }
 
}
