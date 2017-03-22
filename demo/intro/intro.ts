import {Component, ChangeDetectionStrategy} from '@angular/core';
const prism = require('prismjs');

@Component({
  templateUrl: './intro.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent {
  install = prism.highlight(require('!!raw-loader!./install.md'), prism.languages.clike);
  bundle = prism.highlight(require('!!raw-loader!./bundle.md').replace('x.x.x', process.env.version), prism.languages.javascript);
  usageApp = prism.highlight(require('!!raw-loader!./usage-app.md'), prism.languages.javascript);
  config = prism.highlight(require('!!raw-loader!./config.md'), prism.languages.javascript);
  configRun = prism.highlight(require('!!raw-loader!./config-run.md'), prism.languages.javascript);
}
