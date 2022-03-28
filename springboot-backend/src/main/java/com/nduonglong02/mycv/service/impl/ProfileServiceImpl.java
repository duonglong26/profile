package com.nduonglong02.mycv.service.impl;

import com.globits.core.service.impl.GenericServiceImpl;
import com.nduonglong02.mycv.domain.Education;
import com.nduonglong02.mycv.domain.Introduce;
import com.nduonglong02.mycv.domain.PersonalInformation;
import com.nduonglong02.mycv.domain.Profile;
import com.nduonglong02.mycv.dto.EducationDto;
import com.nduonglong02.mycv.dto.IntroduceDto;
import com.nduonglong02.mycv.dto.PersonalInformationDto;
import com.nduonglong02.mycv.dto.ProfileDto;
import com.nduonglong02.mycv.repository.PersonalInformationRepository;
import com.nduonglong02.mycv.repository.ProfileRepository;
import com.nduonglong02.mycv.service.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
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

//            Personal Information
            if (dto.getPersonalInformation() != null) {
                if (entity.getPersonalInformation() == null) {
                    entity.setPersonalInformation(new PersonalInformation());
                }
                setValuePersonalInformation(entity.getPersonalInformation(), dto.getPersonalInformation());
            }
//            Introduce
            if (dto.getIntroduce() != null) {
                if (entity.getIntroduce() == null) {
                    entity.setIntroduce(new Introduce());
                }
                setValueIntroduce(entity.getIntroduce(), dto.getIntroduce());
            }

//            Education List
            if (!CollectionUtils.isEmpty(dto.getEducationList())) {
                setValueEducationList(entity, dto.getEducationList());
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

    public void setValueIntroduce(Introduce entity, IntroduceDto dto) {
        if (entity != null && dto != null) {
            entity.setSentenceWelcome(dto.getSentenceWelcome());
            entity.setIntroductionUser(dto.getIntroductionUser());
            entity.setTitleAboutMe(dto.getTitleAboutMe());
            entity.setTask(dto.getTask());
            entity.setDescriptionTask(dto.getDescriptionTask());
        }
    }

    public void setValueEducationList(Profile profile, List<EducationDto> educationListIn) {
        if (!CollectionUtils.isEmpty(profile.getEducationList())) {
            profile.getEducationList().clear();
        } else {
            profile.setEducationList(new ArrayList<>());
        }
        for (EducationDto dto : educationListIn) {
            Education education = new Education();
            education.setSchoolName(dto.getSchoolName());
            education.setCourse(dto.getCourse());
            education.setMajor(dto.getMajor());
            education.setProfile(profile);
            profile.getEducationList().add(education);
        }
    }
}
