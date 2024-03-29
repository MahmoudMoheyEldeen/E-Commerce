import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponentComponent } from './main-component/main-component.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { OrdersComponent } from './orders/orders.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SplitStringPipe } from './pipes/split-string.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { AddHeaderInterceptor } from './interceptors/add-header.interceptor';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { WhishListComponent } from './components/whish-list/whish-list.component';
import { CategoryComponent } from './components/category/category.component';
import { DropdownModule } from 'primeng/dropdown';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponentComponent,
    CartComponent,
    ProductDetailsComponent,
    ErrorPageComponent,
    OrdersComponent,
    SplitStringPipe,
    SearchPipe,
    ShippingAddressComponent,
    WhishListComponent,
    CategoryComponent,
    SubCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    RatingModule,
    TagModule,
    FormsModule,
    RouterModule,
    CardModule,
    GalleriaModule,
    ToastModule,
    MessagesModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
