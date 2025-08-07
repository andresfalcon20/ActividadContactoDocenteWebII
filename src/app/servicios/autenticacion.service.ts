import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../pages/login/usuario';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  
  addUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, user);
  }

  
  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  
  getUserByEmail(email: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}email=${email}`);
  }




  
 login(usuario: string, password: string): Observable<boolean> {
  return this.getUserByEmail(usuario).pipe(
    map((usuarios: Usuario[]) => {
      const userEncontrado = usuarios.find(user => user.password === password);
      if (userEncontrado) {
        localStorage.setItem('user', usuario);
        return true;
      }
      return false;
    })
  );
}


  sesionIniciada = ()=>{
    return localStorage.getItem('user') !==null;

  }

  logout=()=>{
    localStorage.removeItem('user');
  }

    
}



