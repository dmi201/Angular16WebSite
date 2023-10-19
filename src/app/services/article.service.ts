import { Injectable } from '@angular/core';

import {
  Article,
  Section,
  Service,
} from '../modules/home/components/home.component';
import { CompanyData } from '../enums/company-data';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public companyData: typeof CompanyData = CompanyData;

  private dtacPthDeArtSections: Section[] = [
    {
      title: `DTAC, PTh, DE, DTAD, DTOE, SF, DALI`,
      content: `Ați auzit desigur de termeni ca DTAC, PTh, DE, DTAD, DTOE, SF, DALI. Dar
      știți ce semnifică acești acronime? Află mai multe în rândurile care
      urmează.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `DTAC`,
      content: `DTAC, sau Documentația Tehnică pentru Autorizația de Construire, este un
      set de planuri și specificații necesar pentru obținerea aprobelor din
      partea primăriei. Aceasta acoperă aspectele arhitecturale, structurale și
      ale instalațiilor unei clădiri.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `PTh`,
      content: `PTh, cunoscut și sub numele de Proiect Tehnic, este un compendiu de
      documente tehnice și planuri furnizate de profesioniști acreditați. Acesta
      descrie în detaliu soluțiile tehnice și economice ale unui proiect de
      construcție.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `DE`,
      content: `DE, sau Detalii de Execuție, constituie setul de documente tehnice
      esențiale care ghidează procesul de construcție. Acestea includ planuri,
      specificații și memorii tehnice ce oferă detalii granulare privind modul
      de realizare a construcției.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `DTAD`,
      content: `DTAD, acronim pentru Documentația Tehnică pentru Autorizația de Demolare,
      include planurile și studiile necesare pentru a obține aprobarea legală a
      demolării unei structuri. Aceasta adună informații despre structura
      clădirii și despre metodele care vor fi utilizate pentru demolare,
      asigurându-se că procesul respectă normele în vigoare.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `DTOE`,
      content: `DTOE, sau Documentația Tehnică pentru Organizarea Execuției, este un set
      de documente care descriu planul de organizare a unui șantier de
      construcții. Acesta cuprinde detaliile despre necesitățile logistice, de
      la amplasarea de barăci până la conexiunile temporare pentru utilități.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `SF`,
      content: `  Studiul de Fezabilitate, adesea prescurtat ca SF, este un instrument
      esențial în planificarea unui nou proiect. Acesta evaluează dacă proiectul
      este atât tehnic, cât și financiar viabil, luând în considerare variabile
      precum costuri, timp, disponibilitatea resurselor și impactul asupra
      mediului.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `DALI`,
      content: `DALI, sau Documentația de Avizare a Lucrărilor de Intervenție, reprezintă
      un set de documente necesare pentru a obține toate avizele și
      autorizațiile legale înainte de demararea oricărui proiect de construcție
      sau renovare. Aceasta asigură că toate aspectele proiectului sunt în
      concordanță cu reglementările și normativele în vigoare.`,
      images400wWebp: [],
      slug: '',
    },
  ];

  private dtacPthDeArt: Article = {
    id: 1,
    slug: 'dtac-pth-de-dtad-dtoe-sf-dali',
    title:
      'Descoperă sensul termenilor tehnici în construcții: DTAC, PTh, DE, DTAD, DTOE, SF, DALI',
    summary:
      'Acest articol explică termenii tehnici utilizati in construcții, inclusiv DTAC, PTh, DE, DTAD, DTOE, SF, DALI, și alții.',
    sections: this.dtacPthDeArtSections,
    image800wWebp: '../../assets/dtac-pth-de-dtad-dtoe-sf-dali-800px.webp',
    datePublished: '21/09/2023',
    dateCreated: '21/09/2023',
    dateModified: '13/10/2023',
    category: 'Articole din constructii',
    estimatedReadTime: '6 minute',
    keywords: 'proiect, faza, DTAC, PTh, DE, DTAD, DTOE, SF, DALI',
  };

  private verifArtSections: Section[] = [
    {
      title: `Cine este Verificatorul de Proiecte?`,
      content: `Un verificator de proiecte joacă un rol crucial în industria construcțiilor, având responsabilitatea de a asigura că planurile și specificațiile unui proiect respectă normele tehnice și reglementările legale în vigoare. Experiența și competențele acestui profesionist garantează siguranța și durabilitatea construcțiilor, de la proiectare până la finalizare și utilizare.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Responsabilitățile Verificatorului de Proiecte sau Verficatorului Atestat sau Verificatorului MLPAT`,
      content: ` Un verificator de proiecte in Constructii se ocupă de analiza atentă a documentațiilor tehnice, evaluându-le conformitatea cu standardele de calitate și siguranță. Între sarcinile sale se numără supravegherea condițiilor specifice de locație, verificarea detaliilor tehnice și menținerea unui registru actualizat al proiectelor evaluate. De asemenea, acesta trebuie să fie imparțial, nu are voie să verifice proiecte la care a contribuit și, în caz de dezacord cu proiectantul, un expert tehnic independent poate fi solicitat pentru rezolvarea disputelor.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Procesul de Verificare Tehnică`,
      content: ` Verificatorii de proiecte atestați MLPAT evaluează documentația tehnică în funcție de categoriile de importanță ale construcției, asigurându-se că proiectanții au specificat cerințele corecte. Toate construcțiile, cu excepția unora mici și provizorii, necesită verificare tehnică, garantând astfel respectarea cerințelor de „rezistență și stabilitate” și altor normative relevante.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Importanța Verificatorului de Proiecte`,
      content: `Angajarea unui verificator de proiecte atestat nu este doar o cerință legală, ci și un pas esențial pentru asigurarea calității și siguranței în construcții. Expertiza și vigilența verificatorului contribuie la identificarea și rezolvarea potențialelor probleme înainte de începerea construcției, economisind timp, resurse și evitând complicații.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Exigentele de verificare pentru rezistență A1, A2, pentru arhitectură B, C, D, E, F și pentru instalații Ie, It, Is, Ig`,
      content: ` Verificatorii de proiecte MLPAT se impart in functie de exigentele de verificarea sau mai simplu de specializarea lor in verificatori pentru rezistență A1, A2, pentru arhitectură B, C, D, E, F și pentru instalații Ie, It, Is, Ig.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Unde Găsiți un Verificator de Proiecte Atestat MLPAT in 2023`,
      content: `Lista actualizată a verificatorilor de proiecte atestați, precum și cei pentru care practica a fost suspendată, este disponibilă pe site-ul Ministerului Lucrărilor Publice. Structurată pe județe și domenii de atestare, lista este un instrument util pentru a identifica profesioniștii calificați pentru evaluarea proiectelor de construcție.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: ``,
      content: `O găsiți accesând link-ul: 
      <a href="https://www.mdlpa.ro/pages/registrepublice" target="_blank">
          Verificatori de Proiecte Atestați
      </a>`,
      images400wWebp: [],
      slug: '',
    },
  ];

  private verifArt: Article = {
    id: 2,
    slug: 'verificator-proiecte-atestat-mlpat',
    title: 'Ce rol are un Verificator de Proiecte in 2023?',
    summary:
      'Descoperă rolul și importanța unui verificator de proiecte atestat în domeniul construcțiilor, responsabilitățile și domeniile în care intervine.',
    sections: this.verifArtSections,
    image800wWebp: '../../assets/verificator-proiecte-800px.webp',
    datePublished: '21/09/2023',
    dateCreated: '21/09/2023',
    dateModified: '13/10/2023',
    category: 'Articole din constructii',
    estimatedReadTime: '9 minute',
    keywords:
      'Verificator de Proiecte, Verificator de Proiecte atestat, Verificator de Proiecte MLPAT, Verificator de Proiecte atestat MLPAT, rezistență A1, A2',
  };

  private expArtSections: Section[] = [
    {
      title: `Expertiza Tehnica în Constructii sau Expertiza Tehnica MLPAT`,
      content: `Expertiza tehnică în domeniul construcțiilor este un ansamblu de evaluări
      și recomandări făcute de un expert acreditat. Scopul acestui proces este
      de a analiza starea tehnică a unei construcții existente, de a evalua
      riscurile seismice și de a oferi sfaturi pentru asigurarea integrității
      structurale. `,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Când este Necessară Expertiza Tehnică in Constructii? `,
      content: `Conform reglementărilor
      legale, majoritatea lucrărilor efectuate pe clădiri existente necesită un
      raport de expertiză tehnică, care trebuie elaborat de un expert acreditat.
      Excepții sunt lucrările minore, cum ar fi retușuri estetice sau schimbarea
      ferestrelor. Procesul implică nu doar proiectarea și execuția lucrărilor,
      dar și obținerea autorizațiilor legale necesare. Toate aceste intervenții
      trebuie consemnate într-un document tehnic oficial.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Ce inseamna MLPAT?`,
      content: `MLPAT este acronimul de la fostul Minister al Lucrărilor Publice și Achizițiilor, actualul MDLPA (Ministerul Dezvoltării, Lucrărilor Publice și Administrației). 
      Acesta este site-ul oficial: <a href="https://www.mdlpa.ro/" target="_blank">https://www.mdlpa.ro/</a>`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Unde pot gasi lista cu toti Expertii Tehnici in Constructii ( MLPAT) din Romania?`,
      content: `Mai jos puteți găsi lista cu toți Experții Tehnici în Construcții avizați MLPAT din România
      <a href="https://www.mdlpa.ro/userfiles/experti.xlsx" target="_blank">https://www.mdlpa.ro/userfiles/experti.xlsx</a>.`,
      images400wWebp: [],
      slug: '',
    },

    {
      title: `Ce inseamna Expert Tehnic A1, A2, Af, A4, B2, B9 sau Is, etc?`,
      content: `Expertii tehnici sunt impartiti in functie de competente in specialități pe diverse categorii A1, A2, Af, A4, B2, B9 sau Is, etc.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: ``,
      content: `
      De exemplu daca doriti sa expertizati tehnic o locuinta in vedere mansardarii, veti avea nevoie de un expert tehnic ce are stampila de A1. In cazul in care constructia are elemente metalice, veti avea nevoie de expert tehnic ce are si A1 si A2. Daca expertizati o fundatie speciala sau in general structuri geotehnice( metrou, pasaje subterane, subslouri de mall, etc) veti avea nevoie de un Expert Tehnic Af. Daca expertizati instalatii sau sisteme de canalizare, veti avea nevoie de alte exigente Is sau B9.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Link-ul cu toate competențele experților tehnici  în domenii de construcții/specialități`,
      content: `Mai jos gasiti un link cu toate competențele experților tehnici  în domenii de construcții/specialități de instalații/activități specifice în funcție de domeniile de atestare tehnico-profesională și cerințele fundamentale prevăzute de Legea nr.10/1995
<a href="https://www.mdlpa.ro/pages/competenteexperti" target="_blank">https://www.mdlpa.ro/pages/competenteexperti</a>`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Care sunt cele mai  comune tipuri de Expertize Tehnice?`,
      content: ``,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Reconfigurarea Apartamentului`,
      content: ` Dacă doriți să
      îndepărtați sau să adăugați pereți într-un apartament, veți avea nevoie de
      o evaluare tehnică și de un plan de acțiune. `,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Modificări Structurale ale
      unei Case`,
      content: `Fie că e vorba de adăugarea unui etaj sau de extinderea unei
      case, este vital să obțineți un raport de expertiză tehnică care să
      confirme integritatea structurii. `,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Construcții Apropiate de Clădiri
      Existente`,
      content: `În cazul construirii în imediata vecinătate a unei clădiri deja
      existente, este obligatoriu să se efectueze o expertiză tehnică. Aceasta
      va evalua riscul asupra fundației și a stabilității clădirilor adiacente.
      Pași pentru Efectuarea unei Expertize Tehnice Contactarea unui Arhitect:
      Este primul pas în procesul de obținere a autorizațiilor necesare.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Obținerea Certificatului de Urbanism`,
      content: `Acesta se obține de la autoritățile
      locale și este primul pas spre autorizația de construire. Consultarea
      Expertului Tehnic: Este necesară elaborarea unui raport tehnic de către un
      expert autorizat. `,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Colectarea Avizelor`,
      content: `Unele proiecte pot necesita avizul
      Inspectoratului Teritorial în Construcții sau al altor organe de control.
      Obținerea Autorizației de Construire: Este ultimul pas și cel care permite
      începerea lucrărilor. `,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Construcții Apropiate de Clădiri
      Existente`,
      content: `În cazul construirii în imediata vecinătate a unei clădiri deja
      existente, este obligatoriu să se efectueze o expertiză tehnică. Aceasta
      va evalua riscul asupra fundației și a stabilității clădirilor adiacente.
      Pași pentru Efectuarea unei Expertize Tehnice Contactarea unui Arhitect:
      Este primul pas în procesul de obținere a autorizațiilor necesare.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Expertiza Tehnica Judiciara reprezinta acelasi lucru cu Expertiza Tehnica in Constructii? Categoric NU!`,
      content: `Vom vorbi despre asta intr-un articol separat!`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Concluzie`,
      content: `Prin urmare, expertiza tehnică în construcții este o
      etapă esențială în dezvoltarea sau modificarea unei clădiri. Este
      recomandat să se lucreze cu profesioniști acreditați pentru a asigura
      succesul proiectului.`,
      images400wWebp: [],
      slug: '',
    },
  ];

  private expArt: Article = {
    id: 3,
    slug: 'expertiza-tehnica',
    title: 'Ce reprezinta Expertiza Tehnica în Constructii ( MLPAT)?',
    summary:
      'Acest articol oferă o imagine de ansamblu asupra expertizei tehnice în domeniul construcțiilor și explicații detaliate despre când și de ce este necesară.',
    sections: this.expArtSections,
    image800wWebp: '../../assets/expertiza-tehnica-800px.webp',
    datePublished: '23/09/2023',
    dateCreated: '23/09/2023',
    dateModified: '13/10/2023',
    category: 'Articole din constructii',
    estimatedReadTime: '9 minute',
    keywords:
      'Expertiza Tehnica Judiciara, Expertiza Tehnica în Constructii, Expert Tehnic,  Expert Tehnic MLPAT, Expert Tehnic A1, A2, Af, A4, B2, B9 sau Is',
  };

  private expJudvsTehArtSections: Section[] = [
    {
      title: `Expertiza Tehnică în Construcții sau Expertiza Tehnică MLPAT`,
      content: `Expertiza tehnică în domeniul construcțiilor este un ansamblu de evaluări
      și recomandări făcute de un expert acreditat. Scopul acestui proces este
      de a analiza starea tehnică a unei construcții existente, de a evalua
      riscurile seismice și de a oferi sfaturi pentru asigurarea integrității
      structurale. `,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Când e Necessară Expertiza Tehnică în Construcții?`,
      content: `Conform reglementărilor
      legale, majoritatea lucrărilor efectuate pe clădiri existente necesită un
      raport de expertiză tehnică, care trebuie elaborat de un expert acreditat.
      Excepții sunt lucrările minore, cum ar fi retușuri estetice sau schimbarea
      ferestrelor. Procesul implică nu doar proiectarea și execuția lucrărilor,
      dar și obținerea autorizațiilor legale necesare. Toate aceste intervenții
      trebuie consemnate într-un document tehnic oficial.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Expertiza Tehnică Judiciară`,
      content: `Expertiza tehnică judiciară este realizată pentru a ajuta în procesele legale. Este solicitată de instanțe sau părțile implicate în litigii pentru a clarifica aspecte tehnice legate de un caz. Este utilizată în context juridic și este guvernată de normele legale și procedurale specifice domeniului. Rezultatele expertizei sunt folosite ca probe în instanță și pot influența verdictul.`,
      images400wWebp: [],
      slug: '',
    },
    {
      title: `Diferențele între Expertiza Tehnică Judiciară și Expertiza Tehnică MLPAT`,
      content: `Expertiza tehnică judiciară este centrată pe rezolvarea disputelor legale și pe furnizarea de probe în instanță, în timp ce expertiza tehnică în construcții MLPAT se concentrează pe asigurarea calității și securității construcțiilor conform standardelor și normelor tehnice. Expertiza judiciară este adesea mai complexă și implică analize detaliate pentru a respecta standardele legale și procedurale stricte, în timp ce expertiza tehnică MLPAT este mai orientată către aplicarea practică și imediată a regulilor și normelor de construcție.`,
      images400wWebp: [],
      slug: '',
    },
  ];

  private expJudvsTehArt: Article = {
    id: 4,
    slug: 'expertiza-judiciara-vs-expertiza-tehnica',
    title:
      'Care este diferenta dintre Expertiza Tehnica Judiciara si Expertiza Tehnica în Constructii (MLPAT)?',
    summary:
      'Acest articol oferă o imagine de ansamblu asupra diferentelor dintre cele 2 tipuri de expertize tehnice în domeniul construcțiilor și explică în detaliu când și de ce este necesară.',
    sections: this.expJudvsTehArtSections,
    image800wWebp: '../../assets/expertiza-tehnica-judiciara-800px.webp',
    datePublished: '1/10/2023',
    dateCreated: '1/10/2023',
    dateModified: '13/10/2023',
    category: 'Articole din constructii',
    estimatedReadTime: '8 minute',
    keywords:
      'Expertiza Tehnica Judiciara, Expertiza Tehnica în Constructii, Expert Tehnic,  Expert Tehnic MLPAT, Expert Tehnic A1, A2, Af, A4, B2, B9 sau Is',
  };

  private articles: Article[] = [
    this.dtacPthDeArt,
    this.verifArt,
    this.expArt,
    this.expJudvsTehArt,
  ];

  private services: Service[] = [
    {
      id: 1,
      slug: 'proiectare-constructii-civile',
      title: 'Proiectare construcții civile',
      summary:
        'Oferim servicii de proiectare pentru construcții civile, asigurând planuri detaliate și soluții inovatoare pentru a transforma viziunea ta în realitate. Echipa noastră de experți colaborează strâns cu clienții pentru a crea designuri personalizate care îndeplinesc cerințele specifice ale fiecărui proiect.',
      content: ` 
    <section>

  <section>
    <h2>Crearea unui cămin perfect prin serviciile noastre de proiectare pentru construcții civile</h2>
    <p>
    Specialiștii noștri transformă fiecare spațiu într-un mediu care reflectă stilul și necesitățile tale, asigurând funcționalitate și estetică în fiecare colț al clădirii.
    </p>
  </section>

  <section>
  <h2>Ce sunt construcțiile civile în România?</h2>
  <p>
    Construcțiile civile în România acoperă o gamă largă de structuri și edificii proiectate pentru utilizare privată și publică. Acestea includ blocuri de locuințe, case unifamiliale, vile, edificii pentru birouri, centre comerciale și alte structuri care servesc nevoile societății. Caracterizate printr-o diversitate arhitecturală și funcțională, construcțiile civile combină estetica cu tehnologia modernă pentru a crea spații sigure, confortabile și durabile.
  </p>
</section>

<section>
  <h2>Structuri și Materiale Predominante</h2>
  <p>
    În România, construcțiile civile folosesc o varietate de structuri, inclusiv cadre de beton armat, structuri metalice și combinații de materiale pentru a asigura rezistența și stabilitatea edificiilor. Betonul armat rămâne un material popular, datorită rezistenței sale structurale și versatilității în design. Structurile metalice, pe de altă parte, sunt apreciate pentru durabilitate, rezistență la foc și capacitatea de a sprijini construcții înalte.
  </p>
</section>
  `,
      image800wWebp: '../../assets/rezidential-800px.webp',
      category: 'Servicii',
      price: 300,
      availability: 'Disponibil',
      priceCurrency: 'Euro',
      areaServed: ['Bucuresti', 'Ilfov', 'Romania', 'Europa'],
      serviceAudience: [
        'proiectant',
        'arhitect',
        'structurist',
        'proiectant instalatii',
        'dezvoltator imobiliar',
        'investitor',
      ],
    },
    {
      id: 2,
      slug: 'proiectare-constructii-industriale',
      title: 'Proiectare constructii industriale',
      summary:
        'Suntem specializați în proiectarea construcțiilor industriale, oferind soluții robuste și eficiente pentru instalații de producție, depozite și alte facilități industriale. Ne concentrăm pe crearea de spații care optimizează producția și îmbunătățesc siguranța angajaților.',
      content: ` 
    <section>


  <section>
    <h2>Optimizare și inovație în proiectarea construcțiilor industriale</h2>
    <p>
    Designurile noastre se focusează pe eficiență, durabilitate și siguranță, integrând cele mai recente tehnologii pentru a maximiza productivitatea și a minimiza costurile operaționale.
    </p>
  </section>
  `,
      image800wWebp: '../../assets/industrial-800px.webp',
      category: 'Servicii',
      price: 5,
      availability: 'Disponibil',
      priceCurrency: 'Euro',
      areaServed: ['Bucuresti', 'Ilfov', 'Romania', 'Europa'],
      serviceAudience: ['arhitect', 'structurist', 'investitor'],
    },
    {
      id: 3,
      slug: 'proiectare-turnuri-telecomunicatii',
      title: 'Proiectare turnuri telecomunicații',
      summary:
        'Proiectăm turnuri de telecomunicații care sprijină tehnologiile emergente, garantând transmisii de date sigure și eficiente. Fiecare proiect este adaptat pentru a îndeplini specificațiile exacte și cerințele de performanță necesare în industria telecomunicațiilor.',
      content: ` 
    <section>


  <section>
    <h2>Conectivitate și performanță înalte prin proiectare de calitate pentru turnuri de telecomunicații</h2>
    <p>
    Îmbinând inovația cu standardele stricte de securitate, dezvoltăm infrastructuri de telecomunicații care susțin conectivitatea mondială și avansarea tehnologică."
    </p>
  </section>
  `,
      image800wWebp: '../../assets/telecom-800px.webp',
      category: 'Servicii',
      price: 700,
      availability: 'Disponibil',
      priceCurrency: 'Euro',
      areaServed: ['Romania', 'Europa'],
      serviceAudience: [
        'ingineri telecom',
        'ingineri structuri',
        'arhitecti',
        'ingineri instalatii',
        'companii telecom',
        'companii telecomunicatii',
      ],
    },
  ];

  constructor() {}

  getArticles() {
    return this.articles;
  }

  getArticlesSlugs() {
    return this.articles.map((article) => article.slug);
  }

  getArticleById(id: number): Article {
    return this.articles.find((article) => article.id === id)!;
  }

  getArticleBySlug(slug: string): Article {
    return this.articles.find((article) => article.slug === slug)!;
  }

  getServices() {
    return this.services;
  }

  getServicesSlugs() {
    return this.services.map((service) => service.slug);
  }

  getServiceById(id: number): Service {
    return this.services.find((service) => service.id === id)!;
  }

  getServiceBySlug(slug: string): Service {
    return this.services.find((service) => service.slug === slug)!;
  }

  // returnSchemaFromArticle(article: Article) {
  //   let schema = `{
  //     "@context": "https://schema.org",
  //     "@type": "TechArticle",
  //     "headline": "${article.title}",
  //     "alternativeHeadline": "${article.summary}",
  //     "image": "${article.image800wWebp}",
  //     "author": "${CompanyData.CompanyOwner}",
  //     "editor": "${CompanyData.CompanyOwner}",
  //     "genre": "${article.category}",
  //     "keywords": "${article.keywords}",
  //     "wordcount": "${article.content.split(' ').length}",
  //     "publisher": "${CompanyData.CompanyName}",
  //     "url": "${CompanyData.CompanyWebsite}/articole/${article.slug}",
  //     "datePublished": "${article.datePublished}",
  //     "dateCreated": "${article.datePublished}",
  //     "dateModified": "${article.datePublished}",
  //     "description": "${article.summary}",
  //     "articleBody": ${JSON.stringify(article.content)}
  //   }`;

  //   return JSON.parse(schema); // This will parse the JSON string and return a JSON object
  // }
  returnSchemaFromArticle(article: Article) {
    const articleBody = article.sections
      .map((section) => section.content)
      .join(' ');
    const wordCount = articleBody.split(' ').length;
    let schema = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: article.title,
      alternativeHeadline: article.summary,
      image: article.image800wWebp,
      author: CompanyData.CompanyOwner,
      editor: CompanyData.CompanyOwner,
      genre: article.category,
      keywords: article.keywords,
      wordcount: wordCount,
      publisher: CompanyData.CompanyName,
      url: `${CompanyData.CompanyWebsite}/articole/${article.slug}`,
      datePublished: article.datePublished,
      dateCreated: article.datePublished,
      dateModified: article.datePublished,
      description: article.summary,
      articleBody: articleBody,
    };

    return schema;
  }

  returnSchemaFromService(service: Service) {
    function escape(input: string): string {
      return input.replace(/"/g, '\\"');
    }

    let schema = `{ 
      "@context": "https://schema.org/", 
      "@type": "Service",
      "serviceType": "${escape(service.category)}",
      "provider": {
        "@type": "Organization",
        "name": "${escape(CompanyData.CompanyName)}"
      },
      "name": "${escape(service.title)}",
      "image": "${escape(service.image800wWebp)}",
      "description": "${escape(service.summary)}",
      "serviceAudience": "${service.serviceAudience.join(', ')}", 
      "offers": {
        "@type": "Offer",
        "price": "${service.price}",
        "availability": "${escape(service.availability)}",
        "priceCurrency": "${escape(service.priceCurrency)}",
        "areaServed": "${service.areaServed.join(', ')}"
        
      }
    }`;

    return JSON.parse(schema);
  }
}
