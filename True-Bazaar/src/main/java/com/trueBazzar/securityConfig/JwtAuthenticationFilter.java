package com.trueBazzar.securityConfig;

import java.io.IOException;

//import com.trueBazzar.service.CustomUserDetailService;
//import com.trueBazzar.helper.JwtHelper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//import io.jsonwebtoken.ExpiredJwtException;
//import io.jsonwebtoken.MalformedJwtException;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;

//@Component
public class JwtAuthenticationFilter {
// xtends OncePerRequestFilter {

//    @Autowired
//    private CustomUserDetailService customUserDetailService;
//
//    @Autowired
//    private JwtHelper jwtHelper;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//
//
//        // 1. get token
//
//        String requestToken = request.getHeader("Authorization");
//
//        System.out.println(requestToken);
//
//        String username = null;
//
//        String token = null;
//
//        if(requestToken != null && requestToken.startsWith("Bearer ")) {
//
////			System.out.println("coming here");
//
//            token = requestToken.substring(7);
//
////            System.out.println(token);
//
//            try {
//                username = this.jwtHelper.getUsernameFromToken(token);
//
////                System.out.println("username: "  + username);
//
//            } catch(IllegalArgumentException e) {
//                System.out.println("Unable to get Jwt Token");
//
//            }
//            catch(ExpiredJwtException e) {
//                System.out.println("Jwt Token expired !!");
//            }
//            catch(MalformedJwtException e) {
//                System.out.println("Invalid Jwt !!");
//            }
//
//        }
//        else {
//            System.out.println("Jwt Token does not start with Bearer");
//        }
//
//        // once we get token, now validate
//        // security
//        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//
//            UserDetails userDetails = this.customUserDetailService.loadUserByUsername(username);
//
//            if(this.jwtHelper.validateToken(token, userDetails)) {
//
//                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationtoken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//
//                usernamePasswordAuthenticationtoken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationtoken);
//
//            } else {
//                System.out.println("Invalid token !!");
//            }
//
//        } else {
//
//            System.out.println("Username is null or context is not null !!");
//
//        }
//
//        filterChain.doFilter(request, response);
//
//    }
}