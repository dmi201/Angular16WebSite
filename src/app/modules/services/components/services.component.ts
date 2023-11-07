import { Component, Inject, Renderer2 } from '@angular/core';
import { Service } from '../../home/components/home.component';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ArticleService } from 'src/app/services/article.service';
import { PageSlugs } from 'src/app/enums/page-slugs';
import { DOCUMENT } from '@angular/common';

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
    private articleService: ArticleService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.services = this.articleService.getServices();

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
    this.metaService.addTags([
      {
        name: 'keywords',
        content: this.articleService.getServicesKeywordsString(),
      },
      {
        name: 'description',
        content: content,
      },
    ]);

    this.addSchemaForServices();
  }

  addSchemaForServices(): void {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');

    const schemasForServices = this.services.map((service) =>
      this.articleService.returnSchemaFromService(service)
    );

    const text = this.renderer.createText(
      JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [...schemasForServices],
      })
    );

    this.renderer.appendChild(script, text);
    this.renderer.appendChild(this.document.head, script);
  }
}
