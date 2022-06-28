import { Country, IBook } from './book.interface';
import { Category } from 'src/common/category.enum';

export const COUNTRIES: Country[] = [
  {
    id: 1,
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    id: 2,
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548,
  },
  {
    id: 3,
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224,
  },
  {
    id: 4,
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506,
  },
  {
    id: 5,
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    id: 6,
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212,
    population: 95540800,
  },
  {
    id: 7,
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767,
    population: 209288278,
  },
  {
    id: 8,
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375,
    population: 129163276,
  },
  {
    id: 9,
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    id: 10,
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263,
    population: 1324171354,
  },
  {
    id: 11,
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931,
    population: 263991379,
  },
  {
    id: 12,
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26,
    population: 11097,
  },
  {
    id: 13,
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];

export const BOOKS: IBook[] = [
  {
    id: 1,
    title: 'Cornelis',
    image:
      'https://robohash.org/voluptatumperferendissaepe.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 174,
    price: 116.3,
    description:
      'nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a',
  },
  {
    id: 2,
    title: 'George Lopez: Tall, Dark & Chicano',
    image: 'https://robohash.org/quamabrecusandae.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 33,
    price: 378.6,
    description:
      'orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien',
  },
  {
    id: 3,
    title: 'Disturbia',
    image:
      'https://robohash.org/reprehenderitoditaccusantium.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 189,
    price: 237.4,
    description:
      'cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi',
  },
  {
    id: 4,
    title: 'Bee Season',
    image: 'https://robohash.org/eaquedoloremearum.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 45,
    price: 457,
    description:
      'eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus',
  },
  {
    id: 5,
    title: 'Sidekicks',
    image: 'https://robohash.org/reprehenderitametet.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 149,
    price: 104.4,
    description:
      'lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec',
  },
  {
    id: 6,
    title: 'My Favorite Brunette',
    image:
      'https://robohash.org/eligendimagnamassumenda.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 180,
    price: 233.3,
    description:
      'luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit',
  },
  {
    id: 7,
    title: 'Brannigan',
    image: 'https://robohash.org/rerumametomnis.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 87,
    price: 169.2,
    description:
      'varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec',
  },
  {
    id: 8,
    title: 'Monster Walks, The',
    image:
      'https://robohash.org/reprehenderitpraesentiumrerum.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 39,
    price: 295.6,
    description:
      'morbi non lectus aliquam sit amet diam in magna bibendum imperdiet',
  },
  {
    id: 9,
    title: 'Deal, The',
    image: 'https://robohash.org/velitveritatisin.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 70,
    price: 171.3,
    description:
      'volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis',
  },
  {
    id: 10,
    title: 'Clownhouse',
    image:
      'https://robohash.org/architectocupiditateamet.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 150,
    price: 322.5,
    description:
      'faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus',
  },
  {
    id: 11,
    title: 'It Could Happen to You',
    image: 'https://robohash.org/fugitestexcepturi.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 100,
    price: 338.6,
    description:
      'enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero',
  },
  {
    id: 12,
    title: 'Iron Sky',
    image: 'https://robohash.org/utbeataealiquam.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 169,
    price: 370.7,
    description:
      'vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo',
  },
  {
    id: 13,
    title: 'Nine Lives (Ni liv)',
    image: 'https://robohash.org/temporeetnemo.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 5,
    price: 175.3,
    description:
      'curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna',
  },
  {
    id: 14,
    title: 'Crisis (Kris)',
    image:
      'https://robohash.org/undeconsequunturdoloremque.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 147,
    price: 215.9,
    description:
      'elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo',
  },
  {
    id: 15,
    title: 'Evidence',
    image: 'https://robohash.org/veldeserunteos.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 77,
    price: 424.5,
    description:
      'nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi',
  },
  {
    id: 16,
    title: "Pig's Tale, A",
    image: 'https://robohash.org/ipsasedvoluptatem.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 35,
    price: 186.7,
    description:
      'imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo',
  },
  {
    id: 17,
    title: 'El Hada Buena - Una Fábula Peronista',
    image: 'https://robohash.org/magniipsaillo.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 105,
    price: 340.8,
    description:
      'id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam',
  },
  {
    id: 18,
    title: 'Client List, The',
    image:
      'https://robohash.org/deseruntlaboriosamqui.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 93,
    price: 110.3,
    description:
      'magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta',
  },
  {
    id: 19,
    title: 'Barbarian Queen II: The Empress Strikes Back',
    image:
      'https://robohash.org/oditdoloresassumenda.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 182,
    price: 24.6,
    description:
      'felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac',
  },
  {
    id: 20,
    title: 'They Came to Cordura',
    image:
      'https://robohash.org/magnamfugiatvoluptatibus.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 160,
    price: 286.9,
    description:
      'nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla',
  },
  {
    id: 21,
    title: 'Revenge of Frankenstein, The',
    image: 'https://robohash.org/illumvoluptasin.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 132,
    price: 335.9,
    description:
      'dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus',
  },
  {
    id: 22,
    title: 'Evening with Kevin Smith 2: Evening Harder, An',
    image: 'https://robohash.org/etofficiisillo.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 167,
    price: 68.6,
    description:
      'nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque',
  },
  {
    id: 23,
    title: 'Badge, The',
    image:
      'https://robohash.org/architectomaximeodit.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 179,
    price: 33.5,
    description:
      'congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio',
  },
  {
    id: 24,
    title: "Great Rock 'n' Roll Swindle, The",
    image: 'https://robohash.org/rerumisteet.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 33,
    price: 69.2,
    description:
      'erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst',
  },
  {
    id: 25,
    title: 'Leaning Tower, The (Kalteva torni)',
    image: 'https://robohash.org/recusandaedoloraut.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 84,
    price: 475.9,
    description:
      'in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel',
  },
  {
    id: 26,
    title: 'Grosse Pointe Blank',
    image: 'https://robohash.org/autducimusdolor.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 172,
    price: 266,
    description:
      'duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget',
  },
  {
    id: 27,
    title: 'Madman',
    image:
      'https://robohash.org/doloresvoluptasdoloremque.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 105,
    price: 407.6,
    description:
      'gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi',
  },
  {
    id: 28,
    title: 'I Want Someone to Eat Cheese With',
    image:
      'https://robohash.org/perferendisrerumautem.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 153,
    price: 108.9,
    description:
      'id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat',
  },
  {
    id: 29,
    title: 'Moderns, The',
    image: 'https://robohash.org/fugaomnisporro.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 69,
    price: 379,
    description:
      'dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh',
  },
  {
    id: 30,
    title: 'Lianna',
    image: 'https://robohash.org/doloreoset.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 77,
    price: 130.5,
    description:
      'sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at',
  },
  {
    id: 31,
    title: '2019: After the Fall of New York',
    image: 'https://robohash.org/etconsequaturearum.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 161,
    price: 359,
    description:
      'nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta',
  },
  {
    id: 32,
    title: 'Ticking Clock',
    image: 'https://robohash.org/quaerepudiandaesed.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 106,
    price: 322.3,
    description:
      'rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis',
  },
  {
    id: 33,
    title: 'Separation, The (Séparation, La)',
    image:
      'https://robohash.org/inventoreullamexplicabo.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 99,
    price: 257.9,
    description:
      'nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in',
  },
  {
    id: 34,
    title: 'Armadillo',
    image:
      'https://robohash.org/voluptasquasvoluptatem.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 178,
    price: 443.8,
    description:
      'ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing',
  },
  {
    id: 35,
    title: 'Manufacturing Dissent',
    image:
      'https://robohash.org/teneturquiarecusandae.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 31,
    price: 436.5,
    description:
      'at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit',
  },
  {
    id: 36,
    title: 'Love Can Seriously Damage Your Health',
    image: 'https://robohash.org/quasiharumaliquid.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 81,
    price: 432.5,
    description:
      'velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum',
  },
  {
    id: 37,
    title: 'Weird Science',
    image:
      'https://robohash.org/officiisharumconsequatur.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 142,
    price: 339.9,
    description:
      'duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien',
  },
  {
    id: 38,
    title: 'My Girlfriend Is an Agent (Chilgeup gongmuwon)',
    image: 'https://robohash.org/suntfugiteum.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 171,
    price: 153.5,
    description:
      'morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat',
  },
  {
    id: 39,
    title: "Watch Out, We're Mad (...Altrimenti ci arrabbiamo!)",
    image: 'https://robohash.org/doloresautsint.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 58,
    price: 127.8,
    description:
      'venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
  },
  {
    id: 40,
    title: 'Johns',
    image:
      'https://robohash.org/nobisdelenitirepellat.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 154,
    price: 415.3,
    description:
      'ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis',
  },
  {
    id: 41,
    title: 'Little Man',
    image:
      'https://robohash.org/evenietadipiscitemporibus.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 142,
    price: 31.4,
    description:
      'pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in',
  },
  {
    id: 42,
    title: 'Beyond Therapy',
    image:
      'https://robohash.org/expeditadoloremquequisquam.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 59,
    price: 462.1,
    description:
      'id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in',
  },
  {
    id: 43,
    title: 'Klip (Clip)',
    image:
      'https://robohash.org/sapientevoluptatemest.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 195,
    price: 315,
    description:
      'mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum',
  },
  {
    id: 44,
    title: 'Wonder Woman',
    image: 'https://robohash.org/architectositcumque.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 55,
    price: 10.6,
    description:
      'dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo',
  },
  {
    id: 45,
    title: 'Scattered Clouds (Midaregumo)',
    image:
      'https://robohash.org/doloreassumendalaborum.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 109,
    price: 218.2,
    description:
      'ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus',
  },
  {
    id: 46,
    title: 'Polly of the Circus',
    image: 'https://robohash.org/saepecorporisquia.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 43,
    price: 401.6,
    description:
      'luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at',
  },
  {
    id: 47,
    title: 'Deluge, The (Potop)',
    image: 'https://robohash.org/quoreprehenderitid.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 98,
    price: 86.3,
    description:
      'ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi',
  },
  {
    id: 48,
    title: 'Whistleblower, The',
    image: 'https://robohash.org/culpaquodin.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 12,
    price: 95.5,
    description:
      'turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie',
  },
  {
    id: 49,
    title: 'Direct Action',
    image:
      'https://robohash.org/consecteturexercitationemipsum.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 24,
    price: 50,
    description:
      'justo pellentesque viverra pede ac diam cras pellentesque volutpat dui',
  },
  {
    id: 50,
    title: 'Betrayed, The',
    image: 'https://robohash.org/autfugitid.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 181,
    price: 100,
    description:
      'quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae',
  },
  {
    id: 51,
    title: 'Madame Sin',
    image:
      'https://robohash.org/recusandaedignissimoscupiditate.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 123,
    price: 258.4,
    description:
      'eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
  },
  {
    id: 52,
    title: 'Uncle Buck',
    image: 'https://robohash.org/deserunttotamsed.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 169,
    price: 369.1,
    description:
      'cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti',
  },
  {
    id: 53,
    title: 'Imagine: John Lennon',
    image:
      'https://robohash.org/autasperioresvoluptates.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 128,
    price: 137.9,
    description:
      'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed',
  },
  {
    id: 54,
    title: 'Extreme Justice',
    image: 'https://robohash.org/etdoloresquos.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 92,
    price: 27.2,
    description:
      'nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec',
  },
  {
    id: 55,
    title: 'Charlie Chan in the Secret Service',
    image: 'https://robohash.org/hicetut.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 125,
    price: 388.6,
    description:
      'morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante',
  },
  {
    id: 56,
    title: 'My Man Godfrey',
    image:
      'https://robohash.org/temporibusarchitectoamet.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 189,
    price: 410.8,
    description:
      'quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl',
  },
  {
    id: 57,
    title: 'Charlie Bartlett',
    image: 'https://robohash.org/suscipitexcepturiet.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 167,
    price: 356.1,
    description:
      'congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate',
  },
  {
    id: 58,
    title: "Losers' Club (Kaybedenler kulübü)",
    image: 'https://robohash.org/providentautut.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 185,
    price: 267.1,
    description:
      'neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet',
  },
  {
    id: 59,
    title: 'Last September, The',
    image:
      'https://robohash.org/possimusquaeratconsequatur.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 99,
    price: 24.9,
    description:
      'nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 60,
    title: 'Lad: A Dog',
    image: 'https://robohash.org/omnisaliasvitae.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 142,
    price: 436.3,
    description:
      'dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis',
  },
  {
    id: 61,
    title: 'Best of the Best 2',
    image: 'https://robohash.org/laudantiumquiaerror.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 138,
    price: 297.2,
    description:
      'vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor',
  },
  {
    id: 62,
    title: 'To Tulsa and Back: On Tour with J.J. Cale',
    image: 'https://robohash.org/hicdoloraliquid.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 155,
    price: 115.1,
    description:
      'habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum',
  },
  {
    id: 63,
    title: 'Mission to Mars',
    image:
      'https://robohash.org/temporeaccusamusdeserunt.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 33,
    price: 114.8,
    description:
      'habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras',
  },
  {
    id: 64,
    title: 'Call of Cthulhu, The',
    image: 'https://robohash.org/nihilsitmolestias.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 122,
    price: 91.6,
    description:
      'sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac',
  },
  {
    id: 65,
    title: 'The Pee-Wee Herman Show on Broadway',
    image:
      'https://robohash.org/quisquamvoluptatesitaque.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 112,
    price: 362.3,
    description:
      'donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec',
  },
  {
    id: 66,
    title: "Who's Camus Anyway? (Kamyu nante shiranai)",
    image: 'https://robohash.org/etvoluptasaut.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 105,
    price: 203.9,
    description:
      'tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
  },
  {
    id: 67,
    title: 'Henry',
    image: 'https://robohash.org/aliquamautmolestias.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 94,
    price: 254.7,
    description:
      'nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis',
  },
  {
    id: 68,
    title: 'Hell and Back Again',
    image: 'https://robohash.org/liberodolornumquam.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 114,
    price: 462.3,
    description:
      'ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
  },
  {
    id: 69,
    title: 'Grey Gardens',
    image: 'https://robohash.org/eumvelitreiciendis.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 84,
    price: 221.2,
    description:
      'hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit',
  },
  {
    id: 70,
    title: 'Unconscious (Inconscientes)',
    image: 'https://robohash.org/quosquianatus.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 103,
    price: 462.8,
    description:
      'purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede',
  },
  {
    id: 71,
    title: 'The Man Who Could Cheat Death',
    image:
      'https://robohash.org/adipiscifugaassumenda.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 163,
    price: 156.8,
    description:
      'elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque',
  },
  {
    id: 72,
    title: 'Cremaster 3',
    image: 'https://robohash.org/etvoluptasomnis.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 191,
    price: 381.8,
    description:
      'eget orci vehicula condimentum curabitur in libero ut massa volutpat',
  },
  {
    id: 73,
    title: 'Fading Gigolo',
    image: 'https://robohash.org/ipsautex.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 60,
    price: 203.4,
    description:
      'mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia',
  },
  {
    id: 74,
    title: 'Broken Vessels',
    image: 'https://robohash.org/optioquivoluptates.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 96,
    price: 372.1,
    description:
      'metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl',
  },
  {
    id: 75,
    title: 'After Hours',
    image: 'https://robohash.org/veliteiusbeatae.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 56,
    price: 4.1,
    description:
      'odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu',
  },
  {
    id: 76,
    title: 'Johns',
    image: 'https://robohash.org/quaeratetharum.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 67,
    price: 462.3,
    description:
      'luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim',
  },
  {
    id: 77,
    title: 'Lovers on the Bridge, The (Amants du Pont-Neuf, Les)',
    image: 'https://robohash.org/ipsumautminus.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 175,
    price: 355.8,
    description:
      'massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
  },
  {
    id: 78,
    title: 'Brief Encounter',
    image: 'https://robohash.org/adullamvelit.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 105,
    price: 437.5,
    description:
      'et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit',
  },
  {
    id: 79,
    title: 'Skins',
    image: 'https://robohash.org/voluptatenamsit.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 117,
    price: 145.7,
    description:
      'imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero',
  },
  {
    id: 80,
    title: 'Rehearsals for Extinct Anatomies',
    image: 'https://robohash.org/sitasperioresquia.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 176,
    price: 272.1,
    description:
      'neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices',
  },
  {
    id: 81,
    title: 'Reindeer Games',
    image:
      'https://robohash.org/omnisvoluptatemfacere.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 92,
    price: 360.9,
    description:
      'placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in',
  },
  {
    id: 82,
    title: 'Tell Them Willie Boy is Here',
    image: 'https://robohash.org/nihildebitisut.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 148,
    price: 301.8,
    description:
      'duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi',
  },
  {
    id: 83,
    title: "Ed's Next Move",
    image: 'https://robohash.org/utquodtempora.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 84,
    price: 366.3,
    description:
      'porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim',
  },
  {
    id: 84,
    title: 'History of the World: Part I',
    image:
      'https://robohash.org/laboriosamexpeditasuscipit.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 112,
    price: 26,
    description:
      'dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
  },
  {
    id: 85,
    title: 'Chatroom',
    image:
      'https://robohash.org/illumtemporibusquaerat.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 150,
    price: 446.4,
    description:
      'euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus',
  },
  {
    id: 86,
    title: 'They Were Expendable',
    image: 'https://robohash.org/velitidquos.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 144,
    price: 105.9,
    description:
      'amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue',
  },
  {
    id: 87,
    title: 'Sleeping Car Murder, The (Compartiment tueurs)',
    image:
      'https://robohash.org/facerefugiatpraesentium.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 1,
    price: 12.1,
    description:
      'et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti',
  },
  {
    id: 88,
    title: 'Friends at the Margherita Cafe, The (Gli amici del bar Margherita)',
    image: 'https://robohash.org/illoautconsequatur.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 46,
    price: 55,
    description:
      'pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
  },
  {
    id: 89,
    title: "Workingman's Death",
    image:
      'https://robohash.org/voluptatemvoluptasrerum.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 126,
    price: 465.2,
    description:
      'primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
  },
  {
    id: 90,
    title: 'After the Thin Man',
    image: 'https://robohash.org/rerumeumvelit.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 182,
    price: 111.5,
    description:
      'id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut',
  },
  {
    id: 91,
    title: 'Long Weekend',
    image: 'https://robohash.org/veletarchitecto.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 44,
    price: 160.7,
    description:
      'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque',
  },
  {
    id: 92,
    title: 'Rapture, The',
    image: 'https://robohash.org/quidemdolormaxime.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 120,
    price: 454.2,
    description:
      'at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
  },
  {
    id: 93,
    title: 'Pool, The (Swimming Pool - Der Tod feiert mit) ',
    image:
      'https://robohash.org/sapienteminimaveniam.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 104,
    price: 13.6,
    description:
      'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum',
  },
  {
    id: 94,
    title: 'For Whom the Bell Tolls',
    image: 'https://robohash.org/minimaautdoloremque.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 156,
    price: 469.2,
    description:
      'accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci',
  },
  {
    id: 95,
    title: '1987',
    image:
      'https://robohash.org/etnesciuntasperiores.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 137,
    price: 229.2,
    description:
      'est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat',
  },
  {
    id: 96,
    title: 'Flower Drum Song',
    image: 'https://robohash.org/omnisabvoluptas.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 42,
    price: 88.5,
    description:
      'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis',
  },
  {
    id: 97,
    title: 'Pillow of Death',
    image: 'https://robohash.org/veroetquos.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 152,
    price: 355.9,
    description:
      'mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu',
  },
  {
    id: 98,
    title: "Charlotte's Web",
    image: 'https://robohash.org/quidemnonsint.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 173,
    price: 194.6,
    description:
      'aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel',
  },
  {
    id: 99,
    title: 'Beautiful',
    image:
      'https://robohash.org/repellatconsequaturvitae.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 84,
    price: 214.2,
    description:
      'pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula',
  },
  {
    id: 100,
    title: 'Ski Party',
    image: 'https://robohash.org/itaqueutquidem.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 178,
    price: 490.5,
    description:
      'posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed',
  },
  {
    id: 101,
    title: 'Lucie Aubrac',
    image: 'https://robohash.org/omnisdictaaut.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 100,
    price: 434.2,
    description:
      'turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra',
  },
  {
    id: 102,
    title: 'Zincirbozan',
    image: 'https://robohash.org/rerumquiafugit.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 68,
    price: 287.5,
    description:
      'est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam',
  },
  {
    id: 103,
    title: 'Becoming Chaz',
    image:
      'https://robohash.org/necessitatibusinventoresed.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 36,
    price: 496.7,
    description:
      'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis',
  },
  {
    id: 104,
    title: "Christmas Memory, A (Truman Capote's 'A Christmas Memory')",
    image: 'https://robohash.org/minusnonut.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 98,
    price: 467.4,
    description:
      'nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere',
  },
  {
    id: 105,
    title: 'By the Gun',
    image: 'https://robohash.org/doloremetet.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 123,
    price: 289.3,
    description:
      'nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede',
  },
  {
    id: 106,
    title: 'Samson and Delilah',
    image:
      'https://robohash.org/accusantiumquoratione.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 6,
    price: 254.2,
    description:
      'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum',
  },
  {
    id: 107,
    title: 'Down and Derby',
    image: 'https://robohash.org/porrocumqueexpedita.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 186,
    price: 206.4,
    description:
      'vulputate ut ultrices vel augue vestibulum ante ipsum primis in',
  },
  {
    id: 108,
    title: 'Going Straight',
    image: 'https://robohash.org/utrerumsimilique.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 48,
    price: 229.8,
    description:
      'integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper',
  },
  {
    id: 109,
    title: 'Forever Yours (Ikuisesti sinun)',
    image:
      'https://robohash.org/exvoluptatibusvoluptatem.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 70,
    price: 496.8,
    description:
      'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus',
  },
  {
    id: 110,
    title:
      'Asterix & Obelix: Mission Cleopatra (Astérix & Obélix: Mission Cléopâtre)',
    image:
      'https://robohash.org/voluptatemsolutaveniam.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 191,
    price: 456.9,
    description:
      'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis',
  },
  {
    id: 111,
    title: 'Parking (Ting che)',
    image:
      'https://robohash.org/utlaudantiumvoluptatem.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 82,
    price: 219.3,
    description:
      'odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue',
  },
  {
    id: 112,
    title: 'Year of the Gun',
    image:
      'https://robohash.org/placeatreprehenderitest.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 96,
    price: 130.2,
    description:
      'nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna',
  },
  {
    id: 113,
    title: 'Dawn of the Planet of the Apes',
    image:
      'https://robohash.org/aliquidquibusdamlaboriosam.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 2,
    price: 234.9,
    description:
      'penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in',
  },
  {
    id: 114,
    title: "Mr. Popper's Penguins",
    image: 'https://robohash.org/etestaut.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 20,
    price: 469.8,
    description:
      'pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem',
  },
  {
    id: 115,
    title: 'Prozac Nation',
    image: 'https://robohash.org/porrovoluptatesest.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 145,
    price: 254.9,
    description:
      'elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend',
  },
  {
    id: 116,
    title: 'Armageddon 2012',
    image: 'https://robohash.org/delectusquiasit.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 40,
    price: 8.4,
    description:
      'in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede',
  },
  {
    id: 117,
    title: 'Fuhrer Ex (Führer EX)',
    image: 'https://robohash.org/debitisquasiminima.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 57,
    price: 342.8,
    description:
      'vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa',
  },
  {
    id: 118,
    title: 'Girl of Finland (Lapualaismorsian)',
    image: 'https://robohash.org/adipisciquiaenim.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 168,
    price: 101,
    description:
      'aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices',
  },
  {
    id: 119,
    title: 'Escapist, The',
    image: 'https://robohash.org/nullaquidemtotam.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 84,
    price: 367.3,
    description:
      'nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
  },
  {
    id: 120,
    title: 'Devils on the Doorstep (Guizi lai le)',
    image: 'https://robohash.org/occaecatienimfugit.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 91,
    price: 115.1,
    description:
      'vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem',
  },
  {
    id: 121,
    title: 'Fly Away Home',
    image: 'https://robohash.org/utilloiure.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 165,
    price: 97.4,
    description:
      'convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula',
  },
  {
    id: 122,
    title: 'Day of Wrath (Vredens dag)',
    image:
      'https://robohash.org/totamvoluptatemfacilis.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 68,
    price: 171.7,
    description:
      'vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum',
  },
  {
    id: 123,
    title: 'Intimacy',
    image: 'https://robohash.org/autlaborummaxime.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 7,
    price: 17.9,
    description:
      'donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit',
  },
  {
    id: 124,
    title: 'Trapped Ashes',
    image: 'https://robohash.org/ipsamaliquiddolorem.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 74,
    price: 354.8,
    description:
      'nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede',
  },
  {
    id: 125,
    title: 'Our Relations',
    image: 'https://robohash.org/sequiquamvoluptate.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 127,
    price: 147.5,
    description:
      'montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in',
  },
  {
    id: 126,
    title: 'Midnight Movies: From the Margin to the Mainstream',
    image: 'https://robohash.org/exvoluptatemrerum.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 99,
    price: 194,
    description:
      'adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices',
  },
  {
    id: 127,
    title: 'P.S.',
    image: 'https://robohash.org/veniamsintamet.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 185,
    price: 130.2,
    description:
      'luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus',
  },
  {
    id: 128,
    title: 'Flowers of St. Francis (Francesco, giullare di Dio)',
    image: 'https://robohash.org/quodundeut.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 20,
    price: 82.2,
    description:
      'convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet',
  },
  {
    id: 129,
    title: 'After Hours',
    image: 'https://robohash.org/perferendisutiure.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 91,
    price: 211.3,
    description:
      'eget massa tempor convallis nulla neque libero convallis eget eleifend',
  },
  {
    id: 130,
    title: 'Earthling, The',
    image: 'https://robohash.org/voluptateinnon.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 106,
    price: 241.2,
    description:
      'sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris',
  },
  {
    id: 131,
    title: 'HazMat',
    image:
      'https://robohash.org/dolorvoluptatemincidunt.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 90,
    price: 5.9,
    description:
      'at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque',
  },
  {
    id: 132,
    title: 'Stormy Monday',
    image: 'https://robohash.org/laborererumiure.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 134,
    price: 163.2,
    description:
      'urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse',
  },
  {
    id: 133,
    title: 'Flash Gordon',
    image: 'https://robohash.org/quisquosipsam.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 132,
    price: 209.7,
    description:
      'sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum',
  },
  {
    id: 134,
    title: 'Welcome to the Jungle',
    image: 'https://robohash.org/eteumvel.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 193,
    price: 257.8,
    description:
      'non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea',
  },
  {
    id: 135,
    title: 'Dorm Daze (National Lampoon Presents Dorm Daze)',
    image: 'https://robohash.org/sitfaceremolestiae.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 137,
    price: 213.9,
    description:
      'pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu',
  },
  {
    id: 136,
    title: 'Harvest (Stadt Land Fluss)',
    image:
      'https://robohash.org/delenititemporadolorem.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 150,
    price: 169.2,
    description:
      'maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse',
  },
  {
    id: 137,
    title: 'Sing Your Song',
    image: 'https://robohash.org/voluptasutvoluptas.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 183,
    price: 421.5,
    description:
      'ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer',
  },
  {
    id: 138,
    title: 'Housemaid, The (Hanyo)',
    image: 'https://robohash.org/omnisquiaut.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 141,
    price: 238.5,
    description:
      'accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
  },
  {
    id: 139,
    title: 'Black Box, The (La boîte noire)',
    image: 'https://robohash.org/sintautemquibusdam.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 36,
    price: 334.1,
    description:
      'orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac',
  },
  {
    id: 140,
    title: 'Kid, The',
    image: 'https://robohash.org/enimsedet.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 49,
    price: 266.6,
    description:
      'faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris',
  },
  {
    id: 141,
    title: 'Crush',
    image: 'https://robohash.org/dolorumharumesse.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 22,
    price: 205,
    description:
      'pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam',
  },
  {
    id: 142,
    title: 'Hell Up in Harlem',
    image:
      'https://robohash.org/deseruntametrepudiandae.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 123,
    price: 440,
    description:
      'leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id',
  },
  {
    id: 143,
    title: 'Four Days in July',
    image: 'https://robohash.org/quisutut.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 63,
    price: 183.7,
    description: 'a ipsum integer a nibh in quis justo maecenas rhoncus',
  },
  {
    id: 144,
    title: 'Raw Meat (Death Line)',
    image:
      'https://robohash.org/voluptatemrerumminus.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 62,
    price: 353.5,
    description:
      'pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum',
  },
  {
    id: 145,
    title: 'Man to Man',
    image: 'https://robohash.org/numquameavelit.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 25,
    price: 85.9,
    description:
      'lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus',
  },
  {
    id: 146,
    title: 'Savior',
    image: 'https://robohash.org/reiciendiserrorquis.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 0,
    price: 33,
    description:
      'nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate',
  },
  {
    id: 147,
    title: 'H.M. Pulham, Esq.',
    image: 'https://robohash.org/impeditestnemo.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 31,
    price: 389.9,
    description:
      'pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae',
  },
  {
    id: 148,
    title: 'Bastards, The (Los bastardos)',
    image:
      'https://robohash.org/sitlaudantiumexpedita.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 107,
    price: 406.4,
    description:
      'pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam',
  },
  {
    id: 149,
    title: 'Heart of Glass (Herz aus Glas)',
    image: 'https://robohash.org/namquaealiquid.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 35,
    price: 481.8,
    description:
      'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam',
  },
  {
    id: 150,
    title: 'Son in Law',
    image:
      'https://robohash.org/deseruntexercitationempossimus.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 139,
    price: 99.1,
    description:
      'consequat in consequat ut nulla sed accumsan felis ut at dolor quis',
  },
  {
    id: 151,
    title: 'Georgia Rule',
    image: 'https://robohash.org/quovoluptatemmagni.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 155,
    price: 120,
    description:
      'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis',
  },
  {
    id: 152,
    title: 'My Kidnapper',
    image:
      'https://robohash.org/sitlaudantiumcorporis.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 22,
    price: 461.9,
    description:
      'sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare',
  },
  {
    id: 153,
    title: 'Zapped Again!',
    image: 'https://robohash.org/nihilatquequia.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 103,
    price: 58.1,
    description:
      'in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum',
  },
  {
    id: 154,
    title: 'Thirteenth Floor, The',
    image: 'https://robohash.org/voluptasseddolores.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 56,
    price: 458.7,
    description:
      'dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel',
  },
  {
    id: 155,
    title: 'Mansion of Madness, The',
    image:
      'https://robohash.org/iurepraesentiumvoluptatibus.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 100,
    price: 35,
    description:
      'id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
  },
  {
    id: 156,
    title: 'Double Trouble',
    image:
      'https://robohash.org/quivitaenecessitatibus.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 17,
    price: 408.1,
    description:
      'nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis',
  },
  {
    id: 157,
    title: 'Altered',
    image:
      'https://robohash.org/perferendisexplicaboipsum.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 185,
    price: 498.4,
    description:
      'ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti',
  },
  {
    id: 158,
    title: 'October',
    image:
      'https://robohash.org/dictaconsequaturomnis.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 18,
    price: 216.8,
    description:
      'velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra',
  },
  {
    id: 159,
    title: 'Octopussy',
    image: 'https://robohash.org/adquidemquo.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 71,
    price: 31.4,
    description:
      'quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in',
  },
  {
    id: 160,
    title: 'Margot at the Wedding',
    image:
      'https://robohash.org/nesciuntadipisciporro.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 176,
    price: 143.3,
    description:
      'aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta',
  },
  {
    id: 161,
    title: 'Snake Pit, The',
    image: 'https://robohash.org/quoquiarepellat.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 155,
    price: 363.1,
    description:
      'orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla',
  },
  {
    id: 162,
    title: 'Soft Skin, The (La peau douce)',
    image:
      'https://robohash.org/autvoluptateminventore.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 130,
    price: 178,
    description:
      'congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero',
  },
  {
    id: 163,
    title: '5 Fingers',
    image: 'https://robohash.org/atadfacere.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 4,
    price: 124.1,
    description:
      'ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum',
  },
  {
    id: 164,
    title: 'Big Trail, The',
    image: 'https://robohash.org/excepturiquodipsam.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 195,
    price: 266.6,
    description:
      'in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse',
  },
  {
    id: 165,
    title: 'Blackhat',
    image: 'https://robohash.org/ametetqui.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 137,
    price: 4.3,
    description:
      'nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id',
  },
  {
    id: 166,
    title: "Necessities of Life, The (Ce qu'il faut pour vivre)",
    image: 'https://robohash.org/omniseaid.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 37,
    price: 301.5,
    description:
      'in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis',
  },
  {
    id: 167,
    title: 'Welcome to Woop-Woop',
    image: 'https://robohash.org/atnostrumquia.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 14,
    price: 311.9,
    description:
      'proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
  },
  {
    id: 168,
    title: 'Philanthropy (Filantropica)',
    image: 'https://robohash.org/quosadvel.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 35,
    price: 468,
    description:
      'praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci',
  },
  {
    id: 169,
    title: 'Red Road',
    image: 'https://robohash.org/istepossimusin.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 174,
    price: 180.9,
    description:
      'nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero',
  },
  {
    id: 170,
    title: 'Go-Getter, The',
    image:
      'https://robohash.org/repellenduscumquequo.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 114,
    price: 154.4,
    description:
      'turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam',
  },
  {
    id: 171,
    title: 'Projectionist, The',
    image:
      'https://robohash.org/laudantiumcumperspiciatis.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 96,
    price: 419.8,
    description:
      'dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at',
  },
  {
    id: 172,
    title: 'Gumby: The Movie',
    image: 'https://robohash.org/exaliasaliquam.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 181,
    price: 356.6,
    description:
      'integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus',
  },
  {
    id: 173,
    title: 'Things Are Tough All Over',
    image:
      'https://robohash.org/enimtemporeveritatis.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 165,
    price: 309.9,
    description:
      'neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus',
  },
  {
    id: 174,
    title: 'Ah of Life, The',
    image:
      'https://robohash.org/consecteturvoluptatumquasi.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 53,
    price: 228.7,
    description:
      'in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et',
  },
  {
    id: 175,
    title: 'Man from Elysian Fields, The',
    image:
      'https://robohash.org/utconsequaturreiciendis.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 91,
    price: 427.7,
    description:
      'integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat',
  },
  {
    id: 176,
    title: 'I Wanna Hold Your Hand',
    image:
      'https://robohash.org/nostrumvelitveritatis.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 34,
    price: 85.1,
    description:
      'justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo',
  },
  {
    id: 177,
    title: 'Body Shots',
    image:
      'https://robohash.org/totamnecessitatibusea.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 28,
    price: 439.2,
    description:
      'curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce',
  },
  {
    id: 178,
    title: 'Hobbit, The',
    image: 'https://robohash.org/quiaetsimilique.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 176,
    price: 355.7,
    description: 'massa donec dapibus duis at velit eu est congue elementum',
  },
  {
    id: 179,
    title: 'Keith',
    image:
      'https://robohash.org/perferendisquaeratnisi.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 189,
    price: 287.1,
    description:
      'a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque',
  },
  {
    id: 180,
    title: 'Star Is Born, A',
    image: 'https://robohash.org/numquamnamcorporis.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 180,
    price: 280.4,
    description:
      'pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper',
  },
  {
    id: 181,
    title: 'Nasty Girl, The (schreckliche Mädchen, Das)',
    image:
      'https://robohash.org/rationenonvoluptatem.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 125,
    price: 372.9,
    description:
      'tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar',
  },
  {
    id: 182,
    title: 'Pieces of April',
    image:
      'https://robohash.org/autemteneturdistinctio.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 81,
    price: 31.3,
    description:
      'tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis',
  },
  {
    id: 183,
    title: 'Gunfight at the O.K. Corral',
    image: 'https://robohash.org/utinciduntnemo.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 96,
    price: 359,
    description:
      'turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed',
  },
  {
    id: 184,
    title: 'Wedding Belles',
    image:
      'https://robohash.org/necessitatibussedsaepe.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 31,
    price: 332.5,
    description:
      'eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum',
  },
  {
    id: 185,
    title: 'Talented Mr. Ripley, The',
    image:
      'https://robohash.org/aliquamreiciendisvelit.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 183,
    price: 470.7,
    description:
      'curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque',
  },
  {
    id: 186,
    title: 'Saint, The',
    image:
      'https://robohash.org/distinctiovelitdicta.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 96,
    price: 52.1,
    description:
      'arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio',
  },
  {
    id: 187,
    title: 'Stray Dogs (Sag-haye velgard)',
    image: 'https://robohash.org/providentinodit.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 118,
    price: 41.2,
    description:
      'suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris',
  },
  {
    id: 188,
    title: 'Red Sorghum (Hong gao liang)',
    image: 'https://robohash.org/harummolestiaeea.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 45,
    price: 282.1,
    description:
      'diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget',
  },
  {
    id: 189,
    title: 'Ice Storm, The',
    image:
      'https://robohash.org/voluptatematquearchitecto.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 30,
    price: 284.8,
    description:
      'eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui',
  },
  {
    id: 190,
    title: 'Killing Kasztner',
    image:
      'https://robohash.org/namsapientearchitecto.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 117,
    price: 458.3,
    description:
      'nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla',
  },
  {
    id: 191,
    title: 'Besa (Solemn Promise)',
    image: 'https://robohash.org/doloratquesit.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 78,
    price: 294.4,
    description:
      'proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis',
  },
  {
    id: 192,
    title: 'Strangers, The',
    image: 'https://robohash.org/providentinamet.png?size=100x100&set=set1',
    category: Category.comedy,
    quantity: 50,
    price: 470.6,
    description:
      'nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante',
  },
  {
    id: 193,
    title: 'Panama Hattie',
    image: 'https://robohash.org/hicdolorrepudiandae.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 57,
    price: 184.5,
    description:
      'ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla',
  },
  {
    id: 194,
    title: 'More Wild Wild West',
    image: 'https://robohash.org/fugitofficiisid.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 181,
    price: 372.4,
    description:
      'eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue',
  },
  {
    id: 195,
    title: 'You Can Count on Me',
    image: 'https://robohash.org/odioipsamcorporis.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 77,
    price: 334.2,
    description:
      'eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel',
  },
  {
    id: 196,
    title: 'Dead Ringers',
    image: 'https://robohash.org/estmodimolestiae.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 56,
    price: 53.9,
    description:
      'nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante',
  },
  {
    id: 197,
    title: 'Monty Python Live (Mostly)',
    image:
      'https://robohash.org/repellendusetmollitia.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 35,
    price: 167.6,
    description:
      'morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc',
  },
  {
    id: 198,
    title: 'Ju-on: The Curse 2',
    image: 'https://robohash.org/inametaut.png?size=100x100&set=set1',
    category: Category.sport,
    quantity: 47,
    price: 486.5,
    description:
      'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices',
  },
  {
    id: 199,
    title: 'Men of Respect',
    image: 'https://robohash.org/quisdelectusin.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 76,
    price: 435.5,
    description:
      'pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra',
  },
  {
    id: 200,
    title: 'The Green',
    image: 'https://robohash.org/utoccaecatiquos.png?size=100x100&set=set1',
    category: Category.drama,
    quantity: 156,
    price: 437.2,
    description:
      'congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat',
  },
];
