package com.trueBazzar.repo;

import com.trueBazzar.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends JpaRepository<User, Integer> {

    @Query("select u from User u where u.phone_number = :phoneNumber")
    public User getUserByPhoneNumber(@Param("phoneNumber") String phoneNumber);

}


// integrating frontend and backend
// axios used for server integration
// react-toastify for messages to be displayed
