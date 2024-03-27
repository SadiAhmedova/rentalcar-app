const offices = [
    {
      city: 'Varna',
      address:'bul. "Knyaz Boris 1st" 7',
      src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11632.082449497877!2d27.923601!3d43.209057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4540939dfa6d5%3A0x3d401ef3c09a59bf!2z0JjQutC-0L3QvtC80LjRh9C10YHQutC4INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgLSDQktCw0YDQvdCw!5e0!3m2!1sbg!2sbg!4v1704295684629!5m2!1sbg!2sbg'
    },
      {
      city: 'Varna',
      address:'str. "Professor Marin Drinov" 55',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.881460062874!2d27.918483575654218!3d43.21197558085695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4540c53a787fd%3A0xb05b422184c1daea!2z0JzQtdC00LjRhtC40L3RgdC60Lgg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAtINCS0LDRgNC90LA!5e0!3m2!1sbg!2sbg!4v1704296325065!5m2!1sbg!2sbg'
  
    },
      {
      city: 'Plovdiv',
      address:'str, "Tsar Asen 1st" 24',
      src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.555642225946!2d24.74625098383586!3d42.13839517487022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1ae47a04147%3A0xc383d346a147f1cb!2z0J_Qu9C-0LLQtNC40LLRgdC60Lgg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAi0J_QsNC40YHQuNC5INCl0LjQu9C10L3QtNCw0YDRgdC60Lgi!5e0!3m2!1sbg!2sbg!4v1704296528786!5m2!1sbg!2sbg'
    },
      {
      city: 'Rousse',
      address:'str. "Studentska" 8',
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.059846105607!2d25.967530275689704!3d43.854588239383034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae60b549ec2a87%3A0x1db831c20f8f622c!2z0KDRg9GB0LXQvdGB0LrQuCDRg9C90LjQstC10YDRgdC40YLQtdGCIOKAntCQ0L3Qs9C10Lsg0JrRitC90YfQtdCy4oCc!5e0!3m2!1sbg!2sbg!4v1704296629871!5m2!1sbg!2sbg" 
    },
      {
      city: 'Sofia',
      address:'str."8th December" 19',
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.472602331639!2d23.344130084030756!3d42.651339442321444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa843c95e80aa5%3A0x300bbf697532d24d!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQt9CwINC90LDRhtC40L7QvdCw0LvQvdC-INC4INGB0LLQtdGC0L7QstC90L4g0YHRgtC-0L_QsNC90YHRgtCy0L4!5e0!3m2!1sbg!2sbg!4v1704296691259!5m2!1sbg!2sbg"
    },
      {
      city: 'Sofia',
      address:'str."Rosario" 1',
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.282161683809!2d23.351569675623928!3d42.65537571639397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8425c359e93f%3A0xfbd594bc85c2a03b!2sFaculty%20of%20Mechanical%20Engineering%2C%20Technical%20University%20of%20Sofia!5e0!3m2!1sbg!2sbg!4v1704296767167!5m2!1sbg!2sbg"
    },
      {
      city: 'Sofia',
      address:'str. "Montevideo" 21',
      src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46931.26066416934!2d23.176502348632802!3d42.678225300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9b2543b14005%3A0xea8e06ca71a2aede!2z0J3QvtCyINCx0YrQu9Cz0LDRgNGB0LrQuCDRg9C90LjQstC10YDRgdC40YLQtdGC!5e0!3m2!1sbg!2sbg!4v1704296819745!5m2!1sbg!2sbg" 
    },
     {
      city: 'Varna',
      address:'str. "Yanko Slavchev" 84',
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.6928831028713!2d28.02215308426369!3d43.2578580034695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4f925ce066ce1%3A0x2656e289c2bed1b9!2z0JLQsNGA0L3QtdC90YHQutC4INGB0LLQvtCx0L7QtNC10L0g0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAi0KfQtdGA0L3QvtGA0LjQt9C10YYg0KXRgNCw0LHRitGAIg!5e0!3m2!1sbg!2sbg!4v1704296866112!5m2!1sbg!2sbg" 
    },
      {
      city: 'Burgas',
      address:'bul."San Stefano" 62',
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47059.12686699628!2d27.423914515911125!3d42.508654745352054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69496e4470cdf%3A0x7276e8ca611d2d45!2z0JHRg9GA0LPQsNGB0LrQuCDRgdCy0L7QsdC-0LTQtdC9INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sbg!2sbg!4v1704296932915!5m2!1sbg!2sbg" 
    },
        {
      city: 'Stara Zagora',
      address:'6015 Studentski grad',
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11785.07635023424!2d25.5711639!3d42.4007147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a86a6ed8f009bd%3A0x9b28a6a11c26f997!2z0KLRgNCw0LrQuNC50YHQutC4INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sbg!2sbg!4v1704302796733!5m2!1sbg!2sbg"
    },
     {
      city: 'Veliko Tyrnovo',
      address:'str. "Teodosii Tarnovski" 2',
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11656.79463280868!2d25.616102418128303!3d43.07931866110794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a92624eeb2ae13%3A0x7dc6e4d520f6fd08!2z0JLQtdC70LjQutC-0YLRitGA0L3QvtCy0YHQutC4INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgItCh0LIuINGB0LIu0JrQuNGA0LjQuyDQuCDQnNC10YLQvtC00LjQuSI!5e0!3m2!1sbg!2sbg!4v1704302905012!5m2!1sbg!2sbg" 
    },
      {
      city: 'Pleven',
      address:'str. "Saith Kliment Ohridski" 1',
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5797.215405631056!2d24.618051446433675!3d43.40612832899009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40abf4af9626427b%3A0x3d9a12c2f7fb6c8!2z0JzQtdC00LjRhtC40L3RgdC60Lgg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sbg!2sbg!4v1704303047374!5m2!1sbg!2sbg" 
    },
  ];

export default offices;