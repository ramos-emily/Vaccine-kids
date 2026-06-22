import { Vaccine } from '../models/vaccine.model';

export const MOCK_VACCINES: Vaccine[] = [
  {
    id: 'v-bcg',
    name: 'BCG (Bacilo Calmette-Guérin)',
    shortName: 'BCG',
    description: 'Protege contra as formas graves da tuberculose, como tuberculose meníngea e miliar.',
    diseases: ['Tuberculose'],
    ageMonths: [0],
    totalDoses: 1
  },
  {
    id: 'v-hepatite-b',
    name: 'Hepatite B',
    shortName: 'Hep. B',
    description: 'Previne a hepatite B, doença grave que afeta o fígado.',
    diseases: ['Hepatite B'],
    ageMonths: [0, 1, 6],
    totalDoses: 3
  },
  {
    id: 'v-penta',
    name: 'Pentavalente (DTP/Hib/HepB)',
    shortName: 'Pentavalente',
    description: 'Protege contra difteria, tétano, coqueluche, meningite por Hib e hepatite B.',
    diseases: ['Difteria', 'Tétano', 'Coqueluche', 'Meningite', 'Hepatite B'],
    ageMonths: [2, 4, 6],
    totalDoses: 3
  },
  {
    id: 'v-vip',
    name: 'VIP (Vacina Inativada Poliomielite)',
    shortName: 'VIP/VOP',
    description: 'Previne a poliomielite (paralisia infantil).',
    diseases: ['Poliomielite'],
    ageMonths: [2, 4, 6, 15],
    totalDoses: 4
  },
  {
    id: 'v-pneumo',
    name: 'Pneumocócica 10-valente',
    shortName: 'Pneumo 10',
    description: 'Previne infecções causadas pelo pneumococo: pneumonia, meningite, otite.',
    diseases: ['Pneumonia', 'Meningite', 'Otite'],
    ageMonths: [2, 4, 12],
    totalDoses: 3
  },
  {
    id: 'v-rotavirus',
    name: 'Rotavírus Humano',
    shortName: 'Rotavírus',
    description: 'Previne a diarreia grave causada pelo rotavírus.',
    diseases: ['Diarreia por Rotavírus'],
    ageMonths: [2, 4],
    totalDoses: 2
  },
  {
    id: 'v-meningo',
    name: 'Meningocócica C',
    shortName: 'Meningo C',
    description: 'Previne a doença meningocócica causada pelo sorogrupo C.',
    diseases: ['Meningite meningocócica C'],
    ageMonths: [3, 5, 12],
    totalDoses: 3
  },
  {
    id: 'v-febre-amarela',
    name: 'Febre Amarela',
    shortName: 'FA',
    description: 'Previne a febre amarela. Aplicada a partir dos 9 meses.',
    diseases: ['Febre Amarela'],
    ageMonths: [9, 48],
    totalDoses: 2
  },
  {
    id: 'v-triplice-viral',
    name: 'Tríplice Viral (SCR)',
    shortName: 'SCR',
    description: 'Protege contra sarampo, caxumba e rubéola.',
    diseases: ['Sarampo', 'Caxumba', 'Rubéola'],
    ageMonths: [12, 15],
    totalDoses: 2
  },
  {
    id: 'v-varicela',
    name: 'Varicela (Catapora)',
    shortName: 'Varicela',
    description: 'Previne a catapora e suas complicações.',
    diseases: ['Varicela'],
    ageMonths: [15],
    totalDoses: 1
  },
  {
    id: 'v-hepatite-a',
    name: 'Hepatite A',
    shortName: 'Hep. A',
    description: 'Previne a hepatite A, que afeta o fígado e pode causar icterícia.',
    diseases: ['Hepatite A'],
    ageMonths: [15],
    totalDoses: 1
  },
  {
    id: 'v-dtpa',
    name: 'DTPa (Reforço)',
    shortName: 'DTPa',
    description: 'Reforço contra difteria, tétano e coqueluche.',
    diseases: ['Difteria', 'Tétano', 'Coqueluche'],
    ageMonths: [15, 48],
    totalDoses: 2
  }
];