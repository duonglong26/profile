package com.nduonglong02.mycv.service;

import com.globits.core.service.GenericService;
import com.nduonglong02.mycv.domain.Profile;
import com.nduonglong02.mycv.dto.ProfileDto;

import java.util.List;
import java.util.UUID;

public interface ProfileService extends GenericService<Profile, UUID> {
    ProfileDto saveOrUpdate(ProfileDto dto);
    List<ProfileDto> getAll();
    Boolean deleteById(UUID id);
}
