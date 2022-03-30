package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.PersonalInformation;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class PersonalInformationDto extends BaseObjectDto {
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private String address;
    private String job;
    private String linkFacebook;
    private String linkInstagram;
    private String linkTwitter;
    private String linkGithub;
    private String email;
    private String phone;

    public PersonalInformationDto(PersonalInformation entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createDate = entity.getCreateDate();
            this.createdBy = entity.getCreatedBy();
            this.modifyDate = entity.getModifyDate();
            this.modifiedBy = entity.getModifiedBy();
            this.firstName = entity.getFirstName();
            this.lastName = entity.getLastName();
            this.dateOfBirth = entity.getDateOfBirth();
            this.address = entity.getAddress();
            this.job = entity.getJob();
            this.linkFacebook = entity.getLinkFacebook();
            this.linkInstagram = entity.getLinkInstagram();
            this.linkTwitter = entity.getLinkTwitter();
            this.linkGithub = entity.getLinkGithub();
            this.email = entity.getEmail();
            this.phone = entity.getPhone();
        }
    }
}
