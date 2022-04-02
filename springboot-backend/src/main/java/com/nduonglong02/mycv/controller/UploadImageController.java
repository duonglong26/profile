package com.nduonglong02.mycv.controller;

import com.globits.core.dto.FileDescriptionDto;
import com.nduonglong02.mycv.service.ImageToServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/api/image")
public class UploadImageController {

    @Autowired
    ImageToServerService imageToServerService;

    @PostMapping
    public ResponseEntity<FileDescriptionDto> uploadImageToServer(@RequestParam("file") MultipartFile file) {
        FileDescriptionDto result = null;
        try {
            result = imageToServerService.uploadImageToServer(file);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<FileDescriptionDto>(result, HttpStatus.OK);
    }

    @GetMapping(path = "/{filename:.+}")
    public void getImageByName(HttpServletResponse response, @PathVariable(value = "filename")String fileName)throws IOException {
        imageToServerService.getImageFromServer(response, fileName);
    }

}