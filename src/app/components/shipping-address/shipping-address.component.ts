import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss'],
})
export class ShippingAddressComponent {
  cartId: string = '';
  constructor(
    private _payment: PaymentService,
    private _activateRoute: ActivatedRoute
  ) {}

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
  });

  submitShippingAddress(dataform: FormGroup) {
    // console.log(dataform.value);
    // this._activateRoute.params.subscribe((params) => {
    //   console.log(params);
    //   this.cartId = params['id'];
    // });
    this._payment
      .checkout('65e71e7abe8b523235fdf475', dataform.value)
      .subscribe({
        next: (response) => {
          console.log(response);

          if (response.status == 'success') {
            window.location.href = response.session.url;
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
