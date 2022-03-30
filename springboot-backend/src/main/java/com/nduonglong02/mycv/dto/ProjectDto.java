package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.Project;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class ProjectDto extends BaseObjectDto {
    private String name;
    private String participationProcess;
    private String description;
    private ProfileDto profile;

    public ProjectDto(Project entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createDate = entity.getCreateDate();
            this.createdBy = entity.getCreatedBy();
            this.modifyDate = entity.getModifyDate();
            this.modifiedBy = entity.getModifiedBy();
            this.name = entity.getName();
            this.participationProcess = entity.getParticipationProcess();
            this.description = entity.getDescription();
            this.profile = new ProfileDto(entity.getProfile(), false);
        }
    }
}
