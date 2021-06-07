import {Injectable} from '@angular/core';
import {IPhotoCard} from '../../image-finder/models/photo-card.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  public set(key: string, data: IPhotoCard[]): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  public get(str: string): IPhotoCard[] {
    return JSON.parse(localStorage.getItem(str) || '{}');
  }
  public clear(): void {
    localStorage.clear();
  }
}
