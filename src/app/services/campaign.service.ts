import { Injectable } from '@angular/core';
import { MOCK_CAMPAIGNS } from '../mocks/mock-campaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  getCampaigns() {
    return MOCK_CAMPAIGNS;
  }

  getActiveCampaigns() {
    return MOCK_CAMPAIGNS.filter(c => c.isActive);
  }
}