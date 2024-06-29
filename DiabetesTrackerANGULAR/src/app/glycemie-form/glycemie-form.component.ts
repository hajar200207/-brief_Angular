import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlycemieService } from '../glycemie.service';
import {LectureGlycemie} from "../lecture-glycemie.model";

@Component({
  selector: 'app-glycemie-form',
  templateUrl: './glycemie-form.component.html',
  styleUrls: ['./glycemie-form.component.css']
})
export class GlycemieFormComponent implements OnInit {
  glycemieForm: FormGroup;
  lectures: LectureGlycemie[] = [];
  constructor(private fb: FormBuilder, private glycemieService: GlycemieService) {
    this.glycemieForm = this.fb.group({
      date_of_Tracking: [''],
      time_of_Tracking: [''],
      valeur: ['']
    });
  }

  ngOnInit(): void {
    this.glycemieForm = this.fb.group({
      date_of_Tracking: [''],
      time_of_Tracking: [''],
      valeur: ['']
    });

    this.loadLectures();
  }


  loadLectures() {
    this.glycemieService.getLectures().subscribe(
      lectures => {
        this.lectures = lectures;
      },
      error => {
        console.error('Error loading glycemic readings:', error);
   d
      }
    );
  }

  saveGlycemie() {
    this.glycemieService.save({
      id: null,
      date_of_Tracking: this.glycemieForm.value.date_of_Tracking,
      time_of_Tracking: this.glycemieForm.value.time_of_Tracking,
      valeur: this.glycemieForm.value.valeur
    }).subscribe(
      () => {
        alert('Glycemic reading saved successfully!');
        this.glycemieForm.reset();
      },
      (error: any) => {
        console.error('Error saving glycemic reading:', error);
        alert('Failed to save glycemic reading.');
      }
    );
  }
}
