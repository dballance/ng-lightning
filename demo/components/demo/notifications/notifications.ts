import {Component} from '@angular/core';

@Component({
  selector: 'demo-notifications',
  templateUrl: './notifications.html',
})
export class DemoNotifications {
  showAlert = false;

  show() {
    this.showAlert = true;
  }

  onClose(reason: string) {
    console.log(`Alert closed by ${reason}`);
    this.showAlert = false;
  }
}
