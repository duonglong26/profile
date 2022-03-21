package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "skill_id")
    private Skill skill;

}
