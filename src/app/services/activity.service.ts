import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  activities: Activity[] = [
    {
      title: 'Projectweek 2TIN',
      domain: 'Persoonlijke ontwikkeling',
      date: '15/02/2021 - 19/02/2021',
      location: 'PXL',
      hours: 26,
      description:
        "Een week die in het teken stond van het research project. Het doel was om je eigen talenten te ontdekken, een hecht team te vormen en professioneel te leren netwerken. Dit door te werken rond de thema's persoonlijke ontwikkeling, onderzoekend handelen en ondernemend handelen.",
      imageUrl: 'assets/logo/Logo PXL Digital.png',
      obligatory: true,
    },
    {
      title: 'POP-sessie: Brein aan het werk',
      domain: 'Persoonlijke ontwikkeling',
      date: '09/03/2021',
      location: 'PXL',
      hours: 2,
      description:
        'Sessie over de gevaren van digitalisering op breinrust. Er werd ook besproken hoe je taken kan prioriteren. In de sessie werden verder tips gegeven over hoe je best je brein kan ontspannen.',
      imageUrl: 'assets/logo/Logo PXL Digital.png',
      obligatory: true,
    },
    {
      title: 'Seminarie Realdolmen: Flexbox en grid',
      domain: 'Seminaries',
      date: '23/03/2021',
      location: 'PXL',
      hours: 3,
      description:
        'Seminarie over de CSS-principes flexbox en grid. Deze principes worden gebruikt om objecten te positioneren op een pagina. Er werd eerst uitleg gegeven om vervolgens oefeningen te maken, zoals Flexbox Froggy en Grid Garden.',
      imageUrl: 'assets/logo/Realdolmen.svg',
      obligatory: true,
    },
    {
      title: 'Seminarie Brightest: ElasticSearch',
      domain: 'Seminaries',
      date: '30/03/2021',
      location: 'PXL',
      hours: 3,
      description:
        'Seminarie waar dieper ingegaan werd op de geschiedenis van ElasticSearch. Ook werd meer uitleg gegeven bij het vakjargon en werden enkele tools besproken. Tenslotte ging het ook over ElasticSearch en testing.',
      imageUrl: 'assets/logo/Brightest.png',
      obligatory: true,
    },
    {
      title: 'POP-sessie: Veerkrachtige teams',
      domain: 'Persoonlijke ontwikkeling',
      date: '30/03/2021',
      location: 'PXL',
      hours: 2,
      description:
        'Sessie over hoe je beter kan samenwerken in team. Er werden tips gegeven over hoe je de veerkracht van je team kan verhogen en waarom dit belangrijk is.',
      imageUrl: 'assets/logo/Logo PXL Digital.png',
      obligatory: true,
    },
    {
      title: 'Seminarie Realdolmen: GDPR en security',
      domain: 'Seminaries',
      date: '27/04/2021',
      location: 'PXL',
      hours: 3,
      description:
        'Seminarie over GDPR en databeveiliging. Er werd meer verteld over wat GDPR precies omvat en waarom het ontstaan is. Het ging ook over databeveiliging en hier werd besproken waar we ons tegen moeten beschermen en hoe we dit best doen.',
      imageUrl: 'assets/logo/Realdolmen.svg',
      obligatory: true,
    },
    {
      title: 'Seminarie RCCU',
      domain: 'Seminaries',
      date: '04/05/2021',
      location: 'PXL',
      hours: 3,
      description:
        "Seminarie waar meer uitleg werd gegeven over digital forensics en cybercrime. Bij digital forensics ging het vooral over hoe dit in zijn werk gaat en wat de uitdagingen zijn bij mobiele toestellen en auto's. Er werden ook verschillende thema's binnen cybercrime toegelicht zoals ransomware, informaticacriminaliteit en phishing.",
      imageUrl: 'assets/logo/RCCU.png',
      obligatory: true,
    },
    {
      title: 'Seminarie Ordina: IT security en data privacy awareness',
      domain: 'Seminaries',
      date: '11/05/2021',
      location: 'PXL',
      hours: 3,
      description:
        "Seminarie over verschillende principes binnen IT-beveiliging. Enkele thema's die behandeld werden zijn data breaches, hacken en GDPR. Een groot deel van het seminarie ging ook over de gevaren van het internet herkennen en hoe je kan voorkomen dat iemand je gegevens in handen krijgt.",
      imageUrl: 'assets/logo/Ordina.png',
      obligatory: true,
    },
    {
      title: 'Innovatieroute UI/UX',
      domain: 'Innovatie',
      date: '30/09/2021 - 21/10/2021',
      location: 'PXL',
      hours: 25,
      description:
        "Drie dagen die in het teken stonden van UI en UX met interactieve workshops over persona's, wireframing, HMW en prototyping. Voor de workshops mocht iedere groep een thema kiezen om rond te werken. Ik heb gewerkt rond de planning van De Lijn-bussen.",
      imageUrl: 'assets/logo/Innovatieroute.png',
      routerLink: ['/innovatieroute'],
      obligatory: true,
    },
    {
      title: 'POP-sessie: My Team and I',
      domain: 'Persoonlijke ontwikkeling',
      date: '13/10/2021',
      location: 'PXL',
      hours: 3,
      description:
        'Teambuildingactiviteiten met de groep van IT-Project. Het doel was je team beter leren kennen en te ontdekken welke rol je zelf speelt binnen een team.',
      imageUrl: 'assets/logo/Logo PXL Digital.png',
      obligatory: true,
    },
    {
      title: 'Seminarie Eurofins: BDD',
      domain: 'Seminaries',
      date: '10/11/2021',
      location: 'PXL',
      hours: 3,
      description:
        'Seminarie waar de technieken achter BDD (Behaviour Driven Development) werden toegelicht. Deze technieken werden ook toegepast in oefeningen.',
      imageUrl: 'assets/logo/Eurofins.png',
      obligatory: true,
    },
    {
      title: 'Seminarie Accenture: Cloud Native Development',
      domain: 'Seminaries',
      date: '01/12/2021',
      location: 'PXL',
      hours: 3,
      description:
        'Seminarie waar uitleg werd gegeven over Cloud Native Development binnen Accenture. Er werden ook real-life voorbeelden gegeven.',
      imageUrl: 'assets/logo/Accenture.webp',
      obligatory: true,
    },
    {
      title: 'Seminarie Eurofins: Docker',
      domain: 'Seminaries',
      date: '08/12/2021',
      location: 'PXL',
      hours: 3,
      description:
        'Seminarie over de werking van Docker met oefeningen. Er werd uitgelegd dat Docker werkt met containers en wat dit precies inhoudt. De oefeningen waren op basisniveau.',
      imageUrl: 'assets/logo/Eurofins.png',
      obligatory: true,
    },
    {
      title: 'Google Hash Code',
      domain: 'Innovatie',
      date: '24/02/2022',
      location: 'Online',
      hours: 25,
      description:
        'Programmeerwedstrijd georganiseerd door Google. Dit jaar ging de challenge over teams maken met bepaalde vaardigheidsniveaus.',
      imageUrl: 'assets/logo/Google Hash Code.png',
      obligatory: true,
    },
    {
      title: 'I-Talentportfolio',
      domain: 'Persoonlijke ontwikkeling',
      date: '24/04/2022 - 01/05/2022',
      location: '/',
      hours: 20,
      description:
        'De uitwerking van mijn I-Talentportfolio. Voor de creatieve uitwerking heb ik gekozen voor een website die te bezoeken is op volgende link: https://inementen.github.io/I-Talent/.',
      imageUrl: 'assets/logo/Logo PXL Digital.png',
      obligatory: true,
    },
    {
      title: 'Eigen website voor studenten vroedkunde',
      domain: 'Innovatie',
      date: '01/07/2021 - 31/08/2021',
      location: '/',
      hours: 40,
      description:
        'Website met educatieve artikels rond het thema vroedkunde van studenten voor studenten. De website is te vinden via volgende link: https://metliefdegedragen.github.io/.',
      imageUrl: 'assets/logo/Eigen Project.png',
      routerLink: ['/website-studenten-vroedkunde'],
      obligatory: false,
    },
    {
      title: 'Hackathon Sint-Oda',
      domain: 'Innovatie',
      date: '17/11/2021 - 19/11/2021',
      location: 'Sint-Oda, LUCA School of Arts, PXL',
      hours: 25,
      description:
        'In samenwerking met studenten van LUCA School of Arts een computerspel maken voor bewoners of hulpverleners van Sint-Oda. We werden per groep aan één project gekoppeld en dit moesten we op drie dagen tijd uitwerken.',
      imageUrl: 'assets/logo/Sint Oda.webp',
      routerLink: ['/hackathon-sint-oda'],
      obligatory: false,
    },
  ];

  getActivities(): Activity[] {
    return this.activities;
  }

  getObligatoryActivities(): Activity[] {
    return this.activities.filter((element) => element.obligatory);
  }

  getNotObligatoryActivities(): Activity[] {
    return this.activities.filter((element) => !element.obligatory);
  }
}
