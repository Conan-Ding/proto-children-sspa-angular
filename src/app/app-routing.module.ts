import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MailInboxComponent } from './pages/inbox/inbox.component';
const routes: Routes = [
  {
    path: 'inbox',
    component: MailInboxComponent,
  },
  { path: '', component: EmptyRouteComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [MailInboxComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // use value must match the sub path in the single spa route
  providers: [{ provide: APP_BASE_HREF, useValue: '/app2' }],
})
export class AppRoutingModule {}
