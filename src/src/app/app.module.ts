<ion-app>
  <ion-menu side="start" content-id="main-content">
    <ion-content>
      <div class="back-sidebar-left-ttrq">
        <div class="cont-more-info">
          <!-- <div class="cont-logo-sdlf-ttrq">
            <img src="../../assets/img/utilities/user-default.jpg" alt="">
          </div> -->
          <div class="cont-logo-sdlf-ttrq" *ngIf="userData.logo!=undefined"  >
            <img src="http://trueque.ga/shop/images/store/{{userData.logo}}">
          </div>
          <div class="cont-logo-sdlf-ttrq" *ngIf="userData.logo==undefined"  >
            <img src="../../assets/img/utilities/user-default.jpg">
          </div>
          <div class="cont-info-client">
            <h1> {{userData.nombre_cliente + ' ' + userData.apellido_cliente}} </h1>  
            <p *ngIf="userData.logo!=undefined"  >Tienda</p>    
            <p *ngIf="userData.logo==undefined"  >Cliente</p>     
          </div>
        </div>
        <ion-list lines="none">
          <ion-menu-toggle>
            <ion-item color="ion-transparent" routerLink="/lateral/profile" routerDirection="root"  >
              <ion-icon name="person-circle-outline" slot="start"></ion-icon>
              <ion-label>Mi Cuenta</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle *ngFor="let p of pages">
            <ion-item color="ion-transparent" routerLink="{{p.url}}" routerDirection="root">
              <ion-icon name="{{p.icon}}" slot="start"></ion-icon>
              <ion-label>{{p.title}}</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle>
            <ion-item color="ion-transparent" (click)="onLogout()" button>
              <ion-icon name="log-out" slot="start"></ion-icon>
              <ion-label>{{ 'LOGOUT.title' | translate }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
        <!-- <div class="footer-sdbl-ttrq">
          <a class="link-a" onclick="window.open('https://csscreativos.com', '_system', 'location=yes')">
            <span>Desarrollado por CSS CREATIVOS&copy;</span>
          </a>
        </div> -->
      </div>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main-content"></ion-router-outlet>

  <ion-tabs   *ngIf="userData.condicion==ACTIVO" >
    <ion-tab-bar slot="bottom" >
      <ion-tab-button tab="home" >
        <ion-icon name="home" ></ion-icon>
        <ion-label>{{ 'HOME.title' | translate }}</ion-label>
      </ion-tab-button>


      <ion-tab-button tab="about"  >
        <ion-icon name="information-circle"></ion-icon>
        <ion-label>{{ 'ABOUT.title' | translate }}</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>