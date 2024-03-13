package com.trueBazzar.helper;

// This class contains methods that are used for generating token
// validate
// expiry of token

//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.function.Function;

//@Component
public class JwtHelper {

//    private static final long serialVersionUID = -2550185165626007488L;
//
//    private static final long JWT_TOKEN_VALIDITY = 5*60*60;
//
//    private String secret = "mayankagg123";
//
//    // retrieve username from token
//    public String getUsernameFromToken(String token){
//        return getClaimFromToken(token, Claims::getSubject);
//    }
//
//    // retrieve expiration date from jwt token
//    public Date getExpirationDateFromToken(String token){
//        return getClaimFromToken(token, Claims::getExpiration);
//    }
//
//
//    public <T> T getClaimFromToken(String token, Function<Claims,T> claimsResolver){
//        final Claims claims = getAllClaimsFromToken(token);
//        return claimsResolver.apply(claims);
//    }
//
//    // for retrieving any info from token we will need secret key
//    private Claims getAllClaimsFromToken(String token){
//        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
//    }
//
//    // check if token expired
//    private Boolean isTokenExpired(String token){
//        final Date expiration = getExpirationDateFromToken(token);
//        return expiration.before(new Date());
//    }
//
//    // generate token for user
//    public String generateToken(UserDetails userDetails){
//        Map<String, Object> claims = new HashMap<>();
//        return doGenerateToken(claims, userDetails.getUsername());
//    }
//
//    // while creating token
//    //1. define claims of token like issuer, expiration, subject and the ID
//    //2. Sign the JWT using HS512 algo and secret key
//    //3. Acc to JWS Compact Serialization
//    // compaction of JWT to a URL-safe string
//    private String doGenerateToken(Map<String, Object> claims, String subject){
//        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
//                .signWith(SignatureAlgorithm.HS512, secret).compact();
//    }
//
//    // validate token
//    public Boolean validateToken(String token, UserDetails userDetails){
//        final String username = getUsernameFromToken(token);
//        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
//    }
}
