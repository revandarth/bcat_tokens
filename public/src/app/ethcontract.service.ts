import { Injectable } from '@angular/core';
import * as Web3 from 'web3'
import * as TruffleContract from 'truffle-contract';

// RXJS
// import { Observable } from 'rxjs/Observable';
import { Observable} from 'rxjs';
import { bindNodeCallback } from 'rxjs';
import { of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';



declare let require: any;
declare let window: any;
let tokenAbi = require('../../../build/contracts/BitCasasToken.json');
let crowdSaleTokenAbi = require('../../../build/contracts/BitCasasTokenCrowdsale.json');

@Injectable({
  providedIn: 'root'
})

export class EthcontractService {
  private web3Provider: null;
  private contracts: {};
  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    window.web3 = new Web3(this.web3Provider);
   }

  getAccBalance() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase((err, account) => {

        if(err === null) {
            window.web3.eth.getBalance(account, (err, balance) => {
            if(err === null) {
              let etherValue = Web3.utils.fromWei(balance, 'ether');
             // balance.toString(10)
              return resolve([ account, etherValue]);
            } else {
              return reject("Error Loading ACCOUNT");
            }
          });
        }
      });
    });
  }
  
  async getAccounts() {
    console.log("Accounts from getaccount")
    let accounts = window.web3.eth.getAccounts();
    console.log(accounts)
    return await window.web3.eth.getAccounts();
  }

  public getAccount(){
    return window.web3.eth.defaultAccount()
  }

  async getAccs() {
    return await window.web3.eth.getAccounts();
  }
      /** Get the current account */
  // public currentAccount(): Observable<string | Error> {
  //       if (window.web3.eth.defaultAccount) {
  //           return of(window.web3.eth.defaultAccount);
  //       } else {
  //           return this.getAccounts().pipe(
  //               tap((accounts: string[]) => {
  //                   if (accounts.length === 0) { throw new Error('No accounts available'); }
  //               }),
  //               map((accounts: string[]) => accounts[0]),
  //               tap((account: string) => window.web3.defaultAccount = account),
  //               catchError((err: Error) => of(err))
  //           );
  //       }
  //   }

}
