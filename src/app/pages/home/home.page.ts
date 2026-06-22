import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton
} from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChildService } from '../../services/child.service';
import { CampaignService } from '../../services/campaign.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class HomePage implements OnInit {

  children: any[] = [];
  campaigns: any[] = [];
  totalChildren = 0;

  constructor(
    private childService: ChildService,
    private campaignService: CampaignService,
    private router: Router
  ) {}

  ngOnInit() {
    this.totalChildren = this.children.length;
    this.children = this.childService.getChildren();
    this.campaigns = this.campaignService.getActiveCampaigns();
  }

  goChildren() {
    this.router.navigate(['/children']);
  }

  goCampaigns() {
    this.router.navigate(['/campaigns']);
  }
}