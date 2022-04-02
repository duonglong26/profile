package com.nduonglong02.mycv.service.impl;

import com.globits.core.domain.FileDescription;
import com.globits.core.dto.FileDescriptionDto;
import com.nduonglong02.mycv.service.ImageToServerService;
import org.apache.tika.io.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class ImageToServerServiceImpl implements ImageToServerService {

    @Value("${upload.path}")
    private String fileUpload;

    @Override
    public FileDescriptionDto uploadImageToServer(MultipartFile file) {

        FileDescriptionDto fileDescriptionDto = null;
        try {
            String fileName = UUID.randomUUID().toString() + ".png";

            String filePath = fileUpload;
            try {
                Path CheckFolderExist = Paths.get(fileUpload);

                if (!Files.exists(CheckFolderExist)) {
                    Files.createDirectories(Paths.get(fileUpload));
                }

                File fileToBeSaved = new File(filePath, fileName);
                file.transferTo(fileToBeSaved);
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }

            FileDescription files = new FileDescription();
            files.setContentSize(file.getSize());
            files.setContentType(file.getContentType());
            files.setName(fileName);
            files.setFilePath(filePath);
            fileDescriptionDto = new FileDescriptionDto(files);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return fileDescriptionDto;

    }

    @Override
    public void getImageFromServer(HttpServletResponse response, String fileName) throws IOException {
        String path = "";
        if (fileUpload != null) {
            path = fileUpload;
        }
        File file = new File(path + fileName);
        if (file.exists()) {
            String contentType = "application/octet-stream";
            response.setContentType(contentType);
            OutputStream outputStream = response.getOutputStream();
            FileInputStream in = new FileInputStream(file);
            IOUtils.copy(in, outputStream);
            outputStream.close();
            in.close();
        } else {
            throw new FileNotFoundException();
        }
    }
}
