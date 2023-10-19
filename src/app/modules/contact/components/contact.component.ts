import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CompanyData } from 'src/app/enums/company-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public companyData: typeof CompanyData = CompanyData;
  public phoneNumber = CompanyData.WhatsAppPhoneNumber;
  public wppMessage = encodeURIComponent(CompanyData.WhatsAppMessage);

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(
      `Pagina de contact - ${this.companyData.CompanyName}`
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'Detalii despre cum ne puteți contacta, adresa noastră și harta locației noastre',
    });
  }
}
