import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //esta url obtiene el listado de clientes
  private baseURL = "http://localhost:8060/api/clientes"
  constructor(
    private httpClient : HttpClient
  ) { }


  obtenetDatosClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}/obtener`); 
  }
  registrarCliente(cliente:Cliente):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/save`, cliente);
  }
  buscarPorId(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/buscar/${id}`)
  }
  buscarporDni(dni:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/buscardni/${dni}`)
  }
}
