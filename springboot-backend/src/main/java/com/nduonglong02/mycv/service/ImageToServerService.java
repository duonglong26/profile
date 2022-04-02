package com.nduonglong02.mycv.service;

import com.globits.core.dto.FileDescriptionDto;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
public interface ImageToServerService {

    FileDescriptionDto uploadImageToServer(MultipartFile file, String idProfile);

    void getImageFromServer(HttpServletResponse response, String fileName) throws IOException;
}

