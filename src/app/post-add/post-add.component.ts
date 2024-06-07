import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
  title: string = '';
  author: string = '';
  content: string = '';

  constructor(private blogService: BlogService, private router: Router) { }

  addBlog(): void {
    const newBlog: Blog = { id: 0, title: this.title, author: this.author, content: this.content };
    this.blogService.addBlog(newBlog);
    this.router.navigate(['/posts']);
  }
}
