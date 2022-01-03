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

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;


@Entity
@Table(name="posts")
//@Data

public class Posts {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long postId;
	private String pic;
	@ManyToOne
	@JsonBackReference

	private Users user;
	private int likes;
	
	@OneToMany(mappedBy="post",cascade=CascadeType.REMOVE)
	private List<Comments> comment=new ArrayList<Comments>();

	
	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Posts(String pic, int likes) {
		this.pic = pic;
//		this.user = user;
		this.likes = likes;
	}
	public Posts(Long postId, String pic, Users user, int likes, List<Comments> comment) {
		super();
		this.postId = postId;
		this.pic = pic;
		this.user = user;
		this.likes = likes;
		this.comment = comment;
	}

	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}

	public String getPic() {
		return pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
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

	
	
	
}
