import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CompanyData } from 'src/app/enums/company-data';
import { PageSlugs } from 'src/app/enums/page-slugs';
import { PageTitles } from 'src/app/enums/page-titles';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css'],
})
export class CollaborationComponent {
  public companyData: typeof CompanyData = CompanyData;
  public phoneNumber = CompanyData.WhatsAppPhoneNumber;
  public wppMessage = encodeURIComponent(CompanyData.WhatsAppMessage);
  public pageSlugs: typeof PageSlugs = PageSlugs;
  public pageTitles: typeof PageTitles = PageTitles;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(
      `Pagina de colaborare- ${this.companyData.CompanyName}`
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'Aceasta pagina cuprinde detalii despre cui ne adresam si cum sa colaboram impreuna pentru proiecte de succes',
    });
  }
}
