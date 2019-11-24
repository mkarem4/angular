import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postId = 5;
  postStatus = 'published';
  constructor() {
  }

  ngOnInit() {
  }

  getPostStatus(){
    return this.postStatus;
  }

}
