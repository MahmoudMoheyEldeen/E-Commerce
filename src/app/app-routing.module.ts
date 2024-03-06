import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OrdersComponent } from './orders/orders.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { WhishListComponent } from './components/whish-list/whish-list.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'allorders',
    component: OrdersComponent,
    title: 'All-Orders',
  },

  {
    path: 'maincomponent',
    component: MainComponentComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'All-Products' },
      { path: 'cart', component: CartComponent, title: 'Cart' },
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent,
        title: 'Cart',
      },
      {
        path: 'wish-list',
        component: WhishListComponent,
        title: 'wishlist',
      },
      {
        path: 'categories',
        component: CategoryComponent,
        title: 'Category',
      },
      {
        path: 'shipping-address/:id',
        component: ShippingAddressComponent,
        title: 'shipping-address',
      },

      {
        path: 'register',
        component: RegisterComponent,
        title: 'All-Products',
      },
    ],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
