package com.restful;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.NoSuchElementException;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200",
            "http://127.0.0.1:3000", "http://127.0.0.1:4200" })
@RestController
public class CrudController {

    @Autowired
    private PostRepository postRepository;

    @RequestMapping(value = "/")
    public Iterable<Post> getAllPosts() {
        Iterable<Post>  posts = postRepository.findAll();
        return posts;
    }

    @RequestMapping("/delete/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable long id) {

        try {
            postRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        catch (IllegalArgumentException e){
            return ResponseEntity.notFound().build();
        }
        catch (EmptyResultDataAccessException e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/post/{id}")
    public Post getPost(@PathVariable long id) {
        try {
             return postRepository.findById(id).get();
        }
        catch (IllegalArgumentException e){
            return null;
        }
        catch (EmptyResultDataAccessException e){
            return null;
        }
        catch (NoSuchElementException e){
            return null;
        }
    }

    @PutMapping("/post/update/{id}")
    public Iterable<Post> updatePost(@PathVariable long id,
                                               @RequestBody Post post) {
        //Post postUpdated = postRepository.save(post);

        Post postUpdated = postRepository.save(post);

        return this.getAllPosts();
    }

    @PostMapping("/add")
    public Iterable<Post> createPost(@RequestBody Post post) {

        Post createdCourse = postRepository.save(post);

        // Location
        // Get current resource url
        /// {id}
        return this.getAllPosts();
    }


}
