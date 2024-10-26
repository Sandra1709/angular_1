// cart.component.ts
import { Component } from '@angular/core';

interface Car {
  id: number;
  name: string;
  scale: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  availableCars: Car[] = [
    { id: 1, name: 'Ford Mustang', scale: '1:18', price: 50, imageUrl: 'assets/mustang.jpg' },
    { id: 2, name: 'Chevrolet Camaro', scale: '1:24', price: 40, imageUrl: 'assets/camaro.jpg' },
    { id: 3, name: 'Porsche 911', scale: '1:32', price: 60, imageUrl: 'assets/porsche.jpg' }
  ];
  cart: Car[] = [];

  addToCart(car: Car) {
    this.cart.push(car);
  }

  removeFromCart(car: Car) {
    this.cart = this.cart.filter(c => c.id !== car.id);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, car) => total + car.price, 0);
  }
}
