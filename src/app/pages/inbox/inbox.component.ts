import { Component, OnInit } from '@angular/core';

interface Mail {
  id: string;
  title: string;
  date: string;
  from: string;
}

@Component({
  selector: 'mail-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})

export class MailInboxComponent implements OnInit {
  mailList: Mail[] = [];

  constructor() {}

  ngOnInit(): void {
    this.mailList = [
      {
        id: 'ecw-wecw-ecwecw',
        title: 'Request for New Enrolment',
        date: '09/09/2023',
        from: 'John Wick',
      },
      {
        id: '23d-dw-wd',
        title: 'Review of current enrolment',
        date: '07/09/2022',
        from: 'Anne Rice',
      },
      {
        id: '45u8-ydis-xu72',
        title: 'Billing enquiry',
        date: '03/09/2022',
        from: 'Stephen King',
      },
    ];
  }
}
