import { Campaign } from '../models/vaccine.model';

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-001',
    title: 'Campanha de Vacinação contra o Sarampo',
    description: 'O Ministério da Saúde convoca crianças de 6 meses a 4 anos para atualização da vacina tríplice viral (sarampo, caxumba e rubéola). Não perca o prazo!',
    targetAgeMonthsMin: 6,
    targetAgeMonthsMax: 48,
    vaccineIds: ['v-triplice-viral'],
    startDate: '2025-06-01',
    endDate: '2025-07-31',
    locations: ['UBS da sua cidade', 'Postos de saúde', 'Drogasil - postos selecionados'],
    isActive: true,
    color: '#FDA769'
  },
  {
    id: 'camp-002',
    title: 'Multivacinação — Dia D',
    description: 'Aproveite o Dia D da Multivacinação para atualizar todas as vacinas atrasadas do seu filho. Atendimento sem agendamento em todas as UBS.',
    targetAgeMonthsMin: 0,
    targetAgeMonthsMax: 60,
    vaccineIds: ['v-penta', 'v-pneumo', 'v-vip', 'v-rotavirus', 'v-meningo'],
    startDate: '2025-06-14',
    endDate: '2025-06-14',
    locations: ['Todas as Unidades Básicas de Saúde', 'Escolas municipais participantes'],
    isActive: true,
    color: '#ABC270'
  },
  {
    id: 'camp-003',
    title: 'Campanha Influenza — Crianças até 5 anos',
    description: 'Crianças menores de 5 anos fazem parte do grupo prioritário da vacina da gripe (influenza). A vacina é gratuita e anual.',
    targetAgeMonthsMin: 6,
    targetAgeMonthsMax: 60,
    vaccineIds: [],
    startDate: '2025-04-01',
    endDate: '2025-07-01',
    locations: ['UBS Central', 'UBS Jardins', 'UBS Norte', 'Hospital Municipal'],
    isActive: true,
    color: '#FEC868'
  }
];