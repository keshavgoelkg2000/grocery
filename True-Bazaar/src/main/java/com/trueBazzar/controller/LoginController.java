package com.trueBazzar.controller;

import com.trueBazzar.dto.UserDTO;
import com.trueBazzar.entity.User;
import com.trueBazzar.repo.UserRepo;
import com.trueBazzar.service.EmailService;
import com.trueBazzar.service.UserService;
import jakarta.mail.Message;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.Random;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserRepo userRepo;

    Random random = new Random(1000);

//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/loginP")
    public ResponseEntity<User> login(@RequestBody User user){
        User user1 = this.userService.getUser(user.getPhone_number());
//        User user = this.userService.getUser(user1.getPhone_number());
//        if(user != null){
            if(user.getPassword().equals(user1.getPassword())){
                return new ResponseEntity<>(user1, HttpStatus.ACCEPTED);
            }
            else{
                return new ResponseEntity<>(user1, HttpStatus.BAD_GATEWAY);
            }
//        } else{
//            return "user not found";
//        }
    }

    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User createUser = this.userService.createUser(user);
        return new ResponseEntity<>(createUser, HttpStatus.CREATED);
    }




    // forgot user password handler
    @GetMapping("/forgot-password")
    public String forgotPassword(Model model, Principal principal, HttpSession session){
        return "forgot_email_form";
    }

    // RequestParam is used to fetch the entered data
    @PostMapping("/send-OTP")
    public ResponseEntity<String> sendOTP(@RequestParam("email") String email, HttpSession session) {

        // generating OTP of 4 digits
        int otp = random.nextInt(9999);
        System.out.println(otp);

        // write code for sending OTP
        String subject = "OTP Confirmation to login True Bazaar";

        String message =
                "<div style='border: 1px solid #e2e2e2; padding: 20px;'>"
                        + "<h1>"
                        + "OTP : "
                        + "<b>" + otp + "</b>"
                        + "</h1>"
                        + "</div>";

        String to = email;
        String from = "gargmayank1205@gmail.com";

        Boolean flag = this.emailService.sendEmail(subject, message, to);

        if(flag){
            session.setAttribute("myotp",otp);
            session.setAttribute("email",email);
//            session.setAttribute("message", new Message(" OTP has been sent to your registered mail ID !!"));
            return new ResponseEntity<>("verified !!", HttpStatus.ACCEPTED);
        } else{
//            session.setAttribute("message", new Message("Check your Email ID","danger"));
            return new ResponseEntity<>("OTP entered is incorrect !!", HttpStatus.BAD_REQUEST);
        }

    }

    // verifying OTP
//    @PostMapping("/verify-otp")
//    public String verifyOtp(@RequestParam("otp") Integer otp, HttpSession session){
//        int myOtp = (int) session.getAttribute("myotp");
//        String email = (String) session.getAttribute("email");
//        if(myOtp == otp){
//            // password change form
//            User user = this.userRepo.getUserByUsername(email);
//            if(user == null){
//                // error
//                session.setAttribute("message",
//                        new Message("User does not found with this Email","danger"));
//                return "forgot_email_form";
//            } else{
//                // send change password form
//            }
//            return "change_password_form";
//        } else{
//            session.setAttribute("message",
//                    new Message("OTP you have entered is invalid","alert alert-danger"));
//            return "verify_otp";
//        }
//    }

    // change password
//    @PostMapping("/change-password")
//    public String changePassword(@RequestParam("newPassword") String password, HttpSession session){
//        String email = (String) session.getAttribute("email");
//        User user = this.userRepo.getUserByUsername(email);
//        user.setPassword(this.passwordEncoder.encode(password));
//        this.userRepo.save(user);
//        return "redirect:/signin?change=password changed successfully...";
//    }
}
