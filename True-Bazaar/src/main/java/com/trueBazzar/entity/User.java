package com.trueBazzar.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;

//    @NotNull(message = "Phone number is mandatory")
    private String phone_number;

//    @NotBlank(message = "Name is mandatory")
//    @Size(min = 4)
    private String first_name;
    private String last_name;

//    @NotBlank(message = "email address is mandatory")
    private String email;

//    @NotBlank(message = "password is mandatory")
    private String password;

    private String address;
    private String state;
    private String city;
    private String pincode;

}
