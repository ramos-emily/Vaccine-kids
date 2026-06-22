export interface Child {
  id: string;
  name: string;
  birthDate: string; // ISO 8601: YYYY-MM-DD
  guardianName: string;
  avatarColor?: string; // cor para avatar sem foto
  photoUrl?: string;
}

export interface ChildWithStatus extends Child {
  vaccineStatus: VaccineStatus;
  pendingCount: number;
  overdueCount: number;
  upToDateCount: number;
}

export type VaccineStatus = 'up-to-date' | 'pending' | 'overdue';