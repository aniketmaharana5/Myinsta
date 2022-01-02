package com.example.backend.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Posts;
import com.example.backend.model.Users;
import com.example.backend.repository.PostsRepository;
import com.example.backend.repository.UserRepository;


@RestController
@CrossOrigin
@RequestMapping("/Auth/")
public class GuestController {
	@Autowired
	private PasswordEncoder passwordencoder;
	
	@Autowired
	private UserRepository userrepository;
	
	@Autowired
	private PostsRepository postsrepository;
	
	@PostMapping("/register")
	public Users Register(@RequestBody Users user) {
		user.setPassword(passwordencoder.encode(user.getPassword()));
		return userrepository.save(user);
	}
	
	@GetMapping("/get/{UserName}")
	public Collection<Posts> Get(@PathVariable String UserName) {
		Users user=userrepository.findByUserName(UserName);
		long userId=user.getUserId();
		return postsrepository.getPosts(userId);
	}
	

}
