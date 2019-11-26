import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  //styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: IAffliateData[];
  page = 1;
  pageSize = 10;
  filterReports: any = {
    affiliateId: ''
  }

  constructor(private userservice: UserService) { }

  ngOnInit() {
    // this.reports = [
    //   {
    //     affiliateId: 'xVhSuj',
    //     currentWeek: '345',
    //     lastWeek: '456',
    //     totalPoints: '965'
    //   },
    //   {
    //     affiliateId: 'mNdjks',
    //     currentWeek: '345',
    //     lastWeek: '456',
    //     totalPoints: '965'
    //   },
    //   {
    //     affiliateId: 'ajdSjk',
    //     currentWeek: '345',
    //     lastWeek: '456',
    //     totalPoints: '965'
    //   },
    //   {
    //     affiliateId: 'xVhSuj',
    //     currentWeek: '345',
    //     lastWeek: '456',
    //     totalPoints: '965'
    //   },
    //   {
    //     affiliateId: 'mNdjks',
    //     currentWeek: '345',
    //     lastWeek: '456',
    //     totalPoints: '965'
    //   },
    //   {
    //     affiliateId: 'ajdSjk',
    //     currentWeek: '345',
    //     lastWeek: '456',
    //     totalPoints: '965'
    //   }



    // ]
    this.getReports()
  }

  getReports() {
    this.userservice.getAffliateReport().subscribe((result: any) => {
      if (result.status) {
        this.reports = result.data;
      }
    })
  }

}
interface IAffliateData {
  past_week_points: number
  referralCode: string
  this_week_points: number
  total: number
  _id: string
}
