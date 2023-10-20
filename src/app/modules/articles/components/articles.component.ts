import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../../home/components/home.component';
import { Meta, Title } from '@angular/platform-browser';
import { CompanyData } from 'src/app/enums/company-data';
import { PageSlugs } from 'src/app/enums/page-slugs';

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
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug !== null) {
      this.article = this.articleService.getArticleBySlug(slug);
    }

    // Default values
    let content = 'Articole Importante din Construcții';
    let title = `Articole Importante din Construcții`;

    // If article.title and article.summary exist, update the content and title variables
    if (this.article.title && this.article.summary) {
      content = this.article.summary;
      title = this.article.title;
    }

    this.titleService.setTitle(title);
    this.metaService.updateTag({
      name: 'description',
      content: content,
    });

    this.articles = this.articleService.getArticles();
  }
}
