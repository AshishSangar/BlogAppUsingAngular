import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  blog: Blog | undefined;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.blog = this.blogService.getBlog(this.id);
  }

  updateBlog(): void {
    if (this.blog) {
      this.blogService.updateBlog(this.blog);
      this.router.navigate(['/posts']);
    }
  }
}
