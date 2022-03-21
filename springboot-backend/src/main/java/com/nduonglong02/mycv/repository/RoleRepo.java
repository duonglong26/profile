package com.nduonglong02.mycv.repository;

import com.nduonglong02.mycv.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {

    Role findByName(String name);
}
