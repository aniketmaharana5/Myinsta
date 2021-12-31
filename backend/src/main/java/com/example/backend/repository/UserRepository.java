package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Users;

public interface UserRepository extends JpaRepository<Users,Long>{
	Users findByUserName(String userName);
	Users findByUserId(Long userId);
}
