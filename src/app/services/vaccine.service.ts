import { Injectable } from '@angular/core';

import { MOCK_VACCINES } from '../mocks/mock-vaccines';
import { MOCK_RECORDS } from '../mocks/mock-records';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  getVaccines() {
    return MOCK_VACCINES;
  }

  getRecords(childId: string) {
    return MOCK_RECORDS.filter(
      r => r.childId === childId
    );
  }
  getAppliedDoseCount(
  childId: string,
  vaccineId: string
): number {

  return this.getRecords(childId)
    .filter(
      r => r.vaccineId === vaccineId
    )
    .length;
}

  getVaccineById(id: string) {
    return MOCK_VACCINES.find(
      vaccine => vaccine.id === id
    );
  }

  countPendingVaccines(childId: string): number {

  const vaccines = this.getVaccines();

  return vaccines.filter(vaccine => {

    const applied =
      this.getAppliedDoseCount(
        childId,
        vaccine.id
      );

    return applied < vaccine.totalDoses;

  }).length;
}

  calculateProgress(childId: string): number {

  const vaccines = this.getVaccines();

  let totalExpected = 0;
  let totalApplied = 0;

  vaccines.forEach(vaccine => {
    totalExpected += vaccine.totalDoses;

    totalApplied += this.getRecords(childId)
      .filter(r => r.vaccineId === vaccine.id)
      .length;
  });

  return Math.round(
    (totalApplied / totalExpected) * 100
  );
}
isOverdue(
  childBirthDate: string,
  vaccine: any,
  appliedDoses: number
): boolean {

  if (
    appliedDoses >= vaccine.totalDoses
  ) {
    return false;
  }

  const birth =
    new Date(childBirthDate);

  const targetMonths =
    vaccine.ageMonths[
      vaccine.ageMonths.length - 1
    ];

  const dueDate =
    new Date(birth);

  dueDate.setMonth(
    dueDate.getMonth() + targetMonths
  );

  return new Date() > dueDate;
}


}