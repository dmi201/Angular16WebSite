import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { CompanyData } from 'src/app/enums/company-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public companyData: typeof CompanyData = CompanyData;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    let logoUrl = '../../../assets/logo.png';

    // Schema Markup for Organization (Company Contact Details)
    const text = this.renderer.createText(`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "${CompanyData.CompanyName}",
      "url": "${CompanyData.CompanyWebsite}",
      "logo": "${logoUrl}",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "${CompanyData.CompanyPhoneNumber}",
        "contactType": "${CompanyData.ContactType}",
        "email": "${CompanyData.CompanyEmail}"
      }],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${CompanyData.AddressLocality}",
        "addressRegion": "${CompanyData.AddressRegion}",
        "postalCode": "${CompanyData.PostalCode}",
        "streetAddress": "${CompanyData.StreetAddress}"
      },
      "sameAs": [
        "${CompanyData.Facebook}"
      ]
    }
    `);

    // "sameAs": [
    //   "${CompanyData.Facebook}",
    //   "${CompanyData.Instagram}",
    //   "${CompanyData.LinkedIn}"
    // ]

    this.renderer.appendChild(script, text);
    this.renderer.appendChild(this.document.head, script);
  }
}
