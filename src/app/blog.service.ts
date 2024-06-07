import { Injectable } from '@angular/core';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = [];
  private nextId = 1;

  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }

  getBlog(id: number): Blog | undefined {
    return this.blogs.find(blog => blog.id === id);
  }

  addBlog(blog: Blog): void {
    blog.id = this.nextId++;
    this.blogs.push(blog);
  }

  updateBlog(updatedBlog: Blog): void {
    const index = this.blogs.findIndex(blog => blog.id === updatedBlog.id);
    if (index !== -1) {
      this.blogs[index] = updatedBlog;
    }
  }

  deleteBlog(id: number): void {
    this.blogs = this.blogs.filter(blog => blog.id !== id);
  }
}
