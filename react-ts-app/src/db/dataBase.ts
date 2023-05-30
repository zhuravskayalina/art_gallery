import { Painting } from './types';
import InnocenceImg from '../assets/images/paintings/Innocence.png';
import WallowingBreeze from '../assets/images/paintings/WallowingBreeze.png';
import JResistance from '../assets/images/paintings/JResistance.png';
import TheVonnegut from '../assets/images/paintings/TheVonnegut.png';
import WarmBasket from '../assets/images/paintings/WarmBasket.png';

const paintings: Painting[] = [
  {
    id: 1,
    name: 'Innocence',
    author: 'Ria Arante',
    image: InnocenceImg,
    info: 'Oil on canvas, 2020',
    description: `Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.`,
    size: {
      width: 30,
      height: 40,
    },
    price: 200,
  },
  {
    id: 2,
    name: 'Wallowing Breeze',
    author: 'Hettie Richards',
    image: WallowingBreeze,
    info: 'Oil on canvas, 2008',
    description: `Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.`,
    size: {
      width: 50,
      height: 40,
    },
    price: 600,
  },
  {
    id: 3,
    name: 'J Resistance',
    author: 'Ria Arante',
    image: JResistance,
    info: 'Gouache on paper, 2018',
    description: `Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.`,
    size: {
      width: 20,
      height: 40,
    },
    price: 240,
  },
  {
    id: 4,
    name: 'Warm Basket',
    author: 'Flora Powers',
    image: WarmBasket,
    info: 'Acrylic on wood, 2014',
    description: `Nice and warm. Feels like home.`,
    size: {
      width: 40,
      height: 50,
    },
    price: 300,
  },
  {
    id: 5,
    name: 'The Vonnegut ',
    author: 'Ria Arante',
    image: TheVonnegut,
    info: 'Oil on canvas, 2018',
    description: `Vonnegut. That's all.`,
    size: {
      width: 40,
      height: 40,
    },
    price: 400,
  },
];

export default paintings;
