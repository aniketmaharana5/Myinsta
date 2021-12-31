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


@Entity
@Table(name="posts")


public class Posts {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int postId;
	
	@ManyToOne
	private Users user;
	private int likes;
	
	public int getPostId() {
		return postId;
	}

	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Posts(int postId, Users user, int likes, List<Comments> comment) {
		super();
		this.postId = postId;
		this.user = user;
		this.likes = likes;
		this.comment = comment;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	@OneToMany(mappedBy="post",cascade=CascadeType.REMOVE)
	private List<Comments> comment=new ArrayList<Comments>();
}
