import { Component, OnInit, Input } from '@angular/core';

export class CommentNode {

  id: string | number = 0;
  text: string = '';
  user: {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
  };
  anwsers: CommentNode[] = [];
  voteInfo: [
    {
      // username: string ;
      upVoteCount: 0;
      downVoteCount: 0;
    }
  ];
  // parentid?: string | number;
  isOpen: false;
  // isEdit: false;
  // canEdit: false;
  // canDelete: false;
  profileImage: any;
  profileImageContentType: any;
  createdBy: string;
  createdDate: Date = new Date();
  lastUpdatedDate: Date = new Date();
  constructor(text: string, id: string | number) {
    this.text = text;
    this.id = id;
  }

  addAnwser(newComment: CommentNode) {
    if (newComment.text) {
      this.anwsers.push(newComment);
    }
  }

  removeComment(newComment: CommentNode) {
    let index = this.anwsers.indexOf(newComment);
    console.log(index);
    if (~index) {
      this.anwsers.slice(index, 1);
    }
  }
}

@Component({
  selector: 'app-nested-comment',
  templateUrl: './nested-comment.component.html',
  styleUrls: ['./nested-comment.component.css']
})

export class NestedCommentComponent implements OnInit {
  @Input()
  comments: CommentNode[] = [];
  text: string;
  constructor() {}
  id: any;
  ngOnInit() {
    // console.log(this.comments);
  }

  addComment(comment: CommentNode, index) {
    console.log(index);
    // if (comment.isEdit) {
    //   console.log('yes edit');
    //   comment.text = this.text;
    //   comment.isEdit = false;
    //   comment.isOpen = false;
    // } else {
      //comment.id;
      this.id = comment.anwsers.length + 1;
      console.log(comment.anwsers.length);
      const node_id = this.comments[index].id + '-' + this.id;
      comment.addAnwser(new CommentNode(this.text, node_id));
      comment.isOpen = false;
      this.text = '';
      console.log(this.comments);
    // }
  }
  editComment(comment) {
    console.log(comment);
    this.text = comment.text;
    comment.isOpen = !comment.isOpen;
    comment.isEdit = true;
  }

  openCommentText(comment) {
    console.log(comment);
    comment.isOpen = !comment.isOpen;
  }

  remove(comment: CommentNode) {
    let index = this.comments.indexOf(comment);
    console.log(index);
    this.comments = this.comments.splice(index, 1);
  }
}
