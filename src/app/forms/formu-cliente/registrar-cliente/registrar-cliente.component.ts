import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
 
  objCliente : Cliente = new Cliente();
  constructor(private serviCliente:ClienteService,private router:Router){}

  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.objCliente);
    this.guardarCliente();
  }

  guardarCliente(){
    this.serviCliente.registrarCliente(this.objCliente).subscribe(
      dato => {
        console.log(dato);
        this.mostrarMensajeConfirmacion();
      },
      error => {
       console.log(error);
      }
    )
  }

  mostrarMensajeConfirmacion(){
   Swal.fire(
    'Registro Exitoso',
    `El cliente <strong>${this.objCliente.nombrecliente}<strong> se ha registrado correctamente`,
    'success'
   ) 
  }

  mostrarMensajeError(){
    Swal.fire(
      'Registro Erroneo',
      `No se pudo registrar`,
      'error'
    )
  }

  regresarListadoCliente(){
    this.router.navigate(['/cliente']);
  }
}
