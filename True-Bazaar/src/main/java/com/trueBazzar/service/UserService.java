package com.trueBazzar.service;

import com.trueBazzar.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    User createUser(User user);

    User getUser(String phoneNumber);

    List<User> getAllUser();

    User deleteUser(String phoneNumber);

    User updateUser(String phoneNumber, User user);
}
