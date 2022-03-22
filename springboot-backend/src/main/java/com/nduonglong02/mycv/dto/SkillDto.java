package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.Skill;
import com.nduonglong02.mycv.domain.Technology;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class SkillDto extends BaseObjectDto {
    private String name;
    private List<TechnologyDto> technologyList = new ArrayList<>();
    private ProfileDto profile;

    public SkillDto(Skill entity) {
        this(entity, true);
    }

    public SkillDto(Skill entity, boolean isGetChild) {
        if (entity != null) {
            this.id = entity.getId();
            this.createDate = entity.getCreateDate();
            this.createdBy = entity.getCreatedBy();
            this.modifyDate = entity.getModifyDate();
            this.modifiedBy = entity.getModifiedBy();
            this.name = entity.getName();
            this.profile = new ProfileDto(entity.getProfile(), false);
            if (isGetChild) {
                for (Technology tech : entity.getTechnologyList()) {
                    this.technologyList.add(new TechnologyDto(tech));
                }
            }
        }
    }
}
