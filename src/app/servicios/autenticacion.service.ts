import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../pages/login/usuario';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

    
constructor(private http: HttpClient) { }

private apiUrl = 'http://localhost:3000'; 


  private usuarioValido= {
    usuario: 'admin',
    password: 'admin123'
  }

  sesionIniciada = () => {
    return localStorage.getItem('user') !== null;
    }

    logout = () => {
      localStorage.removeItem('user');
    }

    login(email: string, password: string): Observable<boolean> {
  return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`).pipe(
    map(usuarios => {
      const usuarioValido = usuarios.find(u => u.email === email && u.password === password);
      if (usuarioValido) {
        localStorage.setItem('usuario', JSON.stringify(usuarioValido));
        return true;
      }
      return false;
    })
  );
}


}
