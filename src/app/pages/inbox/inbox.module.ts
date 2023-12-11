import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MailInboxComponent } from './inbox.component';

@NgModule({
  declarations: [MailInboxComponent],
  imports: [CommonModule,RouterModule],
  bootstrap: [MailInboxComponent],
})
export class MailInboxModule {}