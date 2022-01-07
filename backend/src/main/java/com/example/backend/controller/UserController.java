package com.example.backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Followers;
import com.example.backend.model.PostResponse;
import com.example.backend.model.Posts;
import com.example.backend.model.Users;
import com.example.backend.repository.FollowerRepository;
import com.example.backend.repository.PostsRepository;
import com.example.backend.repository.UserRepository;

import lombok.var;

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
	
	//Likes
	@PutMapping("/likes/{postId}/{userName}")
	public Posts likes(@PathVariable Long postId, @PathVariable String userName) {
		Posts post=postrepository.findByPostId(postId);
		post.setLikes(post.getLikes()+1);
		List<String>s=post.getUserLikes();
		s.add(userName);
		post.setUserLikes(s);
		return postrepository.save(post);
	}
	//dislikes
	@PutMapping("/dislikes/{postId}/{userName}")
	public Posts dislikes(@PathVariable Long postId, @PathVariable String userName) {
		Posts post=postrepository.findByPostId(postId);
		post.setLikes(post.getLikes()-1);
		List<String> s=post.getUserLikes();
		s.remove(userName);
		post.setUserLikes(s);
		return postrepository.save(post);
	}
	
//	posts
	@PostMapping("/posts/{userName}")
	public Posts post(@RequestBody Posts p,@PathVariable String userName) {
		Users user=userrepository.findByUserName(userName);
		p.setUser(user);
		user.setNoOfPosts(user.getNoOfPosts()+1);
		userrepository.save(user);
		return postrepository.save(p);	
	}
	

    
    @GetMapping("/posts/{userName}")
    public ResponseEntity<List<PostResponse>> getAllPosts(@PathVariable String userName){
        List<Posts> postList =postrepository.findAll();
        List<PostResponse> pl=new ArrayList<PostResponse>();
        for (int i = 0; i < postList.size(); i++) 
        {
          List<String> a=postList.get(i).getUserLikes();
        	
          PostResponse p=new PostResponse();
          p.setChecklike(a.contains(userName));
          p.setPostId(postList.get(i).getPostId());
          p.setPic(postList.get(i).getPic());
          p.setLikes(postList.get(i).getLikes());
          p.setUserName(postList.get(i).getUser().getUserName());
          p.setProfilePic(postList.get(i).getUser().getProfilePic());
          p.setComment(postList.get(i).getComment());
          pl.add(p);
          
        }
        return ResponseEntity.ok(pl);
    }
    
    @GetMapping("checklike/{userName}")
    public List<Boolean> check(@PathVariable String userName) {
    	List<Posts> listpost=postrepository.findAll();
    	List<Boolean> result=new ArrayList<Boolean>();
    	for (int i = 0; i < listpost.size(); i++) 
        {
    		Posts p=listpost.get(i);
    		List<String> usernames=p.getUserLikes();
    		boolean a=usernames.contains(userName);
            result.add(a);
        }
    	return result;
    }
    
    
    
    
    @GetMapping("/profilePost/{userName}")
    public List<Posts> getProfile(@PathVariable String userName) {
    	Users user= userrepository.findByUserName(userName);
    	List<Posts> profileList=postrepository.getPosts(user.getUserId());
        return profileList;
    }
    
    @GetMapping("/profile/{userName}")
    public Users getUserProfile(@PathVariable String userName) {
    	Users user=userrepository.findByUserName(userName);
    	return user;
    }
    
    //Update
    
    @PutMapping("/updateProfile/{userName}")
    public Users updateProfile(@RequestBody Users u,@PathVariable String userName){
    
	Users user = userrepository.findByUserName(userName);
	user.setProfilePic(u.getProfilePic());
	user.setCaption(u.getCaption());
	return userrepository.save(user);
    }
    
    
    //Delete
    
    @DeleteMapping("/delete/{userName}")
     public ResponseEntity<String> deleteProfile(@PathVariable String userName) {
    	Users user=userrepository.findByUserName(userName);
    	Long id=user.getUserId();
    	userrepository.deleteById(id);
    	return new ResponseEntity<>("Deleted",HttpStatus.OK);
    }
    
    
    @DeleteMapping("/Delete/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable Long postId){
    	postrepository.deleteById(postId);
        return new ResponseEntity<>("Deleted",HttpStatus.OK);

    	
    }
//	
//    @GetMapping("/posts1")
//    public ResponseEntity <List<Posts>> getPosts(){
//        List<Posts> postList =postrepository.findAll();
//        return ResponseEntity.ok(postList);
//    }
	
//  Update
	
}