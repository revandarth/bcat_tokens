import { Component } from '@angular/core';
import { EthcontractService } from './ethcontract.service';




// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
       <h2> Find Ether Balance !</h2>
         <div class="card bg-light mb-3">
            <div class="card-body">
               <p class="card-text">Guess current balance </p>
            </div>
         </div>
         <div class="container">
        <div>
          <label>Guess ether balance on current account  </label>
          <input type="number" [value]="guess" (input)="guess = $event.target.value" />
          <button (click)="verifyGuess()" class="btn btn-primary btn-sm">Verify</button>
          <button (click)="initializeWeb3()" class="btn btn-warning btn-
                                                                sm">Reset</button>
          <button (click)="hideShow()" class="btn btn-warning btn-
                                                                sm">Show</button>

        </div>
        <div>
          <label>Alright, I am failed, please reveal now. </label>
          <button (click)="hideShow()" class="btn btn-danger btn-
                                                                sm">Show</button>
        </div>
        <p *ngIf="show">Balance: 
        <span class="badge">{{balance}}</span>
        </p>
       <div>
          <p *ngIf="deviation<0" class="alert alert-warning">Your guess is higher.</p>
          <p *ngIf="deviation>0" class="alert alert-warning">Your guess is lower.</p>
          <p *ngIf="deviation===0" class="alert alert-success">Yes! That's it.</p>
       </div>
       <p class="text-info">No of guesses :
         <span class="badge">{{noOfTries}}</span>
       </p>
       <p class="text-info">account:
       <span class="badge">{{account}}</span>
       </p>
   </div> 
   `
 })

export class AppComponent{
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;
  show = false;


  title = 'your first DApp in Angular';
  accounts:any;
  account:any;
  balance; number;
  remarks='';

  mod={
    account:'',
    balance:0,
    userbalance:0
  }

  constructor(private ethcontractService: EthcontractService ) {
      this.initializeWeb3();
      this.ethcontractService.getAccounts().then(mod => {
        console.log(mod); // "0", "1", "2",
        for (let i in mod) {
          console.log(mod[i]); // "0", "1", "2",
       }      
      })
  }

  initializeWeb3 = () => {
    this.noOfTries=0;
    let that = this;
    this.ethcontractService.getAccBalance().then(mod =>{
      that.account = mod[0];
      that.balance =  mod[1];
    }).catch(function(error){
      console.log(error);
    });
  };
  verifyGuess() {
    this.deviation = this.balance - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }
  hideShow() {
      if(this.show === true){
         this.show = false;
      } else {
        this.show = true;
      }
  }
}