package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserRoleDto extends BaseObjectDto {
    private RoleDto role;
    private UserDto user;

    public UserRoleDto(RoleDto role, UserDto user) {
        this.role = role;
        this.user = user;
    }

    public UserRoleDto(UserRole entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createDate = entity.getCreateDate();
            this.createdBy = entity.getCreatedBy();
            this.modifyDate = entity.getModifyDate();
            this.modifiedBy = entity.getModifiedBy();
            this.role = new RoleDto(entity.getRole());
            this.user = new UserDto(entity.getUser());
        }
    }

}
