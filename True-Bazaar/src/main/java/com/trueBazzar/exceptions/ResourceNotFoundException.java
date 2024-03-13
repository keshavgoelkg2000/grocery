package com.trueBazzar.exceptions;

public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException(String s) {
        super(s);
    }

    public String ResourceNotFoundException(String message){
        return message;
    }

}
