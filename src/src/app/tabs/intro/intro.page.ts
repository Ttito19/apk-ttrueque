import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, NavigationExtras } from '@angular/router';
=======
import { NavController } from "@ionic/angular";
>>>>>>> e3e5553... changes failed
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
<<<<<<< HEAD
  
    private router: Router
=======
    private _navController: NavController,
>>>>>>> e3e5553... changes failed

  ) { }

  ngOnInit() {
  }

  onCliente(){
<<<<<<< HEAD
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
=======
    this._navController.navigateRoot("/auth");
  }
  onEmpleado(){
    this._navController.navigateRoot("/vendedor");
  }


}
>>>>>>> e3e5553... changes failed
