import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/data/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  //type Product || undefine
  @Input() product: Product | undefined
  @Output() notify = new EventEmitter();
 }
