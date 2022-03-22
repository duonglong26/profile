package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.Technology;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TechnologyDto extends BaseObjectDto {
    private String name;
    private String iconName; //to save name of icon
    private String details;
    private SkillDto skill;

    public TechnologyDto(Technology entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createDate = entity.getCreateDate();
            this.createdBy = entity.getCreatedBy();
            this.modifyDate = entity.getModifyDate();
            this.modifiedBy = entity.getModifiedBy();
            this.name = entity.getName();
            this.iconName = entity.getIconName();
            this.details = entity.getDetails();
            this.skill = new SkillDto(entity.getSkill(), false);
        }
    }
}
