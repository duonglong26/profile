package com.nduonglong02.mycv.dto;

import com.globits.core.dto.BaseObjectDto;
import com.nduonglong02.mycv.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UserDto extends BaseObjectDto {
    private String username;
    private String password;
    private List<RoleDto> roleList = new ArrayList<>();

    public UserDto(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public UserDto(User entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createDate = entity.getCreateDate();
            this.createdBy = entity.getCreatedBy();
            this.modifyDate = entity.getModifyDate();
            this.modifiedBy = entity.getModifiedBy();
            this.username = entity.getUsername();
            if (!CollectionUtils.isEmpty(entity.getUserRoleList())) {
                entity.getUserRoleList().forEach(userRole -> {
                    this.roleList.add(new RoleDto(userRole.getRole()));
                });
            }
        }
    }

}
