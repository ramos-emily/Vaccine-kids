import { Component, OnInit } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { VaccineService } from '../../services/vaccine.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.page.html',
  styleUrls: ['./vaccines.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonBackButton,
    IonButtons
  ]
})
export class VaccinesPage implements OnInit {

  vaccines: any[] = [];

  constructor(
    private vaccineService: VaccineService
  ) {}

  ngOnInit() {
    this.vaccines =
      this.vaccineService.getVaccines();
  }
}