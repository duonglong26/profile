package com.nduonglong02.mycv.service.impl;

import com.globits.core.service.impl.GenericServiceImpl;
import com.nduonglong02.mycv.domain.*;
import com.nduonglong02.mycv.dto.*;
import com.nduonglong02.mycv.repository.PersonalInformationRepository;
import com.nduonglong02.mycv.repository.ProfileRepository;
import com.nduonglong02.mycv.service.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.transaction.Transactional;
import java.io.IOException;
import java.nio.file.DirectoryNotEmptyException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
@Slf4j
public class ProfileServiceImpl extends GenericServiceImpl<Profile, UUID> implements ProfileService {
    @Value("${upload.path}")
    private String filePath;

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

            // Personal Information
            if (dto.getPersonalInformation() != null) {
                if (entity.getPersonalInformation() == null) {
                    entity.setPersonalInformation(new PersonalInformation());
                }
                setValuePersonalInformation(entity.getPersonalInformation(), dto.getPersonalInformation());
            }
            // Introduce
            if (dto.getIntroduce() != null) {
                if (entity.getIntroduce() == null) {
                    entity.setIntroduce(new Introduce());
                }
                setValueIntroduce(entity.getIntroduce(), dto.getIntroduce());
            }

            // Education List
            if (!CollectionUtils.isEmpty(dto.getEducationList())) {
                setValueEducationList(entity, dto.getEducationList());
            }

            // Skill list
            if (!CollectionUtils.isEmpty(dto.getSkillList())) {
                setValueSkillList(entity, dto.getSkillList());
            }

            // Project list
            if (!CollectionUtils.isEmpty(dto.getProjectList())) {
                setValueProjectList(entity, dto.getProjectList());
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
            try
            {
                Files.deleteIfExists(Paths.get(filePath + id + ".png"));
                Files.deleteIfExists(Paths.get("Recycle Bin/" + id + ".png"));
            }
            catch(NoSuchFileException e)
            {
                log.error("No such file/directory exists");
            }
            catch(DirectoryNotEmptyException e)
            {
                log.error("Directory is not empty");
            }
            catch(IOException e)
            {
                log.error("Invalid permissions.");
            }
            profileRepository.deleteById(id);
            return true;
        }
        return null;
    }

    @Override
    public ProfileDto getById(UUID id) {
        if (id != null) {
            Profile result = profileRepository.findById(id).orElse(null);
            return new ProfileDto(result);
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

    public void setValueSkillList(Profile profile, List<SkillDto> skillListIn) {
        if (profile.getSkillList() != null) {
            profile.getSkillList().clear();
        } else {
            profile.setSkillList(new ArrayList<>());
        }
        for (SkillDto dto : skillListIn) {
            Skill skill = new Skill();
            skill.setName(dto.getName());
            skill.setProfile(profile);
            // Technology list
            if (!CollectionUtils.isEmpty(dto.getTechnologyList())) {
                setValueTechnologyList(skill, dto.getTechnologyList());
            }
            profile.getSkillList().add(skill);
        }
    }

    public void setValueTechnologyList(Skill skill, List<TechnologyDto> techListIn) {
        if (skill.getTechnologyList() != null) {
            skill.getTechnologyList().clear();
        } else {
            skill.setTechnologyList(new ArrayList<>());
        }
        for (TechnologyDto dto : techListIn) {
            Technology tech = new Technology();
            tech.setName(dto.getName());
            tech.setIconName(dto.getIconName());
            tech.setDetails(dto.getDetails());
            tech.setSkill(skill);
            skill.getTechnologyList().add(tech);
        }
    }

    public void setValueProjectList(Profile profile, List<ProjectDto> projectListIn) {
        if (!CollectionUtils.isEmpty(profile.getProjectList())) {
            profile.getProjectList().clear();
        } else {
            profile.setProjectList(new ArrayList<>());
        }
        for (ProjectDto dto : projectListIn) {
            Project project = new Project();
            project.setName(dto.getName());
            project.setParticipationProcess(dto.getParticipationProcess());
            project.setDescription(dto.getDescription());
            project.setProfile(profile);
            profile.getProjectList().add(project);
        }
    }
}
