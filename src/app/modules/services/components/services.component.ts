import { Component } from '@angular/core';
import { Service } from '../../home/components/home.component';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ArticleService } from 'src/app/services/article.service';
import { PageSlugs } from 'src/app/enums/page-slugs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  public service: Service = {} as Service;
  public services: Service[] = [];
  public mediaValue800px = '(max-width: 50rem)';
  public pageSlugs: typeof PageSlugs = PageSlugs;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug !== null) {
      this.service = this.articleService.getServiceBySlug(slug);
    }

    let content = 'Serviciile noastre';
    let title = `Serviciile noastre`;

    if (this.service.content) {
      content = this.service.summary;
      title = this.service.title;
    }

    // Setez titlul și meta date pentru SEO
    this.titleService.setTitle(title);
    this.metaService.updateTag({
      name: 'description',
      content: content,
    });
    this.services = this.articleService.getServices();
  }
}
