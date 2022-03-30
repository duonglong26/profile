package com.nduonglong02.mycv.domain;

import com.globits.core.domain.BaseObject;
import com.nduonglong02.mycv.dto.PersonalInformationDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Getter
@Setter
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

    public PersonalInformation(PersonalInformationDto dto) {
        this.firstName = dto.getFirstName();
        this.lastName = dto.getLastName();
        this.dateOfBirth = dto.getDateOfBirth();
        this.address = dto.getAddress();
        this.job = dto.getJob();
        this.linkFacebook = dto.getLinkFacebook();
        this.linkInstagram = dto.getLinkInstagram();
        this.linkTwitter = dto.getLinkTwitter();
        this.linkGithub = dto.getLinkGithub();
        this.email = dto.getEmail();
        this.phone = dto.getPhone();
    }
}
