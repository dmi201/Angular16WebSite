import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CompanyData } from 'src/app/enums/company-data';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css'],
})
export class HiringComponent {
  public companyData: typeof CompanyData = CompanyData;
  public phoneNumber = CompanyData.WhatsAppPhoneNumber;
  public wppMessage = encodeURIComponent(CompanyData.WhatsAppMessage);

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(
      `Pagina de angajari - ${this.companyData.CompanyName}`
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'Aceasta pagina descrie cerintele pentru a va angaja la noi si pasii ce trebuie urmati',
    });
  }
}
