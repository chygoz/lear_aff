import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  //styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports:any = [];
  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {
    this.reports = [
      {
        affiliateId: 'xVhSuj',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        affiliateId: 'mNdjks',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        affiliateId: 'ajdSjk',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        affiliateId: 'xVhSuj',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        affiliateId: 'mNdjks',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        affiliateId: 'ajdSjk',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      }



    ]
  }

}
