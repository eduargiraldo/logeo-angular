import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  correo: string='';
  password: string='';
  nombre: string='';

  
  
  ngOnInit(): void {
  }

  ingresar(){
    localStorage.setItem('correo',this.correo)
    localStorage.setItem('password',this.password)
    localStorage.setItem('nombre',this.nombre)}


}
