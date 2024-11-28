package edu.academia.ERP.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(InvalidAuthTokenException.class)
    public ResponseEntity<String> handleInvalidAuth(InvalidAuthTokenException ex) {
        return new ResponseEntity<>(ex.getMsg(), HttpStatus.UNAUTHORIZED);
    }
//
//    @ExceptionHandler(CustomerNotFoundException.class)
//    public ResponseEntity<String> customerNotFoundExceptionHandler(CustomerNotFoundException ex) {
//        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
//    }

    @ExceptionHandler(LoginFailedException.class)
    public ResponseEntity<String> loginFailedExceptionHandler(LoginFailedException ex) {
        return new ResponseEntity<>(ex.getMsg(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DomainNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    public String domainNotFoundExceptionHandler(DomainNotFoundException ex) {
//        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        return ex.getMsg();
    }

    @ExceptionHandler(io.jsonwebtoken.ExpiredJwtException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ResponseBody
    public String jwtExpiredExceptionHandler(io.jsonwebtoken.ExpiredJwtException ex) {
        return "Session expired";
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception ex) {
        return new ResponseEntity<>("An unexpected error occurred: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
