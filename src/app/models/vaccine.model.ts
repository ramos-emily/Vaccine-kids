export interface Vaccine {
  id: string;
  name: string;
  shortName: string;
  description: string;
  diseases: string[];      // doenças que previne
  ageMonths: number[];     // idades em meses para aplicação
  totalDoses: number;
}

export interface VaccineRecord {
  id: string;
  childId: string;
  vaccineId: string;
  doseNumber: number;
  appliedDate: string;    // ISO 8601
  location?: string;      // local de aplicação
  batchNumber?: string;   // lote
  notes?: string;
}

export interface VaccineScheduleItem {
  vaccine: Vaccine;
  ageMonths: number;
  doseNumber: number;
  scheduledDate: string;  // data prevista para essa criança
  record?: VaccineRecord; // preenchido se já aplicada
  status: 'applied' | 'pending' | 'overdue' | 'upcoming';
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  targetAgeMonthsMin: number;
  targetAgeMonthsMax: number;
  vaccineIds: string[];
  startDate: string;
  endDate: string;
  locations: string[];
  isActive: boolean;
  color?: string;
}