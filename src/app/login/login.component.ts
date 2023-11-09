import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  correo: string='';
  password: string='';
  
  ngOnInit(): void {
  }

  ingresarNombre(){
    localStorage.setItem('correo',this.correo)
    localStorage.setItem('password',this.password)}

}