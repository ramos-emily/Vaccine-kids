import { Component, OnInit } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonChip
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ChildService } from '../../services/child.service';
import { VaccineService } from '../../services/vaccine.service';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonChip
  ]
})
export class ChildDetailPage implements OnInit {

  progress = 0;

  pendingCount = 0;

  child: any;

  records: any[] = [];

  vaccines: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private childService: ChildService,
    public vaccineService: VaccineService
  ) {}

  getVaccineName(vaccineId: string): string {
    return (
      this.vaccineService.getVaccineById(vaccineId)?.shortName ||
      vaccineId
    );
  }

  getStatus(vaccine: any): string {

    if (!this.child) {
      return 'pending';
    }

    const applied =
      this.vaccineService.getAppliedDoseCount(
        this.child.id,
        vaccine.id
      );

    if (applied >= vaccine.totalDoses) {
      return 'applied';
    }

    const overdue =
      this.vaccineService.isOverdue(
        this.child.birthDate,
        vaccine,
        applied
      );

    if (overdue) {
      return 'overdue';
    }

    return 'pending';
  }

  ngOnInit() {

    const id =
      this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.child =
      this.childService.getChildById(id);

    this.records =
      this.vaccineService.getRecords(id);

    this.vaccines =
      this.vaccineService.getVaccines();

    this.progress =
      this.vaccineService.calculateProgress(id);

    this.pendingCount =
      this.vaccineService.countPendingVaccines(id);
  }
}