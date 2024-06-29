import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LectureGlycemie } from './lecture-glycemie.model';

@Injectable({
  providedIn: 'root'
})
export class GlycemieService {
  private apiUrl = 'http://localhost:8094/glycimie';

  constructor(private http: HttpClient) {}

  getLectures(): Observable<LectureGlycemie[]> {
    return this.http.get<LectureGlycemie[]>(`${this.apiUrl}/ShowInfo`);
  }

  save(lecture: { valeur: any; time_of_Tracking: any; id: null; date_of_Tracking: any }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/save`, lecture);
  }


  deleteLecture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  updateLecture(id: number, lecture: LectureGlycemie): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update/${id}`, lecture);
  }

}
