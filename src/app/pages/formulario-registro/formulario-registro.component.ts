import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  registrarUsuario() {
    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/usuarios', nuevoUsuario)
      .subscribe({
        next: () => {
          alert('Usuario registrado correctamente');
        },
        error: (err) => {
          console.error('Error al registrar', err);
        }
      });
  }

}
