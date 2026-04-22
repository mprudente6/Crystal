import { Component,AfterViewInit  } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  standalone: true,
  selector: 'app-reservation',
  imports: [],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation implements AfterViewInit {

stripe: any;
elements: any;
ready = false;

async ngAfterViewInit() {

  this.stripe = await loadStripe('pk_test_51TOf9GEPnZeGMo9Vky7fv6JqQ2CnGJLEAin7fSHO5v7vhkPecSX0PsFkf4j2fj5PpCXXDTNfdL1WZuj0mdMFUmpO008reUg7pd');

  const res = await fetch('http://localhost:3000/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify({ amount: 5000 })
  });

  const data = await res.json();

  this.elements = this.stripe.elements({
    clientSecret: data.clientSecret
  });

  const paymentElement = this.elements.create('payment');
  paymentElement.mount('#payment-element');
  this.ready = true;
}

async pay() {
  const { error } = await this.stripe.confirmPayment({
    elements: this.elements,
    confirmParams: {
      return_url: 'https://localhost4200/success',
    },
  });

  if (error) {
    console.error(error.message);
  }
}
}
