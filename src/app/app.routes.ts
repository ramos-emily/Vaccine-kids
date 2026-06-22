import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage)
  },

  {
    path: 'children',
    loadComponent: () =>
      import('./pages/children/children.page').then(m => m.ChildrenPage)
  },

  {
    path: 'children/:id',
    loadComponent: () =>
      import('./pages/child-detail/child-detail.page').then(
        m => m.ChildDetailPage
      )
  },

  {
    path: 'vaccines',
    loadComponent: () =>
      import('./pages/vaccines/vaccines.page').then(m => m.VaccinesPage)
  },

  {
    path: 'campaigns',
    loadComponent: () =>
      import('./pages/campaigns/campaigns.page').then(m => m.CampaignsPage)
  }
];