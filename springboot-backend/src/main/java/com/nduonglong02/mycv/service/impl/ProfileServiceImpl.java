package com.nduonglong02.mycv.service.impl;

import com.globits.core.service.impl.GenericServiceImpl;
import com.nduonglong02.mycv.domain.PersonalInformation;
import com.nduonglong02.mycv.domain.Profile;
import com.nduonglong02.mycv.dto.PersonalInformationDto;
import com.nduonglong02.mycv.dto.ProfileDto;
import com.nduonglong02.mycv.repository.PersonalInformationRepository;
import com.nduonglong02.mycv.repository.ProfileRepository;
import com.nduonglong02.mycv.service.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
@Slf4j
public class ProfileServiceImpl extends GenericServiceImpl<Profile, UUID> implements ProfileService {
    @Autowired
    private ProfileRepository profileRepository;
    @Autowired
    private PersonalInformationRepository personalInformationRepository;

    @Override
    public ProfileDto saveOrUpdate(ProfileDto dto) {
        if (dto != null) {
            Profile entity = null;
            if (dto.getId() != null) {
                entity = profileRepository.findById(dto.getId()).orElse(null);
            }
            if (entity == null) {
                entity = new Profile();
            }

//            personal information
            if (dto.getPersonalInformation() != null) {
                if (entity.getPersonalInformation() == null) {
                    entity.setPersonalInformation(new PersonalInformation());
                }
                setValuePersonalInformation(entity.getPersonalInformation(), dto.getPersonalInformation());
            }

            entity = profileRepository.save(entity);
            return new ProfileDto(entity);
        }
        return null;
    }

    @Override
    public List<ProfileDto> getAll() {
        return profileRepository.findAllProfile();
    }

    @Override
    public Boolean deleteById(UUID id) {
        if (id != null && profileRepository.findById(id).orElse(null) != null) {
            profileRepository.deleteById(id);
            return true;
        }
        return null;
    }

    public void setValuePersonalInformation(PersonalInformation entity, PersonalInformationDto dto) {
        if (entity != null && dto != null) {
            entity.setFirstName(dto.getFirstName());
            entity.setLastName(dto.getLastName());
            entity.setDateOfBirth(dto.getDateOfBirth());
            entity.setAddress(dto.getAddress());
            entity.setJob(dto.getJob());
            entity.setLinkFacebook(dto.getLinkFacebook());
            entity.setLinkInstagram(dto.getLinkInstagram());
            entity.setLinkTwitter(dto.getLinkTwitter());
            entity.setLinkGithub(dto.getLinkGithub());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
        }
    }
}
