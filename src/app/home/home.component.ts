import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  payOutForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.payOutForm = this.fb.group({
      refCode: ['', Validators.required],
      points: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  payOutSubmit() {
    console.log(this.payOutForm);
    console.log(this.payOutForm.get('refCode'))
  }

}
