import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'digestorio',
    loadChildren: () => import('./digestorio/digestorio.module').then( m => m.DigestorioPageModule)
  },
  {
    path: 'reprodutor',
    loadChildren: () => import('./reprodutor/reprodutor.module').then( m => m.ReprodutorPageModule)
  },
  {
    path: 'respiratorio',
    loadChildren: () => import('./respiratorio/respiratorio.module').then( m => m.RespiratorioPageModule)
  },
  {
    path: 'urinario',
    loadChildren: () => import('./urinario/urinario.module').then( m => m.UrinarioPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'circulatorio',
    loadChildren: () => import('./circulatorio/circulatorio.module').then( m => m.CirculatorioPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
