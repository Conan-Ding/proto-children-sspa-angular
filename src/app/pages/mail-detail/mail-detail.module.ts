import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailDetailComponent } from './mail-detail.component';

@NgModule({
  declarations: [MailDetailComponent],
  imports: [CommonModule],
  bootstrap: [MailDetailComponent],
})
export class MailDetailModule {}