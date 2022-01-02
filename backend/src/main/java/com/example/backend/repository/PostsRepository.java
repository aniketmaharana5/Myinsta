package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.model.Posts;

public interface PostsRepository extends JpaRepository<Posts,Long>{

	@Query("SELECT pic FROM Posts pic WHERE pic.user.userId=?1")
	List<Posts> getPosts(Long id);
	Posts findByPostId(Long id);
}


