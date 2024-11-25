import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formu-cliente',
  templateUrl: './formu-cliente.component.html',
  styleUrls: ['./formu-cliente.component.css']
})
export class FormuClienteComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteservice:ClienteService,private router:Router){}

  ngOnInit(): void {
    this.obtenerClientes();
    }

    private obtenerClientes(){
      this.clienteservice.obtenetDatosClientes().subscribe(dato =>{
        this.clientes = dato;
      });
    }

    private registrarCliente(){
      this.router.navigate(['/registrarcliente']);
    }
  
  }


