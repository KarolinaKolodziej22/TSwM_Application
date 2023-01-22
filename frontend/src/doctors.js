const doctors = [
    {
      '_id': '1',
      'name': 'Ortopeda',
      'description': 'Złamania, urazy, dolegliwości układu ruchu',
      'price': '100-300',
      'count': 3,
      'image': '/img/ortopeda.jpg',
      'symptoms': ['złamanie, uraz'],
      'example': [
        {
            'name': 'lek. Kazimierz Lis',
            'contact': '604-353-234'
        },
        {
            'name': 'lek. Łukasz Stępień',
            'contact': '324-554-235'
        },
        {
            'name': 'lek. Łukasz Stępień',
            'contact': '454-134-236'
        },],

    },
    {
      '_id': '2',
      'name': 'Kardiolog',
      'description': 'Diagnostyka i leczenie chorób układu krwionośnego',
      'price': '100-350',
      'count': 3,
      'image': '/img/kardiolog.jpg',
      'symptoms': ['ból w klatce piersiowej, omdlenia'],
      'example': [
        {
            'name': 'lek. Wiktoria Bąk',
            'contact': '564-353-234'
        },
        {
            'name': 'lek. Mikołaj Pietrzak',
            'contact': '675-767-235'
        },
        {
            'name': 'lek. Jacek Baranowski',
            'contact': '456-353-236'
        },],
    },
    {
      '_id': '3',
      'name': 'Neurolog',
      'description': 'Badanie czynności układu nerwowego oraz reakcji organizmu na bodźce',
      'price': '200-300',
      'count': 3,
      'image': '/img/neurolog.jpg',
      'symptoms': ['nerwica, Alzheimer, ból w klatce piersiowej'],
      'example': [
        {
            'name': 'lek. Izabela Gajewska',
            'contact': '232-353-234'
        },
        {
            'name': 'lek. Zygmunt Marciniak',
            'contact': '778-353-235'
        },
        {
            'name': 'lek. Artur Borkowski',
            'contact': '876-353-236'
        },],
    },
    {
      '_id': '4',
      'name': 'Onkolog',
      'description': 'Profilaktyka, diagnoza oraz leczenie schorzeń nowotworowych',
      'price': '140-500',
      'count': 3,
      'image': '/img/onkolog.jpg',
      'symptoms': ['guz', 'zmiany na skórze']
    },
    {
      '_id': '5',
      'name': 'Chirurg',
      'description': 'Diagnostyka i leczenie schorzeń tkanek miękkich tj. tkanki podskórnej i skóry, narządów wewnętrznych układu trawiennego, brzucha, pęcherza moczowego, klatki piersiowej, szyi oraz mięśni',
      'price': '150-600',
      'count': 3,
      'image': '/img/chirurg.jpg',
      'contact': 534-353-455,
      'symptoms': ['guz', 'zmiany na skórze', 'ból brzucha'],
      'example': [
        {
            'name': 'lek. Ireneusz Sokolski',
            'contact': '604-353-222'
        },
        {
            'name': 'lek. Alicja Szymańska',
            'contact': '878-353-544'
        },
        {
            'name': 'lek. Maciej Adamski',
            'contact': '234-353-478'
        },],
    },
    {
      '_id': '6',
      'name': 'Psychiatra',
      'description': 'Diagnostyka oraz leczenie chorób i zaburzeń psychicznych',
      'price': '80-200',
      'count': 3,
      'image': '/img/psychiatra.jpg',
      'symptoms': ['nerwica', 'stany depresyjne', 'ból brzucha'],
      'example': [
        {
            'name': 'lek. Michał Górski',
            'contact': '344-322-234'
        },
        {
            'name': 'lek. Wiktoria Zalewska',
            'contact': '742-135-235'
        },
        {
            'name': 'lek. Aleksandra Jaworska',
            'contact': '875-353-236'
        },],
    },
    {
      '_id': '7',
      'name': 'Lekarz Ogólny',
      'description': 'Diagnostyka i leczenie chorób, przeprowadzanie bilansów zdrowia i kwalifikacji do szczepień',
      'price': '60-200',
      'count': 3,
      'image': '/img/ogolny.jpg',
      'symptoms': ['ból brzucha', 'gorączka', 'ból w klatce piersiowej', 'omdlenia', 'kaszel'],
      'example': [
        {
            'name': 'lek. Jan Kowalski',
            'contact': '604-353-234'
        },
        {
            'name': 'lek. Marta Wróblewska',
            'contact': '432-353-235'
        },
        {
            'name': 'lek. Bartosz Raczewski',
            'contact': '765-353-236'
        },],
    },
    {
      '_id': '8',
      'name': 'Alergolog',
      'description': 'Diagnostyka i leczenie chorób alergicznych',
      'price': '90-350',
      'count': 3,
      'image': '/img/alergolog.jpg',
      'symptoms': ['zmiany na skórze', 'wysypka'],
      'example': [
        {
            'name': 'lek. Jan Alergia',
            'contact': '534-353-565'
        },
        {
            'name': 'Anna Nowak',
            'contact': '865-353-343'
        },
        {
            'name': 'Marek Zdzisłowski',
            'contact': '554-353-664'
        },],
    },
  ]
  
  
  export default doctors