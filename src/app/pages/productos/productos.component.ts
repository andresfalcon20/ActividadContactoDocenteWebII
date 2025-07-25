import { Component } from '@angular/core';
import { Producto } from './productos';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  esMayorDeEdad: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Producto[]>('assets/productos.json').subscribe(data => {
      this.productos = data;
      this.productosFiltrados = data;  
    });
  }

  verificarEdad(esMayor: boolean): void {
    this.esMayorDeEdad = esMayor;

    if (esMayor) {
      this.productosFiltrados = this.productos.filter(producto => producto.edadMinima <= 18);
    } else {
      this.productosFiltrados = this.productos.filter(producto => producto.edadMinima === 0);
    }
  }
}
