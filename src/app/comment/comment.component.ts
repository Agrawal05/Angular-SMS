import { Component, OnInit } from '@angular/core';
import { CommentNode } from '../nested-comment/nested-comment.component';
import { data } from '../data';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Array<CommentNode> = [];
  text: string;
  id: any;
  // index: any;
  // sample: Array<CommentNode> = [];
  constructor() {
    console.log(data);
    this.comments = Object.assign(data);
    // this.id = this.comments.length;
  }
  ngOnInit(): void {
  }

  // addComment() {
  //   this.comments.push(new CommentNode(this.text, ++this.id));
  //   console.log(this.comments);
  // }

}
