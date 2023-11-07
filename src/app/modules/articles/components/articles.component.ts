import { Component, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../../home/components/home.component';
import { Meta, Title } from '@angular/platform-browser';
import { CompanyData } from 'src/app/enums/company-data';
import { PageSlugs } from 'src/app/enums/page-slugs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  public article: Article = {} as Article;
  public articles: Article[] = [];
  public mediaValue800px = '(max-width: 50rem)';
  public companyData: typeof CompanyData = CompanyData;
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

    if (slug !== null) {
      this.article = this.articleService.getArticleBySlug(slug);
    }

    this.articles = this.articleService.getArticles();

    // Default values
    let content = 'Articole Importante din Construcții';
    let title = `Articole Importante din Construcții`;

    // If article.title and article.summary exist, update the content and title variables
    if (this.article.title && this.article.summary) {
      content = this.article.summary;
      title = this.article.title;
    }

    this.titleService.setTitle(title);
    this.metaService.addTags([
      //cuvinte cheie pentru motorul de cautare
      {
        name: 'keywords',
        content: this.articleService.getArticlesKeywordsString(),
      },
      {
        name: 'description',
        content: content,
      },
    ]);

    this.addSchemaForArticles();
  }

  addSchemaForArticles(): void {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');

    const schemasForArticles = this.articles.map((article) =>
      this.articleService.returnSchemaFromArticle(article)
    );

    const text = this.renderer.createText(
      JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [...schemasForArticles],
      })
    );

    this.renderer.appendChild(script, text);
    this.renderer.appendChild(this.document.head, script);
  }
}
