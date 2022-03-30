package com.nduonglong02.mycv.service;


import com.nduonglong02.mycv.dto.UserDto;

import java.util.List;
import java.util.UUID;

public interface UserService {
    UserDto saveOrUpdate(UserDto user);
    List<UserDto> getUsers();
    UserDto getUserById(UUID userId);
    UserDto getUserByUsername(String username);
    Boolean checkExitsAccount(String username);
}
