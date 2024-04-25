import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
     FormsModule, IonButton ]
})
export class LoginPage implements OnInit {
  isBoxShadowActive: boolean = false;

  constructor(private router: Router) {}

  changeBoxShadow() {
    this.isBoxShadowActive = !this.isBoxShadowActive;
    // Aquí puedes agregar la lógica para redirigir a otra página usando el Router
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
