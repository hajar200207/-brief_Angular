import { Component, OnInit } from '@angular/core';
import { GlycemieService } from '../glycemie.service';
import { LectureGlycemie } from '../lecture-glycemie.model';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-glycemie',
  templateUrl: './glycemie.component.html',
  styleUrls: ['./glycemie.component.css']
})
export class GlycemieComponent implements OnInit {
  lectures: LectureGlycemie[] = [];
  selectedLecture: LectureGlycemie | null = null;
  glycemieForm: FormGroup;
  constructor(private glycemieService: GlycemieService, private fb: FormBuilder) {
    this.glycemieForm = this.fb.group({
      date_of_Tracking: [''],
      time_of_Tracking: [''],
      valeur: ['']
    });
  }

  ngOnInit(): void {
    this.loadLectures();
  }

  loadLectures(): void {
    this.glycemieService.getLectures().subscribe((data: LectureGlycemie[]) => {
      this.lectures = data;
    });
  }
  deleteGlycemie(id: number): void {
    this.glycemieService.deleteLecture(id).subscribe(
      () => {
        this.lectures = this.lectures.filter(lecture => lecture.id !== id);
      },
      (error) => {
        console.error('Error deleting lecture', error);
      }
    );
  }

  selectLecture(lecture: LectureGlycemie): void {
    this.selectedLecture = { ...lecture };
    this.glycemieForm.patchValue({
      date_of_Tracking: this.selectedLecture.date_of_Tracking,
      time: this.selectedLecture.time_of_Tracking,
      valeur: this.selectedLecture.valeur
    });
  }

  updateGlycemie(): void {
    if (this.selectedLecture) {
      const updatedLecture = {
        ...this.selectedLecture,
        ...this.glycemieForm.value
      };

      this.glycemieService.updateLecture(this.selectedLecture.id, updatedLecture).subscribe(
        () => {
          this.loadLectures();
          this.selectedLecture = null;
          this.glycemieForm.reset();
        },
        (error) => {
          console.error('Error updating lecture', error);
        }
      );
    }
  }

  trackById(index: number, item: LectureGlycemie): number {
    return item.id;
  }


}
