package com.Diabetes.Service;

import com.Diabetes.Models.LectureGlycemie;
import com.Diabetes.Repository.LectureGlycemieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LectureService {

    @Autowired
    private LectureGlycemieRepository lectureRepository;

    @Transactional
    public void addLecture(LectureGlycemie lectureGlycemie) {
        lectureRepository.save(lectureGlycemie);
    }

    @Transactional(readOnly = true)
    public List<LectureGlycemie> ShowLectures() {
        return lectureRepository.findAll();
    }

    @Transactional
    public void deleteLectureById(Integer id) {
        lectureRepository.deleteById(id);
    }

    public LectureGlycemie findById(Integer id) {
        Optional<LectureGlycemie> lectureGlycemie = lectureRepository.findById(id);
        return lectureGlycemie.orElseThrow(() -> new RuntimeException("LectureGlycemie not found with id " + id));
    }

    public List<LectureGlycemie> getAllGroupedByWeek() {
        return lectureRepository.findAllGroupedByWeek();
    }

    public List<LectureGlycemie> getAllGroupedByMonth() {
        return lectureRepository.findAllGroupedByMonth();
    }

    public List<LectureGlycemie> getAllGroupedByYear() {
        return lectureRepository.findAllGroupedByYear();
    }

    public List<LectureGlycemie> getByYearAndWeek(int year, int week) {
        return lectureRepository.findByYearAndWeek(year, week);
    }

    public List<LectureGlycemie> getByYearAndMonth(int year, int month) {
        return lectureRepository.findByYearAndMonth(year, month);
    }

    @Transactional
    public void delete(Integer id) {
        lectureRepository.deleteById(id);
    }
    @Transactional
    public void updateLecture(Integer id, LectureGlycemie updatedLecture) {
        Optional<LectureGlycemie> lectureOptional = lectureRepository.findById(id);
        if (lectureOptional.isPresent()) {
            LectureGlycemie existingLecture = lectureOptional.get();
            existingLecture.setDate_of_Tracking(updatedLecture.getDate_of_Tracking());
            existingLecture.setTime(updatedLecture.getTime());
            existingLecture.setValeur(updatedLecture.getValeur());
            lectureRepository.save(existingLecture);
        } else {
            throw new RuntimeException("Lecture not found with id " + id);
        }
    }


}
