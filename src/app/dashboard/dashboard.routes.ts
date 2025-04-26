import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './components/home.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardHomeComponent
      },
      // Other routes will be added later
      {
        path: 'data-mining',
        loadComponent: () => import('./components/data-mining.component').then(m => m.DataMiningComponent)
      },
      {
        path: 'data-warehouse',
        loadComponent: () => import('./components/data-warehouse.component').then(m => m.DataWarehouseComponent)
      },
      {
        path: 'data-analysis',
        loadComponent: () => import('./components/data-analysis.component').then(m => m.DataAnalysisComponent)
      },
      {
        path: 'account-package',
        loadComponent: () => import('./components/account-package.component').then(m => m.AccountPackageComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./components/settings.component').then(m => m.SettingsComponent)
      }
    ]
  }
]; 