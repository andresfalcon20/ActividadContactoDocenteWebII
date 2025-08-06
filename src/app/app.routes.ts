import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pages/login/login.component';
import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
      { path: "login", component: LoginComponent },
    { path: "registro", component: FormularioRegistroComponent },




  { path: '**', redirectTo: 'home' },
];

