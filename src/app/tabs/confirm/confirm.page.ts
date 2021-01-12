import { Component, OnInit } from '@angular/core';
import {NavController } from "@ionic/angular";
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  constructor(
    private _navController: NavController,
  ) { }

  ngOnInit() {
  }


  back(){

    this._navController.navigateRoot("/lateral/home");
  }
}