import { Component } from '@angular/core';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class  ContraComponent {
  password: string='';

  
  
  ngOnInit(): void {
  }

  ingresar(){
    localStorage.setItem('password',this.password)
    localStorage.setItem('password',this.password)



}
}
