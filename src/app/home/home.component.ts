import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  payOutForm: FormGroup;
  constructor(public fb: FormBuilder, private userservice: UserService) {
    
   }

  ngOnInit() {
    this.payOutForm = this.fb.group({
      referralCode: ['', Validators.required],
      points: ['', Validators.required],
      amount: ['', Validators.required],
      paymentFrom: ['', Validators.required],
      paymentTo: ['', Validators.required]
    });
  }

  payOutSubmit() {
    let fromDate = this.payOutForm.get('paymentFrom').value;
    let toDate = this.payOutForm.get('paymentTo').value;
    let from = new Date(fromDate.year+'-'+fromDate.month+'-'+fromDate.day);
    let to = new Date(toDate.year+'-'+toDate.month+'-'+toDate.day);
    this.payOutForm.controls['paymentFrom'].setValue(from);
    this.payOutForm.controls['paymentTo'].setValue(to);
    this.payOutForm.controls['amount'].setValue(parseInt(this.payOutForm.get('amount').value));

    this.userservice.createPayoutTransaction(this.payOutForm.value).subscribe((data) => {
      console.log(data);
    })

  }

}
