package com.restful;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String headline;
    private String tag;

    @Column(columnDefinition = "TEXT")
    private String message;

    public Post() {
    }

    public Post(String headline, String tag, String message) {
        this.headline = headline;
        this.tag = tag;
        this.message = message;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getHeadline() {
        return headline;
    }

    public String getTag() {
        return tag;
    }

    public String getMessage() {
        return message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return id.equals(post.id) &&
                headline.equals(post.headline) &&
                tag.equals(post.tag) &&
                Objects.equals(message, post.message);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, headline, tag, message);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", headline='" + headline + '\'' +
                ", tag='" + tag + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}