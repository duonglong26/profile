package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
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
    @JoinColumn(name = "user_id")
    private User user;
}
