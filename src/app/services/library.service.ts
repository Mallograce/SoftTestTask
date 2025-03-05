import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Library } from '../Interfaces/library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor() {}

  private http = inject(HttpClient);
  private jsonUrl = 'assets/data/libraries.json';

  getLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(this.jsonUrl);
  }
}
