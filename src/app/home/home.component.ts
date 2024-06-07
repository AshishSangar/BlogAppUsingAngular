import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  deleteBlog(id: number): void {
    this.blogService.deleteBlog(id);
    this.blogs = this.blogService.getBlogs();
  }

  viewBlog(id: number): void {
    this.router.navigate([`/posts`, id]);
  }

  editBlog(id: number): void {
    this.router.navigate([`/post/edit`, id]);
  }
}
