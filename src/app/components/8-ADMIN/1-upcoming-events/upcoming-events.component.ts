  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Observable } from 'rxjs';
  
  import { IPARTY }                   from 'src/app/components/_custom/interface/party';
  import { aDayIs }                     from 'src/app/components/_custom/functions';
  import { UpcomingPartiesTableControlService } from 'src/app/components/services/upcomingEvents-table-control.service';
  
  @Component({
    selector: 'upcoming-events',
    templateUrl: './upcoming-events.component.html',
    styleUrls: ['./upcoming-events.component.css']
  })
  export class UpcomingEventsComponent implements OnInit {
  
    Parties$: Observable<IPARTY[]>;
    total$: Observable<number>;
  
    constructor(
      public  tableService: UpcomingPartiesTableControlService,
      private activatedRoute:ActivatedRoute,
      public _Router:Router
      ) {
        this.Parties$ = tableService.parties$;
        this.total$ = tableService.total$;
      }

    public toDay : number = Date.parse(new Date().toDateString())
  
    ngOnInit(){
      this.activatedRoute.data.subscribe(
        data=>{
          console.log(data)
          if(data.info.success){
            this.tableService.PARTIES = data.info.party;
          } else {
            alert(data.message)
          }
        },
        err =>  {
          alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        }
      )
    }
    needToRenew(entry:any){
      if (entry.date+aDayIs*8<this.toDay) return true
      return false;
    }
    isDraft(d:number){
      if(d==0) return true;
      return false
    }
    // Modal Buttons
    editPartyDetails(party:IPARTY){
      console.log('Edit Party Details ',party)
    }
    reloadTableData(){
      // let old:number = this.tableService.category;
      // this._auction.getAuctionDetails().subscribe(
      //   data=>{
      //     if(data.success){
      //       this.tableService.category = undefined;
      //       this.tableService.PARTIES = data.parties;
      //       this.tableService.category = old;
      //       this.tableService.searchTerm = '';
      //     } else {
      //       console.log(data.message)
      //     }
      //   },
      //   err=>{console.log(err)}
      //   )
    }
  }