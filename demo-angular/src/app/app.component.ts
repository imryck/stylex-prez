import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as stylex from '@stylexjs/stylex';
import { styles } from './app.stylex';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-angular';
  cssClasses?: string;

  constructor() {
    const propsRes = stylex.props(styles.container, styles.text);
    this.cssClasses = propsRes.className;
  }
}
