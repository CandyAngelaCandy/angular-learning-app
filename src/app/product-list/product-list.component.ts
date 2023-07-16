import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [{ id: 1, name: "Phone XL", description: "Phone XL description", price: 800 },
  { id: 2, name: "Phone Mini", description: "Phone Mini description", price: 500 },
  { id: 3, name: "Phone Standard", description: "", price: 700 }]

  share() {
    alert("The product has been shared!")
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
