package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "introduce")
public class Introduce extends BaseObject {
    @Column(name = "sentence_welcome")
    private String sentenceWelcome;

    @Column(name = "introduction_user")
    private String introductionUser;

    @Column(name = "title_about_me")
    private String titleAboutMe; //title of paragraph of "about me"

    @Column(name = "task")
    private String task;

    @Column(name = "description_task")
    private String descriptionTask;

}

