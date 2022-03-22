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
@Table(name = "project")
public class Project extends BaseObject {
    @Column(name = "name")
    private String name;

    @Column(name = "participation_process")
    private String participationProcess;

    @Column(name = "description")
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "profile_id")
    private Profile profile;

}


