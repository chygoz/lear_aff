import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { api } from '../app.constants';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private readonly http: HttpClient, private router: Router) {
    }

    getThisMonthsReferralPoints(data) {
        return this.http.post(`${api.api_url}user/get_date_wise_referal_points`, data );
    }

    createPayoutTransaction(data){
        return this.http.post(`${api.api_url}user/create_payout_transaction`, data );
    }

    getAffliateReport(){
        return this.http.get(`${api.api_url}user/affliate_report` );
    }


    //   getActiveGamesByCategory(sport: string, category: string): Observable<any> {
    //     return this.http.post(`${api.api_url}admin/active_games_byCategory`, { sport, category });
    //   }



    //   getActiveAds() {
    //     this.ads$.subscribe(ads => {
    //       if (ads === null) {
    //         this.http.get(`${api.api_url}admin/get_active_ads`).subscribe(resp => {
    //           this.ads$.next(resp);
    //         });
    //       }
    //     })
    //   }
}

