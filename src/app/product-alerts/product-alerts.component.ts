import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  //type Product || undefine
  @Input() product: any
  @Output() notify = new EventEmitter();
 }
