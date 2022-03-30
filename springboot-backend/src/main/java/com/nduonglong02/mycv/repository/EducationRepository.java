package com.nduonglong02.mycv.repository;

import com.nduonglong02.mycv.domain.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface EducationRepository extends JpaRepository<Education, UUID> {
    @Query("select e from Education e")
    List<Education> findAllEdu();
}
