package com.example.backend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="users")


public class Users {
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userId;
	private String userName;
	private String profilePic;
	private int noOfPosts;
	private int followers;
	private int following;
	
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(int userId, String userName, String profilePic, int noOfPosts, int followers, int following,
			List<Posts> post) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.profilePic = profilePic;
		this.noOfPosts = noOfPosts;
		this.followers = followers;
		this.following = following;
		this.post = post;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
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

	@OneToMany(mappedBy="user",cascade=CascadeType.REMOVE)
	private List<Posts> post=new ArrayList<Posts>();
}
