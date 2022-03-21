package com.nduonglong02.mycv;

import com.nduonglong02.mycv.dto.RoleDto;
import com.nduonglong02.mycv.dto.UserDto;
import com.nduonglong02.mycv.dto.UserRoleDto;
import com.nduonglong02.mycv.service.RoleService;
import com.nduonglong02.mycv.service.UserRoleService;
import com.nduonglong02.mycv.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SpringbootBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner run(UserService userService, RoleService roleService, UserRoleService userRoleService) {
        return args -> {
            if (!userService.checkExitsAccount("admin")) {
                RoleDto role = roleService.saveOrUpdate(new RoleDto("ROLE_ADMIN"));
                UserDto user = userService.saveOrUpdate(new UserDto("admin", "1"));
                userRoleService.saveUserRole(new UserRoleDto(role, user));
            }
        };
    }
}
