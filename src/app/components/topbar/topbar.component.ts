import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { CompanyData } from 'src/app/enums/company-data';
import { PageSlugs } from 'src/app/enums/page-slugs';
import { PageTitles } from 'src/app/enums/page-titles';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  public companyData: typeof CompanyData = CompanyData;
  public phoneNumber = CompanyData.WhatsAppPhoneNumber;
  public wppMessage = encodeURIComponent(CompanyData.WhatsAppMessage);
  public pageSlugs: typeof PageSlugs = PageSlugs;
  public pageTitles: typeof PageTitles = PageTitles;

  constructor(
    private articleService: ArticleService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');

    const articleSlugs: string[] = this.articleService
      .getArticlesSlugs()
      .map((val) => `${CompanyData.CompanyWebsite}${PageSlugs.ARTICLES}` + val);
    const serviceSlugs: string[] = this.articleService
      .getServicesSlugs()
      .map((val) => `${CompanyData.CompanyWebsite}${PageSlugs.SERVICES}` + val);
    let urls: string[] = [
      `${CompanyData.CompanyWebsite}`,
      `${CompanyData.CompanyWebsite}${PageSlugs.ARTICLES}`,
      `${CompanyData.CompanyWebsite}${PageSlugs.SERVICES}`,
      `${CompanyData.CompanyWebsite}${PageSlugs.CONTACT}`,
      ...articleSlugs,
      ...serviceSlugs,
    ];

    // Schema Markup for Navigation
    const navigationElement = {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      url: urls,
    };

    const text = this.renderer.createText(JSON.stringify(navigationElement));

    this.renderer.appendChild(script, text);
    this.renderer.appendChild(this.document.head, script);
  }
}
