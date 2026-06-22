import { Component, OnInit } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
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
export class CampaignsPage implements OnInit {

  campaigns: any[] = [];

  constructor(
    private campaignService: CampaignService
  ) {}

  ngOnInit() {
    this.campaigns =
      this.campaignService.getCampaigns();
  }
}