import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, Auth } from 'firebase/auth';
import { Router } from '@angular/router';

import { IonContent, IonHeader, IonTitle, IonToolbar, 
  IonItem, IonLabel,
   IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule,
    IonItem, IonLabel,
    IonButton, IonInput
  ]
})
export class RegisterPage implements OnInit {
  @ViewChild('emailInput') emailInput!: IonInput;
  @ViewChild('passwordInput') passwordInput!: IonInput;

  constructor() { }
  
  ngOnInit() {
  }

}

const auth: Auth = getAuth();

