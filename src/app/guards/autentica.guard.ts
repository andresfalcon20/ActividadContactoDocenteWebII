import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

export const autenticaGuard: CanActivateFn = (route, state) => {

/*const router = inject(Router);
  const loginExitoso = localStorage.getItem('user');
  if (!loginExitoso) {
    return true;
  }else{
    return router.parseUrl('/');
  }*/


    const authServicio = inject(AutenticacionService);
    const router = inject(Router);

    if(authServicio.sesionIniciada()) {
      return true;
    }else{
      localStorage.setItem('redirectUrl', state.url);
      return router.parseUrl('/login');
    }




};
