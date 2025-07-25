import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
imagenes: string[] = [
    'https://i.pinimg.com/originals/11/df/58/11df58e8d717e9358c502a66156ed374.gif',
    'https://i.pinimg.com/originals/f5/2d/56/f52d56f8b42ffba35178d969615e07ca.gif',
    'https://www.jmcprl.net/glosario/TECNOLOGIA.GIF'
  ];

imagen=0;

  siguiente(){
    this.imagen++;
  }

 anterior(){
    this.imagen--;
  }

}
