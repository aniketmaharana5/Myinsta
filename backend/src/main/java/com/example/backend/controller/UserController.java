package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Followers;
import com.example.backend.model.Posts;
import com.example.backend.model.Users;
import com.example.backend.repository.FollowerRepository;
import com.example.backend.repository.PostsRepository;
import com.example.backend.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/user/")
public class UserController {
	@Autowired
	UserRepository userrepository;
	
	@Autowired
	FollowerRepository followerrepository;
	
	@Autowired
	PostsRepository postrepository;
	
	

	
	@GetMapping("/login")
	public String login() {
		Authentication auth= SecurityContextHolder.getContext().getAuthentication();
		Users u=userrepository.findByUserName(auth.getName());
		return u.getUserName();
	}	
	
//	followers
	
//	following
	@PostMapping("/follow/{userName}") 
	public Users followers(@RequestBody Followers f, @PathVariable String userName ){
		Users user= userrepository.findByUserName(userName);
		user.setFollowers(user.getFollowers()+1);
		f.setUser(user);
		followerrepository.save(f);
		Users user1=userrepository.findByUserName(f.getFollowerUserName());
		user1.setFollowing(user1.getFollowing()+1);
		f.setUser(user1);
		followerrepository.save(f);
		return user;
	}
//	posts
	@PostMapping("/posts/{userName}")
	public Posts post(@RequestBody Posts p,@PathVariable String userName) {
		Users user=userrepository.findByUserName(userName);
		p.setUser(user);
		return postrepository.save(p);
		
	}
	
	
//  Update
	
}
