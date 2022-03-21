package com.nduonglong02.mycv.repository;

import com.nduonglong02.mycv.domain.PersonalInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PersonalInformationRepository extends JpaRepository<PersonalInformation, UUID> {
}
