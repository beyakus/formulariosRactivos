import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  formAlta: FormGroup;
  tablaUsuario = [];
  opc = [
    {titulo:'Sección RH', area:'rh'},
    {titulo:'Sección Sistemas', area:'ti'},
    {titulo:'Sección Almace', area:'almacen'},
  ]
  nombreArea:string ='';

  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit(){
    this.formAlta = this.formBuilder.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      password:['', Validators.required]
    })
  }

  guardarForm(){
    if(this.formAlta.valid){
      this.tablaUsuario.push(this.formAlta.value);
      this.formAlta.get('password').clearValidators();
      this.formAlta.reset();
    }
    console.log(this.formAlta.valid);
  }

  limpiarForm(){
    this.formAlta.reset();
  }

  eliminarRegistro(index: number){
    this.tablaUsuario.splice(index,1);
  }

  seleccionOpcion(obj: any){
    this.nombreArea = obj.target.value; 
    console.log(obj.target.value);
  }

}
