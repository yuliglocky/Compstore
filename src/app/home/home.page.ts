import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton ],
})
export class HomePage {

  isBoxShadowActive: boolean = false;

  constructor(private router: Router) {}

  changeBoxShadow() {
    this.isBoxShadowActive = !this.isBoxShadowActive;
    // Aquí puedes agregar la lógica para redirigir a otra página usando el Router
    this.router.navigateByUrl('/login');
  }

}
