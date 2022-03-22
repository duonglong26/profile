package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ProfileDto extends BaseObjectDto {
    private PersonalInformationDto personalInformation;
    private IntroduceDto introduce;
    private List<EducationDto> educationList;
    private List<SkillDto> skillList;
    private List<ProjectDto> projectList;

    public ProfileDto(Profile entity) {
        this(entity, true);
    }

    public ProfileDto(Profile entity, boolean isGetChild) {
        if (entity != null) {
            this.id = entity.getId();
            this.createDate = entity.getCreateDate();
            this.createdBy = entity.getCreatedBy();
            this.modifyDate = entity.getModifyDate();
            this.modifiedBy = entity.getModifiedBy();

            if (isGetChild) {
                this.personalInformation = new PersonalInformationDto(entity.getPersonalInformation());
            }
        }
    }
}
