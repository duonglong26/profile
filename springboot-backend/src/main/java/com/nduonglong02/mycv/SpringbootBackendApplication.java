package com.nduonglong02.mycv;

import com.nduonglong02.mycv.domain.Role;
import com.nduonglong02.mycv.domain.User;
import com.nduonglong02.mycv.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;

//@CrossOrigin("http://localhost:3000")
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
    CommandLineRunner run(UserService userService) {
        return args -> {
            if (userService.getUser("admin") == null) {
                userService.saveRole(new Role(null, "ROLE_ADMIN"));
                userService.saveUser(new User(null, "admin", "admin", "1", new ArrayList<>()));
                userService.addRoleToUser("admin", "ROLE_ADMIN");
            }
        };
    }
}
