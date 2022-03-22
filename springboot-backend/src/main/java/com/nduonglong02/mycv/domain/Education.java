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
@Table(name = "education")
public class Education extends BaseObject {
    @Column(name = "school_name")
    private String schoolName;

    @Column(name = "course")
    private String course;

    @Column(name = "major")
    private String major;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "profile_id")
    private Profile profile;
}

