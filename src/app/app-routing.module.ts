import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MailInboxComponent } from './pages/inbox/inbox.component';
import { MailDetailComponent } from './pages/mail-detail/mail-detail.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {
    path: 'inbox',
    component: MailInboxComponent,
  },
  { path: 'details/:id', component: MailDetailComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path: '**', component: EmptyRouteComponent},
];

@NgModule({
  declarations: [MailInboxComponent, MailDetailComponent, HomeComponent],
  imports: [CommonModule , RouterModule.forRoot(routes)],
  exports: [RouterModule, MailInboxComponent, MailDetailComponent, HomeComponent],
  // use value must match the sub path in the single spa route
  providers: [{ provide: APP_BASE_HREF, useValue: '/app2' }],
})
export class AppRoutingModule {}
