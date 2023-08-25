import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [ //声明组件，指令和pipe
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
    CartComponent,
    TopBarComponent,
    ShippingComponent,
    HighlightDirective,
  ],
  imports: [ //需要的模块
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],  //模块中提供的服务
  bootstrap: [AppComponent]  //root component, ng insert in index.html
})
export class AppModule { }
