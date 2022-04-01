package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "technology")
public class Technology extends BaseObject {
    @Column(name = "name")
    private String name;

    @Column(name = "icon_name")
    private String iconName; //to save name of icon

    @Column(name = "details")
    private String details;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "skill_id")
    private Skill skill;

}