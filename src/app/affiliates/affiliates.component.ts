import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  //styleUrls: ['./affiliates.component.css']
})
export class AffiliatesComponent implements OnInit {
  affiliateUsers:any = [];
  page = 1;
  pageSize = 10;
  affiliateUser: any = { affiliateId: ''};
  from: any;
  to: any;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    
  }

  getAffData(){
    if(this.from && this.to){
      let fromDate = this.from.year+'-'+(this.from.month<10?'0'+this.from.month:this.from.month)+'-'+(this.from.day<10?'0'+this.from.day:this.from.day);
      let toDate = this.to.year+'-'+(this.to.month<10?'0'+this.to.month:this.to.month)+'-'+(this.to.day<10?'0'+this.to.day:this.to.day);
      let params = {
          from: fromDate,
          to: toDate
        }
        this.userservice.getThisMonthsReferralPoints(params).subscribe((res:any) => {
          this.affiliateUsers = res.data;
        })
    }
  }

}
