import { VaccineRecord } from '../models/vaccine.model';

// Sofia (child-001) nasceu em 2022-03-15 — ~3 anos
export const MOCK_RECORDS: VaccineRecord[] = [
  // BCG - dose única ao nascer
  { id: 'r-001', childId: 'child-001', vaccineId: 'v-bcg', doseNumber: 1, appliedDate: '2022-03-16', location: 'Maternidade Santa Casa', batchNumber: 'BCG2022A' },
  // Hepatite B - 3 doses
  { id: 'r-002', childId: 'child-001', vaccineId: 'v-hepatite-b', doseNumber: 1, appliedDate: '2022-03-16', location: 'Maternidade Santa Casa' },
  { id: 'r-003', childId: 'child-001', vaccineId: 'v-hepatite-b', doseNumber: 2, appliedDate: '2022-04-18', location: 'UBS Centro' },
  { id: 'r-004', childId: 'child-001', vaccineId: 'v-hepatite-b', doseNumber: 3, appliedDate: '2022-09-20', location: 'UBS Centro' },
  // Pentavalente
  { id: 'r-005', childId: 'child-001', vaccineId: 'v-penta', doseNumber: 1, appliedDate: '2022-05-16', location: 'UBS Centro' },
  { id: 'r-006', childId: 'child-001', vaccineId: 'v-penta', doseNumber: 2, appliedDate: '2022-07-15', location: 'UBS Centro' },
  { id: 'r-007', childId: 'child-001', vaccineId: 'v-penta', doseNumber: 3, appliedDate: '2022-09-20', location: 'UBS Centro' },
  // VIP
  { id: 'r-008', childId: 'child-001', vaccineId: 'v-vip', doseNumber: 1, appliedDate: '2022-05-16', location: 'UBS Centro' },
  { id: 'r-009', childId: 'child-001', vaccineId: 'v-vip', doseNumber: 2, appliedDate: '2022-07-15', location: 'UBS Centro' },
  { id: 'r-010', childId: 'child-001', vaccineId: 'v-vip', doseNumber: 3, appliedDate: '2022-09-20', location: 'UBS Centro' },
  // Pneumocócica
  { id: 'r-011', childId: 'child-001', vaccineId: 'v-pneumo', doseNumber: 1, appliedDate: '2022-05-16', location: 'UBS Centro' },
  { id: 'r-012', childId: 'child-001', vaccineId: 'v-pneumo', doseNumber: 2, appliedDate: '2022-07-15', location: 'UBS Centro' },
  { id: 'r-013', childId: 'child-001', vaccineId: 'v-pneumo', doseNumber: 3, appliedDate: '2023-03-15', location: 'UBS Centro' },
  // Rotavírus
  { id: 'r-014', childId: 'child-001', vaccineId: 'v-rotavirus', doseNumber: 1, appliedDate: '2022-05-16', location: 'UBS Centro' },
  { id: 'r-015', childId: 'child-001', vaccineId: 'v-rotavirus', doseNumber: 2, appliedDate: '2022-07-15', location: 'UBS Centro' },
  // Febre Amarela
  { id: 'r-016', childId: 'child-001', vaccineId: 'v-febre-amarela', doseNumber: 1, appliedDate: '2022-12-20', location: 'UBS Centro' },
  // SCR - 1ª dose
  { id: 'r-017', childId: 'child-001', vaccineId: 'v-triplice-viral', doseNumber: 1, appliedDate: '2023-03-15', location: 'UBS Centro' },
  // Meningocócica C
  { id: 'r-018', childId: 'child-001', vaccineId: 'v-meningo', doseNumber: 1, appliedDate: '2022-06-20', location: 'UBS Centro' },
  { id: 'r-019', childId: 'child-001', vaccineId: 'v-meningo', doseNumber: 2, appliedDate: '2022-08-18', location: 'UBS Centro' },

  // Miguel (child-002) nasceu em 2020-07-22 — ~5 anos, mais completo
  { id: 'r-020', childId: 'child-002', vaccineId: 'v-bcg', doseNumber: 1, appliedDate: '2020-07-23', location: 'Hospital Municipal' },
  { id: 'r-021', childId: 'child-002', vaccineId: 'v-hepatite-b', doseNumber: 1, appliedDate: '2020-07-23', location: 'Hospital Municipal' },
  { id: 'r-022', childId: 'child-002', vaccineId: 'v-hepatite-b', doseNumber: 2, appliedDate: '2020-08-25', location: 'UBS Jardins' },
  { id: 'r-023', childId: 'child-002', vaccineId: 'v-hepatite-b', doseNumber: 3, appliedDate: '2021-01-22', location: 'UBS Jardins' },
  { id: 'r-024', childId: 'child-002', vaccineId: 'v-penta', doseNumber: 1, appliedDate: '2020-09-22', location: 'UBS Jardins' },
  { id: 'r-025', childId: 'child-002', vaccineId: 'v-penta', doseNumber: 2, appliedDate: '2020-11-22', location: 'UBS Jardins' },
  { id: 'r-026', childId: 'child-002', vaccineId: 'v-penta', doseNumber: 3, appliedDate: '2021-01-22', location: 'UBS Jardins' },
  { id: 'r-027', childId: 'child-002', vaccineId: 'v-vip', doseNumber: 1, appliedDate: '2020-09-22', location: 'UBS Jardins' },
  { id: 'r-028', childId: 'child-002', vaccineId: 'v-vip', doseNumber: 2, appliedDate: '2020-11-22', location: 'UBS Jardins' },
  { id: 'r-029', childId: 'child-002', vaccineId: 'v-vip', doseNumber: 3, appliedDate: '2021-01-22', location: 'UBS Jardins' },
  { id: 'r-030', childId: 'child-002', vaccineId: 'v-vip', doseNumber: 4, appliedDate: '2021-10-25', location: 'UBS Jardins' },
  { id: 'r-031', childId: 'child-002', vaccineId: 'v-pneumo', doseNumber: 1, appliedDate: '2020-09-22', location: 'UBS Jardins' },
  { id: 'r-032', childId: 'child-002', vaccineId: 'v-pneumo', doseNumber: 2, appliedDate: '2020-11-22', location: 'UBS Jardins' },
  { id: 'r-033', childId: 'child-002', vaccineId: 'v-pneumo', doseNumber: 3, appliedDate: '2021-07-22', location: 'UBS Jardins' },
  { id: 'r-034', childId: 'child-002', vaccineId: 'v-rotavirus', doseNumber: 1, appliedDate: '2020-09-22', location: 'UBS Jardins' },
  { id: 'r-035', childId: 'child-002', vaccineId: 'v-rotavirus', doseNumber: 2, appliedDate: '2020-11-22', location: 'UBS Jardins' },
  { id: 'r-036', childId: 'child-002', vaccineId: 'v-meningo', doseNumber: 1, appliedDate: '2020-10-25', location: 'UBS Jardins' },
  { id: 'r-037', childId: 'child-002', vaccineId: 'v-meningo', doseNumber: 2, appliedDate: '2020-12-22', location: 'UBS Jardins' },
  { id: 'r-038', childId: 'child-002', vaccineId: 'v-meningo', doseNumber: 3, appliedDate: '2021-07-22', location: 'UBS Jardins' },
  { id: 'r-039', childId: 'child-002', vaccineId: 'v-febre-amarela', doseNumber: 1, appliedDate: '2021-04-22', location: 'UBS Jardins' },
  { id: 'r-040', childId: 'child-002', vaccineId: 'v-triplice-viral', doseNumber: 1, appliedDate: '2021-07-22', location: 'UBS Jardins' },
  { id: 'r-041', childId: 'child-002', vaccineId: 'v-triplice-viral', doseNumber: 2, appliedDate: '2021-10-25', location: 'UBS Jardins' },
  { id: 'r-042', childId: 'child-002', vaccineId: 'v-varicela', doseNumber: 1, appliedDate: '2021-10-25', location: 'UBS Jardins' },
  { id: 'r-043', childId: 'child-002', vaccineId: 'v-hepatite-a', doseNumber: 1, appliedDate: '2021-10-25', location: 'UBS Jardins' },
  { id: 'r-044', childId: 'child-002', vaccineId: 'v-dtpa', doseNumber: 1, appliedDate: '2021-10-25', location: 'UBS Jardins' },
  { id: 'r-045', childId: 'child-002', vaccineId: 'v-dtpa', doseNumber: 2, appliedDate: '2024-07-22', location: 'UBS Jardins' },

  // Valentina (child-003) nasceu em 2023-11-05 — ~1 ano, poucas doses
  { id: 'r-046', childId: 'child-003', vaccineId: 'v-bcg', doseNumber: 1, appliedDate: '2023-11-06', location: 'Clínica Bem Nascer' },
  { id: 'r-047', childId: 'child-003', vaccineId: 'v-hepatite-b', doseNumber: 1, appliedDate: '2023-11-06', location: 'Clínica Bem Nascer' },
  { id: 'r-048', childId: 'child-003', vaccineId: 'v-hepatite-b', doseNumber: 2, appliedDate: '2023-12-10', location: 'UBS Norte' },
  { id: 'r-049', childId: 'child-003', vaccineId: 'v-penta', doseNumber: 1, appliedDate: '2024-01-10', location: 'UBS Norte' },
  { id: 'r-050', childId: 'child-003', vaccineId: 'v-rotavirus', doseNumber: 1, appliedDate: '2024-01-10', location: 'UBS Norte' },
  { id: 'r-051', childId: 'child-003', vaccineId: 'v-vip', doseNumber: 1, appliedDate: '2024-01-10', location: 'UBS Norte' },
  { id: 'r-052', childId: 'child-003', vaccineId: 'v-pneumo', doseNumber: 1, appliedDate: '2024-01-10', location: 'UBS Norte' }
];