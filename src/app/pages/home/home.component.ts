import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  store: any;
  username: string;
  _newName: string;
  constructor(private cdr: ChangeDetectorRef) {
    this.username = '';
    this._newName = '';
  }

  async ngOnInit() {
    const remoteModule = await loadRemoteModule({
      remoteEntry: 'http://localhost:9000/remoteEntry.js',
      remoteName: 'host',
      exposedModule: './CentralStore',
    });
    this.store = remoteModule.default;
    this.username = this.store.getData().username;
    this.cdr.detectChanges();
  }

  onNewNameKey(event: any) {
    this._newName = event.target.value;
  }

  updateStore() {
    this.store.setData({
      username: this._newName,
    });
    this.username = this.store.getData().username;
    this.cdr.detectChanges();
  }
}
