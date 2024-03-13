package com.trueBazzar.controller;

//import com.trueBazzar.service.CustomUserDetailService;
//import com.trueBazzar.helper.JwtHelper;
//import com.trueBazzar.model.JwtRequest;
//import com.trueBazzar.model.JwtResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//public class JwtController {
//
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @Autowired
//    private CustomUserDetailService customUserDetailService;
//
//    @Autowired
//    private JwtHelper jwtHelper;
//
//    @RequestMapping(value = "/token", method = RequestMethod.POST)
//    public ResponseEntity<?> GenerateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
//        System.out.println(jwtRequest);
//        try{
//            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken
//                            (jwtRequest.getUsername(), jwtRequest.getPassword()));
//        } catch(UsernameNotFoundException e){
//            e.printStackTrace();
//            throw new Exception("Bad credentials");
//        }
//
//        UserDetails userDetails = this.customUserDetailService.loadUserByUsername(jwtRequest.getUsername());
//        String token = this.jwtHelper.generateToken(userDetails);
//
//        return ResponseEntity.ok(new JwtResponse(token));
//    }
//
//}



//@RestController
public class JwtController {

//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @Autowired
//    private CustomUserDetailService customUserDetailService;
//
//    @Autowired
//    private JwtHelper jwtHelper;
//
//    @PostMapping("/token")
//    public ResponseEntity<JwtResponse> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
//        try {
//            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
//                    jwtRequest.getUsername(), jwtRequest.getPassword()));
//        } catch (UsernameNotFoundException e) {
//            return ResponseEntity.badRequest().body(new JwtResponse("Invalid username or password"));
//        }
//
//        UserDetails userDetails = customUserDetailService.loadUserByUsername(jwtRequest.getUsername());
//        String token = jwtHelper.generateToken(userDetails);
//
//        return ResponseEntity.ok(new JwtResponse(token));
//    }
}
