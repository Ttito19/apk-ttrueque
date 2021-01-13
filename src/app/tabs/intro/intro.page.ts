import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
  
    private router: Router

  ) { }

  ngOnInit() {
  }

  onCliente(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        estado: "CLIENTE"
      }
    };

    this.router.navigate(['/auth'],navigationExtras);
  }
  onEmpleado(){
    // this.rout.navigateRoot("/vendedor");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        estado: "ACTIVO"
      }
    };
    this.router.navigate(['/auth'],navigationExtras);
  }


}