package com.nduonglong02.mycv.repository;

import com.nduonglong02.mycv.domain.Role;
import com.nduonglong02.mycv.domain.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, UUID> {
    @Query("select e.role from UserRole e where e.user.id = ?1")
    List<Role> findByUserId(UUID userId);
}
