import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ChildService } from '../../services/child.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
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
    IonButton,
    IonBackButton,
    IonButtons
  ]
})
export class ChildrenPage implements OnInit {

  children: any[] = [];

  constructor(
    private childService: ChildService,
    private router: Router
  ) {}

  ngOnInit() {
    this.children = this.childService.getChildren();
  }

  openChild(id: string) {
    this.router.navigate(['/children', id]);
  }
}