package com.nduonglong02.mycv.controller;

import com.nduonglong02.mycv.domain.User;
import com.nduonglong02.mycv.dto.RoleDto;
import com.nduonglong02.mycv.dto.UserDto;
import com.nduonglong02.mycv.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/all")
    public ResponseEntity<List<UserDto>> getUsers() {
        List<UserDto> result = userService.getUsers();
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @PostMapping("")
    public ResponseEntity<UserDto> saveUser(@RequestBody UserDto dto) {
        UserDto result = userService.saveOrUpdate(dto);
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }


}
