package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "skill")
public class Skill extends BaseObject {
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "skill", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Technology> technologyList;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "profile_id")
    private Profile profile;
}
