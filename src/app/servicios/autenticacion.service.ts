import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

    
  constructor() { }

  private usuarioValido= {
    usuario: 'admin',
    password: 'admin123'
  }

  login = (usuario:string, password:string) => {
if(usuario === this.usuarioValido.usuario && password === this.usuarioValido.password) {
      return true;
    } 
    return false;
  }

  sesionIniciada = () => {
    return localStorage.getItem('user') !== null;
    }

    logout = () => {
      localStorage.removeItem('user');
    }

}
