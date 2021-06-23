import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreatephoneDTO } from 'src/app/services/domain/settings/phone/phone';
import { Productervice } from 'src/app/services/domain/settings/phone/product.service';

@Component({
  selector: 'app-create-phones',
  templateUrl: './create-phone.component.html',
  styleUrls: ['./create-phone.component.css']
})
export class CreatephoneComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private service: Productervice) { }

  phoneFormGroup = new FormGroup({
    brand: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    type: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    battery: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });
  phone: CreatephoneDTO;
  ngOnInit(): void { }

  succes() {
    this.snackBar.open('Success added', 'New phone!', {
      duration: 1000,
    });
  }
  error() {
    this.snackBar.open('Unsuccessful Added', 'The phone is exist!', {
      duration: 1000,
    });
  }
  createProduct = () => {
    this.phone = {
      brand: this.phoneFormGroup.get('brand').value,
      type: this.phoneFormGroup.get('type').value,
      battery: this.phoneFormGroup.get('battery').value,
      date: this.phoneFormGroup.get('date').value,
      price: this.phoneFormGroup.get('price').value,
      quantity: this.phoneFormGroup.get('quantity').value,
    };
    this.service.createphone(this.phone.brand, this.phone.type, this.phone.battery, this.phone.date, this.phone.price, this.phone.quantity).subscribe(val => {
      if (val != null) {
        this.succes();
      }

    }, (err) => {
      this.error();

    });
  }


}
