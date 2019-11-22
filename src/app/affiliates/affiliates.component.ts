import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  //styleUrls: ['./affiliates.component.css']
})
export class AffiliatesComponent implements OnInit {
  affiliateUsers:any = []
  constructor() { }

  ngOnInit() {
    this.affiliateUsers = [
      {
        name: 'Jonah Kenos',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        name: 'Dangone Bella',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        name: 'Micheal Boltton',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        name: 'Jonah Kenos',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        name: 'Dangone Bella',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        name: 'Micheal Boltton',
        referalCount: '345',
        points: '456',
        amount: '965'
      }
    ]
  }

}
