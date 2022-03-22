package com.nduonglong02.mycv.service;

import com.nduonglong02.mycv.domain.UserRole;
import com.nduonglong02.mycv.dto.UserRoleDto;

import java.util.UUID;

public interface UserRoleService {
    UserRole saveUserRole(UUID userId, UUID roleId);
    UserRoleDto saveUserRole(UserRoleDto dto);
}
