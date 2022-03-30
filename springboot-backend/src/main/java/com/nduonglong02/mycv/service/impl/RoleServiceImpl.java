package com.nduonglong02.mycv.service.impl;

import com.nduonglong02.mycv.domain.Role;
import com.nduonglong02.mycv.dto.RoleDto;
import com.nduonglong02.mycv.repository.RoleRepository;
import com.nduonglong02.mycv.service.RoleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    @Override
    public RoleDto saveOrUpdate(RoleDto dto) {
        if (dto != null) {
            Role role = null;
            if (dto.getId() != null) {
                role = roleRepository.findById(dto.getId()).orElse(null);
            }
            if (role == null) {
                role = new Role();
            }
            role.setName(dto.getName());
            log.info("Saving new role {} to the database", dto.getName());
            role = roleRepository.save(role);
            return new RoleDto(role);
        }
        return null;
    }
}
