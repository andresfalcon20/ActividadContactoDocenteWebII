import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(public authServicio: AutenticacionService, private router: Router){}
 cerrarSesion() {
    this.authServicio.logout();
  this.router.navigateByUrl('/login');
  }
}

