package com.nduonglong02.mycv.service.impl;

import com.nduonglong02.mycv.domain.Role;
import com.nduonglong02.mycv.domain.User;
import com.nduonglong02.mycv.domain.UserRole;
import com.nduonglong02.mycv.dto.RoleDto;
import com.nduonglong02.mycv.dto.UserDto;
import com.nduonglong02.mycv.dto.UserRoleDto;
import com.nduonglong02.mycv.repository.RoleRepository;
import com.nduonglong02.mycv.repository.UserRepository;
import com.nduonglong02.mycv.repository.UserRoleRepository;
import com.nduonglong02.mycv.service.UserRoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserRoleServiceImpl implements UserRoleService {
    private final UserRoleRepository userRoleRepository;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public UserRole saveUserRole(UUID userId, UUID roleId) {
        if (userId != null && roleId != null) {
            UserRole result = new UserRole();
            User userRes = userRepository.findById(userId).orElse(null);
            Role roleRes = roleRepository.findById(roleId).orElse(null);
            if (userRes != null && roleRes != null) {
                result.setUser(userRes);
                result.setRole(roleRes);
                result = userRoleRepository.save(result);
                return result;
            }
        }
        return null;
    }

    @Override
    public UserRoleDto saveUserRole(UserRoleDto dto) {
        if (dto != null && dto.getUser() != null && dto.getRole() != null) {
            UserRole userRole = null;
            if (dto.getId() != null) {
                userRole = userRoleRepository.findById(dto.getId()).orElse(null);
            }
            if (userRole == null) {
                userRole = new UserRole();
            }
            User userRes = userRepository.findById(dto.getUser().getId()).orElse(null);
            Role roleRes = roleRepository.findById(dto.getRole().getId()).orElse(null);
            if (userRes != null && roleRes != null) {
                userRole.setUser(userRes);
                userRole.setRole(roleRes);
                userRole = userRoleRepository.save(userRole);
                return new UserRoleDto(userRole);
            }
        }
        return null;
    }
}
