import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postId = 5;
  postStatus = 'published';
  allowNewPost = false;
  postCreationStatus = 'No posts were created !';
  postTitle = 'Angular';
  postCreated = false;
  posts = ['Laravel', 'Symfony', 'Wordpress'];

  constructor() {
    this.postStatus = Math.random() > 0.5 ? 'published' : 'draft';
    setTimeout(() => {
      this.allowNewPost = true;
    }, 2000);
  }

  ngOnInit() {
  }

  getPostStatus() {
    return this.postStatus;
  }

  onCreatePost() {
    this.postCreated = true;
    this.posts.push(this.postTitle);
    this.postCreationStatus = 'Post was created with title : ' + this.postTitle;
  }

  onUpdatePostTitle(event: any) {
    this.postTitle = (event.target as HTMLInputElement).value;
  }

  getColor() {
    return this.postStatus === 'published' ? 'green' : 'red';
  }

}
