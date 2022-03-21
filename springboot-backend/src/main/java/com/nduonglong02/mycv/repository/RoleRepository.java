package com.nduonglong02.mycv.repository;

import com.nduonglong02.mycv.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RoleRepository extends JpaRepository<Role, UUID> {
//    @Query("select e from Role e where e.id = ?1")
//    Role findById(UUID roleId);
}
