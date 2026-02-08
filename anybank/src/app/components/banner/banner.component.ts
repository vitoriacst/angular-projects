import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-banner',
  imports: [DatePipe, WelcomeComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
}
