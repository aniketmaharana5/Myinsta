package com.example.backend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="followers")
public class Followers {

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long followerId;
	@ManyToOne
	private Users user;
	private String followerUserName;
	
	
	
	public Followers() {
		super();
	}
	public Followers(Long followerId, Users user, String followerUserName) {
		super();
		this.followerId = followerId;
		this.user = user;
		this.followerUserName = followerUserName;
	}
	public Long getFollowerId() {
		return followerId;
	}
	public void setFollowerId(Long followerId) {
		this.followerId = followerId;
	}
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	public String getFollowerUserName() {
		return followerUserName;
	}
	public void setFollowerUserName(String followerUserName) {
		this.followerUserName = followerUserName;
	}
	

}
