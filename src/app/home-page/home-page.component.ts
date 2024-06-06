import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { mainPhotos } from '../../types/types';
import { ImageFetcherService } from '../services/images/image-fetcher.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  @Input() imageUrls: mainPhotos[] = []

  constructor(private imageFetchService: ImageFetcherService) { }

  ngOnInit(): void {
    this.imageFetchService.fetchImageList('images.json').subscribe((urls: mainPhotos[]) => this.imageUrls = urls);
  }
  
}

