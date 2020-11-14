import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
    private _navController: NavController,

  ) { }

  ngOnInit() {
  }

  onCliente(){
    this._navController.navigateRoot("/lateral");
  }
  onEmpleado(){
    this._navController.navigateRoot("/lateral");
  }


}
