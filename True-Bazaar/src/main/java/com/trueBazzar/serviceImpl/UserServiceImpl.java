package com.trueBazzar.serviceImpl;

import com.trueBazzar.entity.User;
import com.trueBazzar.exceptions.ResourceNotFoundException;
import com.trueBazzar.repo.UserRepo;
import com.trueBazzar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public User createUser(User user) {
        User createUser = this.userRepo.save(user);
        return createUser;
    }

    @Override
    public User getUser(String phoneNumber) {
        User user = this.userRepo.getUserByPhoneNumber(phoneNumber);
        return user;
    }

    @Override
    public List<User> getAllUser() {
        return this.userRepo.findAll();
    }

    @Override
    public User deleteUser(String phoneNumber) {
        User user = this.userRepo.getUserByPhoneNumber(phoneNumber);
        if(user != null){
            this.userRepo.delete(user);
            return user;
        } else {
            return null;
        }
    }

    @Override
    public User updateUser(String phoneNumber, User user) {
        User user1 = this.userRepo.getUserByPhoneNumber(phoneNumber);
        if(user1 != null) {
            if(user.getFirst_name() != null && !(user.getFirst_name().equals(user1.getFirst_name()))) {
                user1.setFirst_name(user.getFirst_name());
            }

            if( user.getLast_name() != null && !(user.getLast_name().equals(user1.getLast_name()))) {
                user1.setLast_name(user.getLast_name());
            }

            if( user.getAddress() != null && !(user.getAddress().equals(user1.getAddress()))) {
                user1.setAddress(user.getAddress());
            }

            if(user.getState() != null && !(user.getState().equals(user1.getState()))) {
                user1.setState(user.getState());
            }

            if(user.getCity() != null && !(user.getCity().equals(user1.getCity()))) {
                user1.setCity(user.getCity());
            }

            if(user.getPassword()!= null && !(user.getPassword().equals(user1.getPassword()))) {
                user1.setPassword(user.getPassword());
            }

            if(user.getPincode() != null && !(user.getPincode().equals(user1.getPincode()))) {
                user1.setPincode(user.getPincode());
            }

            this.userRepo.save(user1);
            return user1;
        } else{
            return null;
        }

    }
}
