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
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public companyData: typeof CompanyData = CompanyData;
  public articles: Article[] = [];
  public services: Service[] = [];
  public mediaValue800px = '(max-width: 50rem)';
  public pageSlugs: typeof PageSlugs = PageSlugs;

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private metaService: Meta,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      `Pagina principală - ${this.companyData.CompanyName}`
    );
    this.metaService.addTags([
      //cuvinte cheie pentru motorul de cautare
      {
        name: 'keywords',
        content:
          'proiectare constructii civile, proiectare constructii industriale, proiectare turnuri telecomunicatii, articole constructii, proiectant București, arhitect, proiecte case, structurist, inginer structursit, DTAC, PTh, DE, DTAD, DTOE, SF, DALI, expertiza tehnica, MLPAT, verificator proiecte, expertiza tehnica judiciara, avize constructii',
      },
      {
        name: 'description',
        content: 'Aceasta este pagina principală a companiei noastre.',
      },
    ]);
    this.articles = this.articleService.getArticles();
    this.services = this.articleService.getServices();

    this.addSchemaForArticlesAndServices();
  }

  addSchemaForArticlesAndServices(): void {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');

    const schemasForArticles = this.articles.map((article) =>
      this.articleService.returnSchemaFromArticle(article)
    );
    const schemasForServices = this.services.map((service) =>
      this.articleService.returnSchemaFromService(service)
    );

    const text = this.renderer.createText(
      JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [...schemasForArticles, ...schemasForServices],
      })
    );

    this.renderer.appendChild(script, text);
    this.renderer.appendChild(this.document.head, script);
  }
}
