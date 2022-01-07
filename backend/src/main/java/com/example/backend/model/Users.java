package com.example.backend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;


@Entity
@Table(name="users")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor

public class Users {
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userId;
	 @Column(unique = true)
	private String userName;
	private String profilePic;
	private int noOfPosts;
	private int followers;
	private int following;
	private String caption;
	private String password;
	
	@OneToMany(mappedBy="user",cascade=CascadeType.REMOVE)
	private List<Posts> post=new ArrayList<Posts>();
	
	@OneToMany(mappedBy="user",cascade=CascadeType.REMOVE)
	private List<Followers> follower=new ArrayList<Followers>();

	
	


	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(Long userId, String userName, String profilePic, int noOfPosts, int followers, int following,
			String caption, String password, List<Posts> post, List<Followers> follower) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.profilePic = profilePic;
		this.noOfPosts = noOfPosts;
		this.followers = followers;
		this.following = following;
		this.caption = caption;
		this.password = password;
		this.post = post;
		this.follower = follower;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public int getNoOfPosts() {
		return noOfPosts;
	}

	public void setNoOfPosts(int noOfPosts) {
		this.noOfPosts = noOfPosts;
	}

	public int getFollowers() {
		return followers;
	}

	public void setFollowers(int followers) {
		this.followers = followers;
	}

	public int getFollowing() {
		return following;
	}

	public void setFollowing(int following) {
		this.following = following;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	
}
