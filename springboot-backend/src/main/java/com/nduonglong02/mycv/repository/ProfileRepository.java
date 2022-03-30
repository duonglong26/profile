package com.nduonglong02.mycv.repository;

import com.nduonglong02.mycv.domain.Profile;
import com.nduonglong02.mycv.dto.ProfileDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, UUID> {
    @Query("select new com.nduonglong02.mycv.dto.ProfileDto(e) from Profile e")
    List<ProfileDto> findAllProfile();
}
