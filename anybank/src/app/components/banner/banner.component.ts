import { Component } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-banner',
  imports: [WelcomeComponent, AccountComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
}
