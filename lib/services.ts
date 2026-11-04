import { AREA } from './site'

export interface FaqItem {
  question: string
  answer: string
}

export interface ServiceSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export interface ServicePage {
  slug: string
  name: string
  h1: string
  metaTitle: string
  metaDescription: string
  lead: string
  cardDescription: string
  cardFeatures: string[]
  sections: ServiceSection[]
  scope: string[]
  priceFactors: string[]
  faq: FaqItem[]
  related: string[]
}

export const PROCESS_STEPS = [
  {
    title: 'Kontakt i oględziny',
    description:
      'Rozmawiamy o Twoich potrzebach, a w razie potrzeby przyjeżdżamy na miejsce, aby ocenić zakres prac i stan istniejącej instalacji.',
  },
  {
    title: 'Wycena i harmonogram',
    description:
      'Otrzymujesz jasną wycenę z podziałem na robociznę i materiały oraz termin realizacji dopasowany do etapu budowy lub remontu.',
  },
  {
    title: 'Wykonanie prac',
    description:
      'Montujemy instalację zgodnie z obowiązującymi normami, na certyfikowanych materiałach, dbając o porządek na budowie.',
  },
  {
    title: 'Pomiary i protokoły',
    description:
      'Po zakończeniu prac wykonujemy pomiary elektryczne i przekazujemy protokoły potwierdzające bezpieczeństwo instalacji.',
  },
  {
    title: 'Odbiór i gwarancja',
    description:
      'Wspólnie sprawdzamy wykonane prace, opisujemy obwody w rozdzielnicy i wystawiamy pisemną gwarancję.',
  },
]

export const services: ServicePage[] = [
  {
    slug: 'instalacje-elektryczne',
    name: 'Instalacje elektryczne',
    h1: 'Instalacje elektryczne – montaż i wykonanie w Warszawie',
    metaTitle: 'Instalacje elektryczne Warszawa – montaż i wykonanie',
    metaDescription:
      'Wykonujemy instalacje elektryczne w domach, mieszkaniach i lokalach firmowych. Montaż od podstaw, rozdzielnica, pomiary i protokoły. Bezpłatna wycena.',
    lead: `Projektujemy i wykonujemy kompletne instalacje elektryczne dla domów, mieszkań i firm – od przewodów i osprzętu, przez rozdzielnicę, po pomiary odbiorcze. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Kompleksowe wykonanie instalacji elektrycznych w nowych i remontowanych obiektach, zgodnie z normami.',
    cardFeatures: [
      'Montaż instalacji od podstaw',
      'Rozdzielnice i zabezpieczenia',
      'Pomiary i protokoły odbiorowe',
    ],
    sections: [
      {
        heading: 'Na czym polega wykonanie instalacji elektrycznej',
        paragraphs: [
          'Instalacja elektryczna to nie tylko gniazdka i włączniki. To przemyślany układ obwodów, przewodów, zabezpieczeń i uziemienia, który ma zasilać wszystkie odbiorniki w budynku i jednocześnie chronić ludzi przed porażeniem oraz budynek przed pożarem.',
          'Prace zaczynamy od ustalenia, ile obwodów i punktów odbiorczych potrzebujesz, jakie urządzenia będą zasilane (płyta indukcyjna, pompa ciepła, ładowarka samochodu elektrycznego) i jaka moc przyłączeniowa będzie wymagana. Na tej podstawie dobieramy przekroje przewodów, zabezpieczenia i rozmieszczenie punktów.',
        ],
      },
      {
        heading: 'Zgodność z normami i bezpieczeństwo',
        paragraphs: [
          'Instalacje wykonujemy zgodnie z przepisami Prawa budowlanego oraz normami z serii PN-HD 60364 dotyczącymi instalacji elektrycznych niskiego napięcia. Stosujemy przewody miedziane, wyłączniki różnicowoprądowe i ochronę przeciwprzepięciową tam, gdzie jest to uzasadnione.',
        ],
        bullets: [
          'Obwody oddzielone dla gniazd, oświetlenia i odbiorników dużej mocy',
          'Przewód ochronny w każdym obwodzie',
          'Opisana rozdzielnica ze schematem obwodów',
          'Pomiary odbiorcze i protokoły w komplecie dokumentów',
        ],
      },
    ],
    scope: [
      'Instalacje gniazdkowe i oświetleniowe',
      'Obwody siłowe 400 V (płyta indukcyjna, piekarnik, pompa ciepła)',
      'Montaż rozdzielnic i zabezpieczeń',
      'Uziemienie i połączenia wyrównawcze',
      'Ochrona przeciwprzepięciowa',
      'Instalacje oświetlenia wewnętrznego i zewnętrznego',
      'Przygotowanie instalacji pod fotowoltaikę i ładowarkę EV',
      'Pomiary i dokumentacja powykonawcza',
    ],
    priceFactors: [
      'powierzchnia obiektu i liczba punktów elektrycznych (gniazd, wyłączników, punktów świetlnych)',
      'rodzaj budynku i technologia ścian (bruzdowanie, kucie, prowadzenie w pustakach lub płytach g-k)',
      'wybrany osprzęt i producent materiałów',
      'zakres rozdzielnicy – liczba obwodów, ochrona przeciwprzepięciowa, automatyka',
      'termin realizacji i etap budowy lub remontu',
    ],
    faq: [
      {
        question: 'Ile kosztuje wykonanie instalacji elektrycznej?',
        answer:
          'Koszt zależy głównie od liczby punktów elektrycznych, rodzaju budynku, wybranego osprzętu i zakresu rozdzielnicy. Dlatego wycenę przygotowujemy indywidualnie po rozmowie lub oględzinach – otrzymujesz podział na robociznę i materiały.',
      },
      {
        question: 'Na jakim etapie budowy należy zamówić instalację elektryczną?',
        answer:
          'Najlepiej zaplanować ją jeszcze przed tynkowaniem i zabudową płyt gipsowo-kartonowych. Wtedy rozmieszczenie punktów można dopasować do planu mebli i zabudowy, a przewody poprowadzić bez zbędnego kucia.',
      },
      {
        question: 'Czy po wykonaniu instalacji dostanę protokoły z pomiarów?',
        answer:
          'Tak. Po zakończeniu prac wykonujemy pomiary elektryczne i przekazujemy protokoły, które potwierdzają skuteczność ochrony przeciwporażeniowej i stan izolacji.',
      },
    ],
    related: [
      'instalacje-elektryczne-w-domu',
      'instalacje-elektryczne-w-mieszkaniu',
      'rozdzielnice-elektryczne',
      'pomiary-elektryczne-odbiorowe',
    ],
  },
  {
    slug: 'instalacje-elektryczne-w-domu',
    name: 'Instalacje w domach jednorodzinnych',
    h1: 'Instalacja elektryczna w domu jednorodzinnym',
    metaTitle: 'Instalacja elektryczna w domu – wykonanie Warszawa',
    metaDescription:
      'Instalacja elektryczna w nowym domu jednorodzinnym: uziom, przewody, rozdzielnica, oświetlenie, przygotowanie pod PV i wallbox. Pomiary i gwarancja.',
    lead: `Wykonujemy instalacje elektryczne w budowanych i remontowanych domach jednorodzinnych – od uziomu w fundamentach po montaż osprzętu w stanie wykończeniowym. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Instalacja elektryczna w nowym domu – od uziomu i rozdzielnicy po oświetlenie i przygotowanie pod pompę ciepła.',
    cardFeatures: [
      'Uziom i instalacja odgromowa',
      'Rozdzielnica główna i obwody',
      'Przygotowanie pod PV i wallbox',
    ],
    sections: [
      {
        heading: 'Instalacja elektryczna w domu krok po kroku',
        paragraphs: [
          'Instalacja w domu jednorodzinnym jest realizowana etapami, równolegle do postępu budowy. Dobre zaplanowanie każdego z nich pozwala uniknąć kucia gotowych ścian i kosztownych poprawek.',
        ],
        bullets: [
          'Stan zerowy – uziom fundamentowy i przepusty pod przyłącze',
          'Stan surowy – peszle, puszki, przewody i prowadzenie tras do rozdzielnicy',
          'Stan wykończeniowy – montaż osprzętu, opraw oświetleniowych i rozdzielnicy',
          'Pomiary, protokoły i uruchomienie instalacji',
        ],
      },
      {
        heading: 'Plan na lata – nowoczesne odbiorniki',
        paragraphs: [
          'Współczesny dom to nie tylko oświetlenie i gniazdka. Pompa ciepła, płyta indukcyjna, klimatyzacja, rekuperacja, a coraz częściej także instalacja fotowoltaiczna i ładowarka samochodu elektrycznego wymagają odpowiednio zaplanowanych obwodów i rezerwy mocy.',
          'Już na etapie projektu ustalamy, jakie urządzenia będziesz podłączać teraz, a jakie za kilka lat – dzięki temu przygotowujemy rozdzielnicę z zapasem miejsca i trasy kablowe, które nie będą wymagały przebudowy.',
        ],
      },
    ],
    scope: [
      'Uziom fundamentowy i połączenia wyrównawcze',
      'Złącze, wewnętrzna linia zasilająca i rozdzielnica główna',
      'Okablowanie obwodów gniazd, oświetlenia i odbiorników siłowych',
      'Instalacje w garażu, kotłowni i na zewnątrz budynku',
      'Oświetlenie zewnętrzne i ogrodowe',
      'Przygotowanie pod pompę ciepła, rekuperację i klimatyzację',
      'Przygotowanie pod fotowoltaikę i ładowarkę EV',
      'Pomiary odbiorcze i dokumentacja',
    ],
    priceFactors: [
      'powierzchnia domu, liczba kondygnacji i liczba pomieszczeń',
      'liczba obwodów i punktów elektrycznych',
      'wyposażenie: pompa ciepła, klimatyzacja, rekuperacja, PV, wallbox',
      'zakres rozdzielnicy i ochrony przeciwprzepięciowej',
      'standard osprzętu i opraw oświetleniowych',
    ],
    faq: [
      {
        question: 'Ile trwa wykonanie instalacji elektrycznej w domu?',
        answer:
          'W domu jednorodzinnym instalacja zajmuje zwykle od jednego do dwóch tygodni, przy czym prace są rozłożone na etapy zgodne z postępem budowy. Dokładny harmonogram ustalamy po wycenie.',
      },
      {
        question: 'Czy trzeba mieć projekt instalacji elektrycznej?',
        answer:
          'Dla nowego domu instalacja elektryczna jest częścią projektu budowlanego. Pomagamy dopasować jej rozmieszczenie do Twoich potrzeb i zapewniamy wykonanie zgodne z dokumentacją oraz zasadami sztuki.',
      },
      {
        question: 'Czy możecie przygotować instalację pod fotowoltaikę i wallbox?',
        answer:
          'Tak. Przewidujemy odpowiednie miejsce w rozdzielnicy, dedykowane obwody i trasy kablowe, aby późniejszy montaż falownika czy ładowarki nie wymagał przebudowy instalacji.',
      },
    ],
    related: [
      'instalacje-elektryczne',
      'rozdzielnice-elektryczne',
      'ladowarki-samochodow-elektrycznych',
      'podlaczenia-urzadzen',
    ],
  },
  {
    slug: 'instalacje-elektryczne-w-mieszkaniu',
    name: 'Instalacje w mieszkaniach',
    h1: 'Instalacja elektryczna w mieszkaniu',
    metaTitle: 'Instalacja elektryczna w mieszkaniu – Warszawa',
    metaDescription:
      'Wykonanie i wymiana instalacji elektrycznej w mieszkaniu: rynek pierwotny i wtórny, nowa rozdzielnica, pomiary, protokoły. Bezpłatna wycena.',
    lead: `Wykonujemy nowe instalacje w mieszkaniach po zakupie od dewelopera oraz kompleksowo wymieniamy stare instalacje podczas remontu. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Nowa instalacja i wymiana w mieszkaniu – w bloku i kamienicy, w stanie deweloperskim lub podczas remontu.',
    cardFeatures: [
      'Instalacja w stanie deweloperskim',
      'Wymiana przy remoncie mieszkania',
      'Nowa rozdzielnica mieszkaniowa',
    ],
    sections: [
      {
        heading: 'Mieszkanie z rynku pierwotnego i wtórnego',
        paragraphs: [
          'W mieszkaniach kupowanych od dewelopera instalacja jest wykonana w standardzie podstawowym. Często opłaca się ją rozbudować: dodać gniazda w kuchni, przygotować zasilanie pod zabudowę i płytę indukcyjną, uzupełnić punkty oświetleniowe i dopasować rozmieszczenie do projektu wnętrza.',
          'W mieszkaniach z rynku wtórnego instalacja bywa przestarzała. W starszych blokach i kamienicach spotyka się przewody aluminiowe i brak przewodu ochronnego, a stare zabezpieczenia topikowe nie dają dziś odpowiedniej ochrony. W takim przypadku wymiana instalacji podczas remontu jest najrozsądniejszym rozwiązaniem.',
        ],
      },
      {
        heading: 'Co obejmuje wymiana instalacji w mieszkaniu',
        paragraphs: [
          'Prace obejmują instalację w obrębie mieszkania, czyli od rozdzielnicy mieszkaniowej. Elementy do licznika, takie jak wewnętrzna linia zasilająca i układ pomiarowy, należą do zarządcy budynku lub operatora sieci.',
        ],
        bullets: [
          'Inwentaryzacja istniejącej instalacji i ustalenie potrzeb',
          'Demontaż starych przewodów i osprzętu',
          'Wykonanie bruzd i montaż nowych przewodów miedzianych',
          'Nowa rozdzielnica z wyłącznikami różnicowoprądowymi',
          'Pomiary i protokół odbiorowy',
        ],
      },
    ],
    scope: [
      'Instalacja gniazd i oświetlenia w każdym pomieszczeniu',
      'Zasilanie płyty indukcyjnej i piekarnika',
      'Osobne obwody dla kuchni, łazienki i sprzętu AGD',
      'Montaż i wymiana rozdzielnicy mieszkaniowej',
      'Wymiana przewodów aluminiowych na miedziane',
      'Przygotowanie instalacji pod klimatyzację',
      'Instalacje teletechniczne i RTV na życzenie',
      'Pomiary i protokoły',
    ],
    priceFactors: [
      'metraż mieszkania i liczba punktów elektrycznych',
      'sposób prowadzenia tras – bruzdowanie lub zabudowa',
      'wymiana całej instalacji czy tylko rozbudowa istniejącej',
      'liczba obwodów w rozdzielnicy mieszkaniowej',
      'wybrany osprzęt (seria gniazd i włączników)',
    ],
    faq: [
      {
        question: 'Ile trwa wymiana instalacji elektrycznej w mieszkaniu?',
        answer:
          'Kompletna instalacja w mieszkaniu zajmuje zwykle 2-3 dni robocze, w zależności od metrażu i stanu ścian. Termin ustalamy tak, aby pasował do pozostałych prac remontowych.',
      },
      {
        question: 'Kiedy zrobić instalację elektryczną przy remoncie mieszkania?',
        answer:
          'Przed tynkowaniem lub malowaniem ścian i przed zabudową płyt gipsowo-kartonowych. Dzięki temu bruzdy i trasy kablowe są od razu zamaskowane, a rozmieszczenie gniazd jest dopasowane do planu wnętrza.',
      },
      {
        question: 'Czy potrzebuję zgody wspólnoty lub spółdzielni?',
        answer:
          'Prace w obrębie mieszkania, za rozdzielnicą mieszkaniową, zazwyczaj nie wymagają zgody. Zmiany dotyczące wewnętrznej linii zasilającej czy licznika należą do zarządcy lub operatora – w razie potrzeby pomagamy w ustaleniach.',
      },
    ],
    related: [
      'instalacje-elektryczne',
      'wymiana-instalacji-elektrycznej',
      'rozdzielnice-elektryczne',
      'pomiary-elektryczne-odbiorowe',
    ],
  },
  {
    slug: 'instalacje-elektryczne-dla-firm',
    name: 'Instalacje dla firm i lokali',
    h1: 'Instalacje elektryczne dla firm, biur i lokali usługowych',
    metaTitle: 'Instalacje elektryczne dla firm i lokali – Warszawa',
    metaDescription:
      'Instalacje elektryczne w biurach, sklepach, lokalach usługowych i magazynach: zasilanie, rozdzielnice, oświetlenie, pomiary. Faktura VAT i gwarancja.',
    lead: `Wykonujemy instalacje elektryczne w biurach, sklepach, restauracjach, gabinetach i magazynach – z uwzględnieniem wymagań działalności i terminów otwarcia lokalu. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Instalacje elektryczne w biurach, sklepach, lokalach usługowych i magazynach – z dokumentacją i fakturą VAT.',
    cardFeatures: [
      'Biura, sklepy i lokale usługowe',
      'Instalacje siłowe 400 V',
      'Rozdzielnice i dokumentacja',
    ],
    sections: [
      {
        heading: 'Instalacja dopasowana do działalności',
        paragraphs: [
          'Każdy lokal firmowy ma inne potrzeby: biuro wymaga rozbudowanych stanowisk komputerowych i oświetlenia, punkt gastronomiczny – mocnych obwodów dla urządzeń kuchennych, a magazyn lub warsztat – zasilania siłowego i trwałego osprzętu.',
          'Zaczynamy od ustalenia mocy potrzebnej dla Twoich urządzeń i planu rozmieszczenia stanowisk. Na tej podstawie przygotowujemy projekt obwodów i rozdzielnicy, aby instalacja była bezpieczna i dawała zapas mocy na rozwój działalności.',
        ],
      },
      {
        heading: 'Terminowość i dokumentacja',
        paragraphs: [
          'Wiemy, że przy otwarciu lub remoncie lokalu liczy się czas. Prace planujemy tak, aby ograniczyć przestoje w działalności, a po ich zakończeniu przekazujemy komplet dokumentów: protokoły pomiarów i opis rozdzielnicy. Wystawiamy fakturę VAT.',
        ],
      },
    ],
    scope: [
      'Instalacje elektryczne w biurach i lokalach usługowych',
      'Zasilanie stanowisk komputerowych i sprzętu biurowego',
      'Instalacje siłowe 400 V dla maszyn i urządzeń',
      'Oświetlenie wnętrz, witryn i oświetlenie zewnętrzne',
      'Rozdzielnice, zabezpieczenia i ochrona przeciwprzepięciowa',
      'Rozbudowa i modernizacja istniejących instalacji',
      'Pomiary i protokoły',
      'Dokumentacja powykonawcza',
    ],
    priceFactors: [
      'powierzchnia lokalu i liczba stanowisk lub urządzeń',
      'zapotrzebowanie na moc i rodzaj odbiorników (jednofazowe, trójfazowe)',
      'stan istniejącej instalacji – nowa czy modernizowana',
      'wymagania dotyczące oświetlenia i ochrony przeciwprzepięciowej',
      'harmonogram prac, np. praca poza godzinami otwarcia',
    ],
    faq: [
      {
        question: 'Czy wykonujecie instalacje w lokalach, które już działają?',
        answer:
          'Tak. Prace możemy zaplanować etapami lub poza godzinami pracy lokalu, aby ograniczyć przestoje w działalności.',
      },
      {
        question: 'Czy wystawiacie fakturę VAT i dokumenty po zakończeniu prac?',
        answer:
          'Tak, wystawiamy fakturę VAT oraz przekazujemy protokoły z pomiarów i opis rozdzielnicy.',
      },
      {
        question: 'Czy zajmujecie się instalacjami w halach i dużych magazynach?',
        answer:
          'Realizujemy zlecenia w obiektach usługowych, magazynowych i warsztatowych. Przy dużych obiektach wycenę poprzedzają oględziny i analiza zapotrzebowania na moc.',
      },
    ],
    related: [
      'instalacje-elektryczne',
      'rozdzielnice-elektryczne',
      'pomiary-elektryczne-odbiorowe',
      'wymiana-instalacji-elektrycznej',
    ],
  },
  {
    slug: 'wymiana-instalacji-elektrycznej',
    name: 'Wymiana instalacji elektrycznej',
    h1: 'Wymiana instalacji elektrycznej – modernizacja starych instalacji',
    metaTitle: 'Wymiana instalacji elektrycznej Warszawa',
    metaDescription:
      'Kompleksowa wymiana starej instalacji elektrycznej w domu i mieszkaniu: nowe przewody miedziane, rozdzielnica, zabezpieczenia, pomiary. Wycena po oględzinach.',
    lead: `Przestarzała instalacja to ryzyko pożaru i porażenia. Wymieniamy stare instalacje aluminiowe i dwużyłowe na nowoczesne, bezpieczne rozwiązania zgodne z normami. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Wymiana starych instalacji aluminiowych na miedziane, modernizacja rozdzielnic i zwiększenie mocy.',
    cardFeatures: [
      'Wymiana przewodów aluminiowych',
      'Nowa rozdzielnica i zabezpieczenia',
      'Rozbudowa liczby obwodów i gniazd',
    ],
    sections: [
      {
        heading: 'Kiedy warto wymienić instalację elektryczną',
        paragraphs: [
          'Stara instalacja nie została zaprojektowana na dzisiejszą liczbę urządzeń. Płyta indukcyjna, pralka, zmywarka, klimatyzacja i komputery obciążają ją znacznie bardziej niż sprzęt sprzed kilkudziesięciu lat.',
        ],
        bullets: [
          'przewody aluminiowe lub dwużyłowe bez przewodu ochronnego',
          'bezpieczniki topikowe (tzw. korki) zamiast wyłączników',
          'częste wybijanie zabezpieczeń lub nagrzewające się gniazda',
          'zbyt mało gniazd i konieczność stosowania przedłużaczy',
          'generalny remont lub zmiana układu pomieszczeń',
        ],
      },
      {
        heading: 'Jak wygląda modernizacja',
        paragraphs: [
          'Najpierw oceniamy stan istniejącej instalacji i ustalamy zakres wymiany: cała instalacja lub wybrane obwody. Następnie demontujemy stare przewody, układamy nowe miedziane i montujemy nowoczesną rozdzielnicę z wyłącznikami nadprądowymi i różnicowoprądowymi.',
          'Całość kończymy pomiarami i protokołem, który potwierdza, że nowa instalacja spełnia wymagania ochrony przeciwporażeniowej.',
        ],
      },
    ],
    scope: [
      'Wymiana przewodów aluminiowych na miedziane',
      'Doprowadzenie przewodu ochronnego do wszystkich obwodów',
      'Wymiana rozdzielnicy i zabezpieczeń topikowych na wyłączniki',
      'Montaż wyłączników różnicowoprądowych',
      'Rozbudowa liczby obwodów, gniazd i punktów świetlnych',
      'Dostosowanie instalacji do nowych urządzeń (płyta indukcyjna, klimatyzacja)',
      'Pomiary i protokół po wymianie',
    ],
    priceFactors: [
      'wielkość obiektu i stan istniejącej instalacji',
      'wymiana całościowa czy częściowa',
      'rodzaj ścian i sposób prowadzenia nowych przewodów',
      'zakres nowej rozdzielnicy',
      'konieczność prac wykończeniowych po bruzdowaniu',
    ],
    faq: [
      {
        question: 'Czy instalację aluminiową trzeba wymienić?',
        answer:
          'Nie ma ogólnego obowiązku wymiany, ale stare instalacje aluminiowe zwykle nie spełniają współczesnych wymagań bezpieczeństwa i nie nadają się do zasilania większej liczby urządzeń. Przy remoncie lub dodawaniu odbiorników wymiana jest bardzo zalecana.',
      },
      {
        question: 'Czy można wymienić instalację w zamieszkanym mieszkaniu?',
        answer:
          'Tak, prace można etapować, ale przy kompletnej wymianie najwygodniej wykonać ją podczas remontu, gdy mieszkanie jest puste.',
      },
      {
        question: 'Ile trwa wymiana instalacji elektrycznej?',
        answer:
          'W mieszkaniu zwykle 2-3 dni, w domu jednorodzinnym od jednego do dwóch tygodni. Dokładny czas podajemy po oględzinach.',
      },
    ],
    related: [
      'instalacje-elektryczne-w-mieszkaniu',
      'rozdzielnice-elektryczne',
      'pomiary-elektryczne-odbiorowe',
      'podlaczenia-urzadzen',
    ],
  },
  {
    slug: 'rozdzielnice-elektryczne',
    name: 'Rozdzielnice i zabezpieczenia',
    h1: 'Montaż i wymiana rozdzielnicy elektrycznej',
    metaTitle: 'Rozdzielnica elektryczna – montaż i wymiana',
    metaDescription:
      'Montaż, wymiana i modernizacja rozdzielnic elektrycznych w domach i firmach: zabezpieczenia, wyłączniki różnicowoprądowe, ochrona przeciwprzepięciowa.',
    lead: `Rozdzielnica to serce instalacji elektrycznej. Montujemy i modernizujemy rozdzielnice domowe i firmowe z zabezpieczeniami dobranymi do obciążenia i planowanych urządzeń. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Montaż i modernizacja rozdzielnic, wyłączniki różnicowoprądowe i ochrona przeciwprzepięciowa.',
    cardFeatures: [
      'Nowa lub wymieniana rozdzielnica',
      'Ochrona przeciwprzepięciowa',
      'Opis obwodów i schemat',
    ],
    sections: [
      {
        heading: 'Co znajduje się w rozdzielnicy',
        paragraphs: [
          'Rozdzielnica gromadzi zabezpieczenia wszystkich obwodów w budynku. Wyłączniki nadprądowe chronią przewody przed przeciążeniem i zwarciem, wyłączniki różnicowoprądowe – ludzi przed porażeniem, a ograniczniki przepięć – urządzenia przed skutkami przepięć w sieci.',
          'Dobór aparatury zależy od liczby obwodów, rodzaju odbiorników i mocy przyłączeniowej. Zawsze zostawiamy rezerwę miejsca na rozbudowę, aby późniejsze dołożenie obwodu nie wymagało wymiany całej obudowy.',
        ],
      },
      {
        heading: 'Kiedy wymienić rozdzielnicę',
        paragraphs: [
          'Wymiana jest wskazana, gdy rozdzielnica ma stare bezpieczniki topikowe, brakuje w niej wyłączników różnicowoprądowych, obudowa jest zapełniona lub przegrzewa się, a także przed podłączeniem nowych urządzeń dużej mocy.',
        ],
        bullets: [
          'bezpieczniki topikowe zamiast wyłączników nadprądowych',
          'brak wyłącznika różnicowoprądowego',
          'brak miejsca na nowe obwody',
          'ślady przegrzania, nieopisane obwody',
        ],
      },
    ],
    scope: [
      'Montaż rozdzielnic mieszkaniowych i domowych',
      'Rozdzielnice w lokalach usługowych i firmowych',
      'Wyłączniki nadprądowe i różnicowoprądowe',
      'Ograniczniki przepięć (SPD)',
      'Rozłączniki główne i przekaźniki kontroli napięcia',
      'Opis obwodów i schemat jednokreskowy',
      'Pomiary po wymianie i protokół',
    ],
    priceFactors: [
      'liczba obwodów i modułów aparatury',
      'rodzaj obudowy (wtynkowa, natynkowa) i jej rozmiar',
      'zakres zabezpieczeń, w tym ochrona przeciwprzepięciowa',
      'konieczność przepięcia istniejących obwodów',
      'dodatkowa automatyka (np. kontrola faz)',
    ],
    faq: [
      {
        question: 'Ile kosztuje wymiana rozdzielnicy elektrycznej?',
        answer:
          'Cena zależy od liczby obwodów, wielkości obudowy i zakresu zabezpieczeń. Po oględzinach przygotowujemy wycenę z podziałem na robociznę i materiały.',
      },
      {
        question: 'Po co w rozdzielnicy ochrona przeciwprzepięciowa?',
        answer:
          'Ograniczniki przepięć chronią elektronikę i urządzenia przed skutkami wyładowań atmosferycznych i przepięć w sieci. W domach z rozbudowanym wyposażeniem warto je stosować.',
      },
      {
        question: 'Czy wymiana rozdzielnicy wymaga wyłączenia prądu?',
        answer:
          'Tak, na czas prac instalacja jest odłączona od zasilania. Planujemy wymianę tak, aby przerwa była jak najkrótsza.',
      },
    ],
    related: [
      'wymiana-instalacji-elektrycznej',
      'instalacje-elektryczne-w-domu',
      'pomiary-elektryczne-odbiorowe',
      'ladowarki-samochodow-elektrycznych',
    ],
  },
  {
    slug: 'ladowarki-samochodow-elektrycznych',
    name: 'Ładowarki samochodów elektrycznych',
    h1: 'Montaż ładowarki samochodu elektrycznego (wallbox)',
    metaTitle: 'Montaż wallboxa – ładowarka EV Warszawa',
    metaDescription:
      'Montaż stacji ładowania samochodów elektrycznych w domu, garażu i firmie: dobór mocy, dedykowany obwód, zabezpieczenia, pomiary. Wycena indywidualna.',
    lead: `Instalujemy stacje ładowania aut elektrycznych w domach, garażach i firmach. Sprawdzamy instalację, dobieramy moc i wykonujemy dedykowany obwód. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Montaż wallboxów w domach i firmach – dedykowany obwód, zabezpieczenia i pomiary.',
    cardFeatures: [
      'Ocena instalacji i mocy przyłączeniowej',
      'Dedykowany obwód i zabezpieczenia',
      'Konfiguracja i instruktaż',
    ],
    sections: [
      {
        heading: 'Jak przygotować instalację do ładowania auta',
        paragraphs: [
          'Ładowanie samochodu elektrycznego to wielogodzinne, stałe obciążenie instalacji. Gniazdko w garażu nie jest do tego przystosowane – bezpiecznym rozwiązaniem jest stacja ładowania (wallbox) zasilana osobnym obwodem.',
          'Przed montażem sprawdzamy stan instalacji, rozdzielnicę i dostępną moc przyłączeniową. Na tej podstawie dobieramy moc ładowania (najczęściej 11 kW w instalacji trójfazowej), przekrój przewodu i zabezpieczenia.',
        ],
      },
      {
        heading: 'Zabezpieczenia i zarządzanie mocą',
        paragraphs: [
          'Dobieramy zabezpieczenie różnicowoprądowe zgodnie z wymaganiami producenta stacji. Gdy moc przyłączeniowa jest ograniczona, stosujemy dynamiczne zarządzanie mocą, które zmniejsza prąd ładowania, gdy w domu pracują inne duże odbiorniki.',
          'Po zakończeniu montażu wykonujemy pomiary, konfigurujemy stację i pokazujemy, jak z niej korzystać.',
        ],
      },
    ],
    scope: [
      'Montaż wallboxa na ścianie lub słupku',
      'Dedykowany obwód z rozdzielnicy do stacji',
      'Dobór przewodu i zabezpieczeń',
      'Dynamiczne zarządzanie mocą',
      'Modernizacja rozdzielnicy pod nowe obciążenie',
      'Ładowarki w garażach i na parkingach firmowych',
      'Pomiary i konfiguracja stacji',
    ],
    priceFactors: [
      'moc stacji ładowania i liczba punktów',
      'odległość od rozdzielnicy do miejsca montażu',
      'konieczność modernizacji rozdzielnicy lub zwiększenia mocy',
      'typ zabezpieczeń i funkcje stacji (aplikacja, zarządzanie mocą)',
      'sposób prowadzenia kabla (w ścianie, w peszlu, w ziemi)',
    ],
    faq: [
      {
        question: 'Czy mogę ładować auto z zwykłego gniazdka?',
        answer:
          'Awaryjnie tak, ale nie jest to zalecane na co dzień. Ładowanie trwa długo i mocno obciąża gniazdko oraz przewody. Wallbox na dedykowanym obwodzie jest bezpieczniejszy i szybszy.',
      },
      {
        question: 'Jaką moc wallboxa wybrać do domu?',
        answer:
          'W domach najczęściej stosuje się stacje o mocy 11 kW. Wybór zależy od mocy przyłączeniowej, układu instalacji i możliwości ładowania samochodu – pomagamy go dobrać podczas oględzin.',
      },
      {
        question: 'Czy zajmujecie się też ładowarkami w firmach i garażach wspólnych?',
        answer:
          'Tak, przy obiektach wielostanowiskowych konieczne jest zaplanowanie zasilania i zarządzania mocą oraz uzgodnienie z zarządcą obiektu. Zakres ustalamy po oględzinach.',
      },
    ],
    related: [
      'instalacje-elektryczne-w-domu',
      'rozdzielnice-elektryczne',
      'podlaczenia-urzadzen',
      'instalacje-elektryczne-dla-firm',
    ],
  },
  {
    slug: 'pomiary-elektryczne-odbiorowe',
    name: 'Pomiary i odbiory instalacji',
    h1: 'Pomiary elektryczne i odbiór instalacji',
    metaTitle: 'Pomiary elektryczne i odbiór instalacji Warszawa',
    metaDescription:
      'Pomiary elektryczne po wykonaniu instalacji i przeglądy okresowe: rezystancja izolacji, pętla zwarcia, uziemienie, RCD. Protokoły dla domów i firm.',
    lead: `Wykonujemy pomiary odbiorcze nowych i zmodernizowanych instalacji oraz okresowe przeglądy instalacji elektrycznych. Zapewniamy komplet protokołów. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Pomiary odbiorcze, przeglądy okresowe i protokoły potwierdzające bezpieczeństwo instalacji.',
    cardFeatures: [
      'Pomiary po wykonaniu instalacji',
      'Przeglądy okresowe',
      'Protokoły i dokumentacja',
    ],
    sections: [
      {
        heading: 'Po co wykonuje się pomiary elektryczne',
        paragraphs: [
          'Pomiary to jedyny sposób, aby potwierdzić, że instalacja jest bezpieczna. Wykonujemy je po zakończeniu prac, przed odbiorem budynku lub lokalu oraz okresowo podczas użytkowania. Protokoły są potrzebne m.in. przy odbiorach, do dokumentacji budynku i często przy rozliczeniach z ubezpieczycielem.',
          'Pomiary wykonujemy profesjonalnym sprzętem pomiarowym, a osoby je przeprowadzające posiadają uprawnienia SEP.',
        ],
      },
      {
        heading: 'Zakres pomiarów',
        paragraphs: [
          'Zakres dostosowujemy do rodzaju instalacji, a po pomiarach przekazujemy protokoły z opisem wyników i ewentualnymi zaleceniami.',
        ],
        bullets: [
          'rezystancja izolacji przewodów',
          'impedancja pętli zwarcia – skuteczność ochrony przeciwporażeniowej',
          'ciągłość przewodów ochronnych i połączeń wyrównawczych',
          'test wyłączników różnicowoprądowych',
          'rezystancja uziemienia',
        ],
      },
      {
        heading: 'Przeglądy okresowe',
        paragraphs: [
          'Zgodnie z Prawem budowlanym właściciele i zarządcy budynków powinni zlecać okresowe kontrole instalacji elektrycznej, co do zasady co pięć lat. Wykonujemy przeglądy dla domów, wspólnot i firm.',
        ],
      },
    ],
    scope: [
      'Pomiary odbiorcze nowej instalacji',
      'Pomiary po modernizacji i wymianie rozdzielnicy',
      'Okresowe przeglądy instalacji elektrycznych',
      'Pomiary uziemień i instalacji odgromowych',
      'Protokoły z pomiarów',
      'Zalecenia po przeglądzie',
    ],
    priceFactors: [
      'wielkość obiektu i liczba obwodów',
      'rodzaj instalacji (mieszkanie, dom, obiekt usługowy)',
      'zakres pomiarów i dokumentacji',
      'dostępność pomieszczeń i rozdzielnic',
    ],
    faq: [
      {
        question: 'Czy po wykonaniu instalacji muszę zlecić pomiary?',
        answer:
          'Tak, pomiary odbiorcze potwierdzają, że instalacja została wykonana prawidłowo i jest bezpieczna. Wykonujemy je zawsze po naszych pracach i przekazujemy protokoły.',
      },
      {
        question: 'Jak często wykonuje się przeglądy instalacji elektrycznej?',
        answer:
          'Zgodnie z Prawem budowlanym co do zasady co pięć lat, a w niektórych obiektach częściej. Wskazujemy odpowiedni zakres dla Twojego budynku.',
      },
      {
        question: 'Czy robicie pomiary instalacji wykonanej przez innych?',
        answer:
          'Tak, wykonujemy pomiary także w istniejących instalacjach. Jeśli wykryjemy nieprawidłowości, wskażemy zalecane działania naprawcze.',
      },
    ],
    related: [
      'instalacje-elektryczne',
      'wymiana-instalacji-elektrycznej',
      'rozdzielnice-elektryczne',
      'instalacje-elektryczne-dla-firm',
    ],
  },
  {
    slug: 'podlaczenia-urzadzen',
    name: 'Podłączenia urządzeń',
    h1: 'Podłączenie płyty indukcyjnej, pompy ciepła i klimatyzacji',
    metaTitle: 'Podłączenie płyty indukcyjnej, pompy ciepła',
    metaDescription:
      'Elektryczne podłączenie płyty indukcyjnej, piekarnika, pompy ciepła, klimatyzacji i falownika PV. Dedykowane obwody i zabezpieczenia. Warszawa i okolice.',
    lead: `Przygotowujemy instalację i podłączamy urządzenia dużej mocy: płyty indukcyjne, piekarniki, pompy ciepła, klimatyzatory i falowniki. Pracujemy na terenie: ${AREA}.`,
    cardDescription:
      'Podłączenie płyty indukcyjnej, pompy ciepła, klimatyzacji i falownika – z dedykowanym obwodem.',
    cardFeatures: [
      'Płyta indukcyjna i piekarnik',
      'Pompa ciepła i klimatyzacja',
      'Falownik fotowoltaiczny (część AC)',
    ],
    sections: [
      {
        heading: 'Dlaczego urządzenia dużej mocy wymagają własnego obwodu',
        paragraphs: [
          'Płyta indukcyjna, piekarnik, pompa ciepła czy klimatyzator pobierają dużo prądu przez wiele godzin. Podłączenie ich do istniejącego gniazdka lub przeciążonego obwodu grozi przegrzaniem przewodów i wybijaniem zabezpieczeń.',
          'Dlatego przed podłączeniem sprawdzamy instalację, a w razie potrzeby wykonujemy nowy obwód z zabezpieczeniem i przewodem o odpowiednim przekroju, dobranym do mocy urządzenia i długości trasy.',
        ],
      },
      {
        heading: 'Zakres naszych prac',
        paragraphs: [
          'Wykonujemy część elektryczną instalacji. Montaż jednostek chłodniczych klimatyzacji lub pompy ciepła realizuje wyspecjalizowany instalator, z którym chętnie współpracujemy, a my przygotowujemy zasilanie.',
        ],
        bullets: [
          'ocena instalacji i dobór obwodu',
          'wykonanie dedykowanego obwodu i zabezpieczenia',
          'podłączenie urządzenia do instalacji',
          'sprawdzenie działania i pomiary',
        ],
      },
    ],
    scope: [
      'Płyty indukcyjne i piekarniki',
      'Pompy ciepła – zasilanie i zabezpieczenia',
      'Klimatyzacja – obwód zasilający',
      'Bojlery i ogrzewanie elektryczne',
      'Falowniki instalacji fotowoltaicznych (część AC)',
      'Ochrona przeciwprzepięciowa dla urządzeń',
      'Pomiary i sprawdzenie działania',
    ],
    priceFactors: [
      'moc urządzenia i liczba faz',
      'odległość od rozdzielnicy',
      'konieczność rozbudowy rozdzielnicy',
      'sposób prowadzenia przewodu',
    ],
    faq: [
      {
        question: 'Czy płytę indukcyjną można podłączyć samodzielnie?',
        answer:
          'Podłączenie powinien wykonać elektryk z uprawnieniami. Płyta indukcyjna wymaga odpowiedniego obwodu, zabezpieczenia i przewodu. Błędy mogą prowadzić do przegrzania instalacji.',
      },
      {
        question: 'Czy trzeba nowy obwód do pompy ciepła?',
        answer:
          'Zazwyczaj tak. Pompa ciepła wymaga dedykowanego zasilania z własnym zabezpieczeniem, a jego parametry podaje producent urządzenia.',
      },
      {
        question: 'Czy podłączycie klimatyzator zamontowany przez inną firmę?',
        answer:
          'Tak, wykonujemy część elektryczną zasilania i sprawdzamy, czy instalacja jest przygotowana na dodatkowe obciążenie.',
      },
    ],
    related: [
      'instalacje-elektryczne-w-domu',
      'rozdzielnice-elektryczne',
      'ladowarki-samochodow-elektrycznych',
      'instalacje-elektryczne-w-mieszkaniu',
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
