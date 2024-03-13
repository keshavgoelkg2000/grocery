package com.trueBazzar.service;

import jakarta.activation.DataHandler;
import jakarta.mail.Message;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import org.hibernate.Session.*;
import org.springframework.core.io.InputStreamSource;
import org.springframework.stereotype.Service;
import org.springframework.ws.mime.Attachment;
import org.springframework.ws.mime.AttachmentException;
import org.springframework.ws.mime.MimeMessage;

import javax.xml.transform.Result;
import javax.xml.transform.Source;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Authenticator;
import java.net.PasswordAuthentication;
import java.util.Iterator;
import java.util.Properties;

@Service
public class EmailService {

    public Boolean sendEmail(String subject, String message, String to) {

        boolean flag = false;

        Properties properties = new Properties();

        // setting important information to properties object
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");

        String user = "gargmayank1205";
        String password = "vrvjnccpepdpllrt";

        // step 1
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(user, password);
            }
        });

        session.setDebug(true);

        // step 2 : compose the message [text, multimedia]

        try {

            Message mimeMessage = new MimeMessage(session);

            // from email
            mimeMessage.setFrom(new InternetAddress(from));

            // adding recipient to message
            mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // adding subject to message
            mimeMessage.setSubject(subject);

            // adding text to message
//            mimeMessage.setText(text);

            // sending text to message in html format
            mimeMessage.setContent(message, "text/html");

            // step 3 : send the message using Transport class
            Transport.send(mimeMessage);

            System.out.println("Sent success.........");
            flag = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }
}