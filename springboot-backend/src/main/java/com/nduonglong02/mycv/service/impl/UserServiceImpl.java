package com.nduonglong02.mycv.service.impl;

import com.nduonglong02.mycv.domain.Role;
import com.nduonglong02.mycv.domain.User;
import com.nduonglong02.mycv.dto.UserDto;
import com.nduonglong02.mycv.repository.UserRepository;
import com.nduonglong02.mycv.repository.UserRoleRepository;
import com.nduonglong02.mycv.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        if (user == null) {
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        } else {
            log.info("User found in the database: {}", username);
            List<Role> roleList = userRoleRepository.findByUserId(user.getId());
            roleList.forEach(role -> {
                authorities.add(new SimpleGrantedAuthority(role.getName()));
            });
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public UserDto saveOrUpdate(UserDto dto) {
        if (dto != null) {
            User user = null;
            if (dto.getId() != null) {
                user = userRepository.findById(dto.getId()).orElse(null);
            }
            if (user == null) {
                user = new User();
            }
            user.setUsername(dto.getUsername());
            user.setPassword(passwordEncoder.encode(dto.getPassword()));
            log.info("Saving new user {} to the database", dto.getUsername());
            user = userRepository.save(user);
            return new UserDto(user);
        }
        return null;
    }

    @Override
    public List<UserDto> getUsers() {
        List<User> listUser = userRepository.findAll();
        List<UserDto> result = new ArrayList<>();
        listUser.forEach(user -> {
            result.add(new UserDto(user));
        });
        return result;
    }

    @Override
    public UserDto getUserById(UUID userId) {
        return new UserDto(userRepository.findById(userId).orElse(null));
    }

    @Override
    public UserDto getUserByUsername(String username) {
        return new UserDto(userRepository.findByUsername(username));
    }

    @Override
    public Boolean checkExitsAccount(String username) {
        if (userRepository.findByUsername(username) != null) {
            return true;
        }
        return false;
    }

}
