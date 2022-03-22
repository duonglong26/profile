package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.Education;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EducationDto extends BaseObjectDto {
    private String schoolName;
    private String course;
    private String major;
    private ProfileDto profile;

    public EducationDto(Education entity) {
        this.id = entity.getId();
        this.createDate = entity.getCreateDate();
        this.createdBy = entity.getCreatedBy();
        this.modifyDate = entity.getModifyDate();
        this.modifiedBy = entity.getModifiedBy();
        this.schoolName = entity.getSchoolName();
        this.course = entity.getCourse();
        this.profile = new ProfileDto(entity.getProfile(), false);
    }
}
