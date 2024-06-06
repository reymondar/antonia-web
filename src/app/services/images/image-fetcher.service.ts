import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mainPhotos } from '../../../types/types';

@Injectable({
  providedIn: 'root'
})
export class ImageFetcherService {

  constructor(private http: HttpClient) {}

   fetchImageList(json: string): Observable<any[]> {
      return this.http.get<mainPhotos[]>(`assets/${json}`)
   }
}
