package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.Introduce;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class IntroduceDto extends BaseObjectDto {
    private String sentenceWelcome;
    private String introductionUser;
    private String titleAboutMe; //title of paragraph of "about me"
    private String task;
    private String descriptionTask;

    public IntroduceDto(Introduce entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createDate = entity.getCreateDate();
            this.createdBy = entity.getCreatedBy();
            this.modifyDate = entity.getModifyDate();
            this.modifiedBy = entity.getModifiedBy();
            this.sentenceWelcome = entity.getSentenceWelcome();
            this.introductionUser = entity.getIntroductionUser();
            this.titleAboutMe = entity.getTitleAboutMe();
            this.task = entity.getTask();
            this.descriptionTask = entity.getDescriptionTask();
        }
    }
}
