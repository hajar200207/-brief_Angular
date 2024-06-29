package com.Diabetes.Controller;

import com.Diabetes.Models.LectureGlycemie;
import com.Diabetes.Service.LectureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/glycimie")
public class GlycemieController {

    @Autowired
    private LectureService lectureService;

    @GetMapping("/ShowInfo")
    public List<LectureGlycemie> show() {
        return lectureService.ShowLectures();
    }

    @PostMapping("/save")
    public void save(@RequestBody LectureGlycemie lecture) {
        lectureService.addLecture(lecture);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteLecture(@PathVariable("id") Integer id) {
        lectureService.delete(id);
    }


    @PutMapping("/update/{id}")
    public void updateLecture(@PathVariable("id") Integer id, @RequestBody LectureGlycemie lecture) {
        lectureService.updateLecture(id, lecture);
    }
}
