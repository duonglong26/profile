package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
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
    @JoinColumn(name = "user_id")
    private User user;

}
