import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CompanyData } from 'src/app/enums/company-data';
import { PageSlugs } from 'src/app/enums/page-slugs';
import { ArticleService } from 'src/app/services/article.service';

export interface Section {
  title: string;
  content: string;
  images400wWebp: string[];
  slug: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  summary: string;
  sections: Section[];
  image800wWebp: string;
  datePublished: string;
  dateCreated: string;
  dateModified: string;
  category: string;
  estimatedReadTime: string;
  keywords: string;
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content: string;
  image800wWebp: string;
  category: string;
  price: number;
  availability: string;
  priceCurrency: string;
  areaServed: string[];
  serviceAudience: string[];
  keywords: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public companyData: typeof CompanyData = CompanyData;
  public phoneNumber = CompanyData.WhatsAppPhoneNumber;
  public wppMessage = encodeURIComponent(CompanyData.WhatsAppMessage);
  public articles: Article[] = [];
  public services: Service[] = [];
  public mediaValue800px = '(max-width: 50rem)';
  public pageSlugs: typeof PageSlugs = PageSlugs;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      `Pagina principală - ${this.companyData.CompanyName}`
    );
    this.metaService.addTags([
      {
        name: 'description',
        content: 'Aceasta este pagina principală a companiei noastre.',
      },
    ]);
    this.articles = this.articleService.getArticles();
    this.services = this.articleService.getServices();
  }
}
