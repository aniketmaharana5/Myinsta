package com.example.backend.model;

import java.util.List;

public class PostResponse {

	private String pic;
	private int likes;
	private String userName;
	private String profilePic;
	private List<Comments> comment;
	private Long postId;
	private boolean checklike;
	
	
	
	public PostResponse(String pic, int likes, String userName, String profilePic, List<Comments> comment, Long postId,
			boolean checklike) {
		super();
		this.pic = pic;
		this.likes = likes;
		this.userName = userName;
		this.profilePic = profilePic;
		this.comment = comment;
		this.postId = postId;
		this.checklike = checklike;
	}
	public boolean isChecklike() {
		return checklike;
	}
	public void setChecklike(boolean checklike) {
		this.checklike = checklike;
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
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
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
	public List<Comments> getComment() {
		return comment;
	}
	public void setComment(List<Comments> comment) {
		this.comment = comment;
	}
	public PostResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}