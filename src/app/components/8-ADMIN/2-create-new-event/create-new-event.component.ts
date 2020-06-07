import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateValue, ConvertDate } from '../../_custom/functions';
import { PartyService } from '../../services/party.service';

@Component({
  selector: 'create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.css']
})
export class CreateNewEventComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private _PARTY:PartyService,
    private _ROUTER:Router) { }

  public processing    : Boolean  = false;
  public successMsg    : String   = null;
  public errorMsg      : String   = null;
  public songBook      : Boolean = false;
  public messageScreens: Boolean = false;
  public partyError : Boolean = false;
  public partyMessage : String = null;

  newEventForm = this.fb.group({
    partyID       : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    hostName      : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    date         : ['', [Validators.required]],
    venue         : ['', [Validators.required]],
    type         : ['', [Validators.required]]
  });

  get partyID() { return this.newEventForm.get('partyID');}
  get hostName() { return this.newEventForm.get('hostName');}
  get date() { return this.newEventForm.get('date');}
  get venue() { return this.newEventForm.get('venue');}
  get type() { return this.newEventForm.get('type');}

  ngOnInit(): void {}
  // Confirm
  enableForm(){
    this.processing = false;
    this.partyID.enable();
    this.hostName.enable();
    this.venue.enable();
    this.type.enable();
  }
  disableForm(){
    this.processing = true;
    this.partyID.disable();
    this.hostName.disable();
    this.venue.disable();
    this.type.disable();
  }
  yesno(data:Boolean){
    return data ? 'Yes' : 'No'
  }
  checkPartyID(){
    console.log(this.partyID.value)
    this._PARTY.checkParty(this.partyID.value).subscribe(
      res=>{
        if(res.success){
          console.log('true',res)
        } else {
          this.partyError = true;
          this.partyMessage = 'Party ID Found On Dates : '
          res.party.forEach(e => {
            this.partyMessage += ConvertDate(e.date)
          });
          console.log('false', res)
        }
      },
      err => {
        alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        this.enableForm();
      }
    )
  }
  submit(){
    this.disableForm();
    let newEventData:any = {
      partyID: (this.partyID.value+' ').trim(),
      hostName: (this.hostName.value+' ').trim(),
      venue:(this.venue.value+' ').trim(),
      date:(DateValue(this.date.value)),
      type:this.type.value,
      songBook:this.songBook,
      messageScreens:this.messageScreens
    } 
    console.log(newEventData)  
    this._PARTY.createNewParty(newEventData).subscribe(
      data=>{
        if(!data.success){
          this.errorMsg = data.message;
          setTimeout(()=>{
            this.errorMsg = '';
            this.enableForm();
          }, 2000);
        } else {
          this.successMsg = 'New Event : ' + data.party.partyID + ' created.'
          setTimeout(()=>{
            this.successMsg = '';
            this._ROUTER.navigateByUrl('/admin');
          }, 2000);
        }
      },
      err => {
        alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        this.enableForm();
      }
    )
  }
  cancel(){
    this.disableForm();
    alert('Cancel - Are You Sure ?????');
    this._ROUTER.navigateByUrl('/admin');
  }
}
