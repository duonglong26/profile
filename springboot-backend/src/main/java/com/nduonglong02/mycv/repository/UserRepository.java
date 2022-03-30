package com.nduonglong02.mycv.repository;

import com.nduonglong02.mycv.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    @Query("select e from User e where e.username = ?1")
    User findByUsername(String username);

//    @Query("select e from User e where e.id = ?1")
//    User findById(UUID userId);
}
