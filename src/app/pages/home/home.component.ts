import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { autorun } from 'mobx';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  username = '';
  store: any;

  async ngOnInit() {
    const remoteModule = await loadRemoteModule({
      remoteEntry: 'http://localhost:9000/remoteEntry.js',
      remoteName: 'host',
      exposedModule: './CentralStore',
    });
    this.store = remoteModule.default;
    this.username = this.store.username;

    autorun(() => {
      this.username = this.store.username;
      this.cd.detectChanges(); // Manually trigger Angular's change detection
    });
    console.log(this.store);
    // Now you can use GlobalStore in your Angular application
  }
  updateStore() {
    this.store.setData({
      username: 'John Doe',
    });
  }
}
