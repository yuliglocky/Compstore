import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonTabs,
  IonNav,
  IonTabBar,
  IonTabButton, 
  IonLabel, 
  IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader,
    IonTitle, 
    IonToolbar, 
    CommonModule,
    FormsModule, 
    IonTabs,
    IonNav,
    IonTabBar,
    IonTabButton, 
    IonLabel, 
    IonIcon]
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
