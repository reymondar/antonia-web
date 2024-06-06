import { Component, Input } from '@angular/core';
import { mainPhotos } from '../../types/types';
import { ImageFetcherService } from '../services/images/image-fetcher.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

type AlbumProps = {
  id: number,
  title: string,
  url: string,
  slur: string,
  length: number
}

@Component({
  selector: 'app-single-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.css'
})
export class SinglePageComponent {
  photoAlbum!: any
  photosLength!: number
  
  constructor( private route: ActivatedRoute, private imageFetchService: ImageFetcherService) {}

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    
    this.imageFetchService.fetchImageList('page-images.json').subscribe( (albums: AlbumProps[]) => {
      
      this.photoAlbum = albums.find( (album: AlbumProps) => album.id == Number(id) )
      
      this.photosLength = this.photoAlbum.length
    })
  }

}
