package com.nduonglong02.mycv.service;


import com.nduonglong02.mycv.domain.Role;
import com.nduonglong02.mycv.domain.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User> getUsers();
}
