import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImageFetcherService } from './services/images/image-fetcher.service';
import { CommonModule } from '@angular/common';
import { mainPhotos } from '../types/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomePageComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'antonia-web';
  
  constructor() { }

}
