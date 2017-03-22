import {Component} from '@angular/core';

@Component({
  selector: 'demo-icons',
  templateUrl: './icons.html',
})
export class DemoIcons {

  icons: any[] = [
    { icon: 'announcement', type: 'default' },
    { category: 'standard', icon: 'case_comment', size: 'large' },
    { category: 'custom', icon: '2', size: 'large' },
  ];

  icon = this.icons[0];

  change() {
    this.icon = this.icons[(this.icons.indexOf(this.icon) + 1) % this.icons.length];
  }
}
