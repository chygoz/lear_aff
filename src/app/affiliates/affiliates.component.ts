import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  //styleUrls: ['./affiliates.component.css']
})
export class AffiliatesComponent implements OnInit {
  affiliateUsers:any = [];
  page = 1;
  pageSize = 10;
  affiliateUser: any = { affiliateId: ''}
  constructor() { }

  ngOnInit() {
    this.affiliateUsers = [{
      affiliateId: 'abcd',
      userName: 'Jonah Kenos',
      bankName: 'Access Bank',
      accountNumber: '0239487423',
      referalCount: '345',
      points: '456',
      amount: '965'
    },
    {
      affiliateId: 'ajdSjk',
      userName: 'Jonah Kenos',
      bankName: 'Access Bank',
      accountNumber: '0239487423',
      referalCount: '345',
      points: '456',
      amount: '965'
    },
    {
      affiliateId: 'ajdSjkkk',
      userName: 'Jonah Kenos',
      bankName: 'Access Bank',
      accountNumber: '0239487423',
      referalCount: '345',
      points: '456',
      amount: '965'
    },
    {
      affiliateId: 'ajdSjk',
      userName: 'Jonah Kenos',
      bankName: 'Access Bank',
      accountNumber: '0239487423',
      referalCount: '345',
      points: '456',
      amount: '965'
    },
    {
      affiliateId: 'ajdSjk',
      userName: 'Jonah Kenos',
      bankName: 'Access Bank',
      accountNumber: '0239487423',
      referalCount: '345',
      points: '456',
      amount: '965'
    },
    {
      affiliateId: 'ajdSjkkk',
      userName: 'Jonah Kenos',
      bankName: 'Access Bank',
      accountNumber: '0239487423',
      referalCount: '345',
      points: '456',
      amount: '965'
    },
      {
        affiliateId: 'ajdSjk',
        userName: 'Jonah Kenos',
        bankName: 'Access Bank',
        accountNumber: '0239487423',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        affiliateId: 'ajdSjk',
        userName: 'Jonah Kenos',
        bankName: 'Access Bank',
        accountNumber: '0239487423',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        affiliateId: 'ajdSjkkk',
        userName: 'Jonah Kenos',
        bankName: 'Access Bank',
        accountNumber: '0239487423',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        affiliateId: 'ajdSjk',
        userName: 'Jonah Kenos',
        bankName: 'Access Bank',
        accountNumber: '0239487423',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        affiliateId: 'ajdSjk',
        userName: 'Jonah Kenos',
        bankName: 'Access Bank',
        accountNumber: '0239487423',
        referalCount: '345',
        points: '456',
        amount: '965'
      },
      {
        affiliateId: 'abcd',
        userName: 'Jonah Kenos',
        bankName: 'Access Bank',
        accountNumber: '0239487423',
        referalCount: '345',
        points: '456',
        amount: '965'
      }
    ]
  }

}
