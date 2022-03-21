package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "personal_information")
public class PersonalInformation extends BaseObject {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "address")
    private String address;

    @Column(name = "job")
    private String job;

    @Column(name = "link_facebook")
    private String linkFacebook;

    @Column(name = "link_instagram")
    private String linkInstagram;

    @Column(name = "link_twitter")
    private String linkTwitter;

    @Column(name = "link_github")
    private String linkGithub;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

}
