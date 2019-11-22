import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  //styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports:any = []

  constructor() { }

  ngOnInit() {
    this.reports = [
      {
        name: 'Jonah Kenos',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        name: 'Dangone Bella',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        name: 'Micheal Boltton',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        name: 'Jonah Kenos',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        name: 'Dangone Bella',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      },
      {
        name: 'Micheal Boltton',
        currentWeek: '345',
        lastWeek: '456',
        totalPoints: '965'
      }



    ]
  }

}
