package com.nduonglong02.mycv.controller;

import com.nduonglong02.mycv.dto.ProfileDto;
import com.nduonglong02.mycv.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @PostMapping()
    public ResponseEntity<ProfileDto> saveProfile(@RequestBody ProfileDto dto) {
        ProfileDto result = profileService.saveOrUpdate(dto);
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

//    @PutMapping()
//    public ResponseEntity<ProfileDto> updateProfile(@RequestBody ProfileDto dto) {
//        ProfileDto result = profileService.saveOrUpdate(dto);
//        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
//    }

    @GetMapping("/all")
    public ResponseEntity<List<ProfileDto>> getAll() {
        List<ProfileDto> result = profileService.getAll();
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteProfile(@PathVariable("id") String id) {
        Boolean result = profileService.deleteById(UUID.fromString(id));
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
}
