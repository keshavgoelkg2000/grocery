package com.trueBazzar.controller;

import com.trueBazzar.entity.User;
import com.trueBazzar.repo.UserRepo;
import com.trueBazzar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;

    // create user
    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User createUser = this.userService.createUser(user);
        return new ResponseEntity<>(createUser, HttpStatus.CREATED);
    }

    // get user
    @GetMapping("/{phoneNumber}")
    public ResponseEntity<User> getUser(@PathVariable("phoneNumber") String phoneNumber){
        User user = this.userService.getUser(phoneNumber);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // get all user
    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUser(){
        List<User> allUser = this.userService.getAllUser();
        return new ResponseEntity<>(allUser, HttpStatus.OK);
    }

    // delete user
    @DeleteMapping("/{phoneNumber}")
    public ResponseEntity<User> deleteUser(@PathVariable("phoneNumber") String phoneNumber){
        User user = this.userService.deleteUser(phoneNumber);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // update user
    @PutMapping("/{phoneNumber}")
    public ResponseEntity<User> updateUser(@PathVariable("phoneNumber") String phoneNumber,
                                           @RequestBody User user){
        User user1 = this.userService.updateUser(phoneNumber, user);
        return new ResponseEntity<>(user1, HttpStatus.OK);
    }



}
