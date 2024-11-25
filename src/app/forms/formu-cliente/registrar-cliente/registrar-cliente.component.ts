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
  formInvalido: boolean = false;
  constructor(private serviCliente:ClienteService,private router:Router){}

  ngOnInit(): void {
    
  }
  onSubmit(clienteForm: any){
    console.log(this.objCliente);
    if(clienteForm.valid){
        this.guardarCliente();
    }
    else{
      this.formInvalido =true;
      this.mostrarMensajeError('Por favor completa todos los campor requeridos');
    }

  }

  guardarCliente(){
    this.serviCliente.registrarCliente(this.objCliente).subscribe({
      next: dato => {
        console.log(dato);
        this.mostrarMensajeConfirmacion();
        this.regresarListadoCliente();
      },
      error :error => {
       console.log(error);
       this.mostrarMensajeError('Hubo un problema al registrar el cliente');
      }
  })
  }

  mostrarMensajeConfirmacion(){
   Swal.fire(
    'Registro Exitoso',
    `El cliente <strong>${this.objCliente.nombrecliente}<strong> se ha registrado correctamente`,
    'success'
   ) 
  }

  mostrarMensajeError(mensaje: string){
    Swal.fire(
      'Error',
       mensaje,
      'error'
    )
  }

  regresarListadoCliente(){
    this.router.navigate(['/cliente']);
  }
}
