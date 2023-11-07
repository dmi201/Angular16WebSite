import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CompanyData } from 'src/app/enums/company-data';
import { PageSlugs } from 'src/app/enums/page-slugs';
import { PageTitles } from 'src/app/enums/page-titles';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public companyData: typeof CompanyData = CompanyData;
  public phoneNumber = CompanyData.WhatsAppPhoneNumber;
  public wppMessage = encodeURIComponent(CompanyData.WhatsAppMessage);
  public pageSlugs: typeof PageSlugs = PageSlugs;
  public pageTitles: typeof PageTitles = PageTitles;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(`Despre noi - ${this.companyData.CompanyName}`);
    this.metaService.updateTag({
      name: 'description',
      content:
        'Aceasta pagina cuprinde detalii despre firma noastra si experienta in domeniu',
    });
  }
}
