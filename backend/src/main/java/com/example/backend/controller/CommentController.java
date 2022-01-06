package com.example.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Comments;
import com.example.backend.model.Posts;
import com.example.backend.repository.CommentsRepository;
import com.example.backend.repository.PostsRepository;

@RestController
@CrossOrigin
@RequestMapping("/user/")
public class CommentController {
	
	@Autowired
	PostsRepository postrepository;
	
	@Autowired
	CommentsRepository commentsrepository;

	@PostMapping("/comments/{PostId}/{userId}")
	public Comments comment(@RequestBody Comments c,@PathVariable Long PostId ) {
		Posts post= postrepository.findByPostId(PostId);
		c.setPost(post);
		return commentsrepository.save(c);
	}
}
