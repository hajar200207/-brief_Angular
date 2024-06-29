package com.Diabetes.Repository;
import com.Diabetes.Models.LectureGlycemie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public interface LectureGlycemieRepository extends JpaRepository<LectureGlycemie, Integer> {

    @Query(value = "SELECT * FROM lecture_glycemie ORDER BY YEAR(date_of_tracking), WEEK(date_of_tracking), date_of_tracking", nativeQuery = true)
    List<LectureGlycemie> findAllGroupedByWeek();

    @Query(value = "SELECT * FROM lecture_glycemie ORDER BY YEAR(date_of_tracking), MONTH(date_of_tracking), date_of_tracking", nativeQuery = true)
    List<LectureGlycemie> findAllGroupedByMonth();

    @Query(value = "SELECT * FROM lecture_glycemie ORDER BY YEAR(date_of_tracking), date_of_tracking", nativeQuery = true)
    List<LectureGlycemie> findAllGroupedByYear();

    @Query(value = "SELECT * FROM lecture_glycemie WHERE YEAR(date_of_tracking) = ?1 AND WEEK(date_of_tracking) = ?2 ORDER BY date_of_tracking", nativeQuery = true)
    List<LectureGlycemie> findByYearAndWeek(int year, int week);

    @Query(value = "SELECT * FROM lecture_glycemie WHERE YEAR(date_of_tracking) = ?1 AND MONTH(date_of_tracking) = ?2 ORDER BY date_of_tracking", nativeQuery = true)
    List<LectureGlycemie> findByYearAndMonth(int year, int month);

    void deleteById(Integer id);
}
