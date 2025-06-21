import fruitImage from '../../assets/fruit-strw.jpg';
import vanillaImage from '../../assets/Vanilla.jpg';
import fancyStrawberry from '../../assets/fancy-strawberry.jpg';
import vanillaStrawberry from '../../assets/vanilla-strawberry.jpg';
import fruitStrawberry from '../../assets/fruit-strawberry.jpg';
import chocolateImage from '../../assets/chocalate.jpg';
import strawberryImage from '../../assets/strawberry.jpg';
import vitamixImage from '../../assets/vitamix.jpg';
import techniquesImage from '../../assets/techniques.jpg';
import glutenImage from '../../assets/gluten.jpg';
import userImage from '../../assets/user.jpg';

// Common values
const commonDescription =
  'Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery stores, but why not make some yourself at home? Most of us buy ice cream, popsicles, and sorbets at the store because it is easier and making these frozen treats is something that can look a bit intimidating, but it’s actually easier than you may think.';

const commonDesc =
  'No churn ice cream recipes start with a base of heavy whipping cream, condensed milk, and vanilla extract or vanilla bean. And if you want to be creative, just add any of your favorite flavors or ice cream add ins. As for equipment, all you will need is a stand mixer or hand mixer, resealable container and plastic wrap.';

const commonDate = 'March 8, 2024';
const commonAuthor = 'admin';

const cardData = [
  {
    id: 1,
    title: 'The Best Ways to Cool Off This Summer',
    description: commonDescription,
    desc: commonDesc,
    date: commonDate,
    mainImage: fruitImage,
    userImage,
    author: commonAuthor,
    category: 'Ingredients'
  },
  {
    id: 2,
    title: 'French Vanilla Ice Cream For Any Occasion',
    description: commonDescription,
    desc: commonDesc,
    date: commonDate,
    mainImage: vanillaImage,
    userImage,
    author: commonAuthor,
    category: 'Food News'
  },
  {
    id: 3,
    title: 'Fancy Figs? Make this Ice Cream',
    description: commonDescription,
    desc: commonDesc,
    date: commonDate,
    mainImage: fancyStrawberry,
    userImage,
    author: commonAuthor,
    category: 'Gluten Free'
  },
  {
    id: 4,
    title: 'Cabernet Chocolate Chunk Ice Cream',
    description: commonDescription,
    desc: commonDesc,
    date: commonDate,
    mainImage: vanillaStrawberry,
    userImage,
    author: commonAuthor,
    category: 'Food Reviews'
  },
  {
    id: 5,
    title: '5 Dreamy Ice Cream Hacks for Summer',
    description: commonDescription,
    desc: commonDesc,
    date: commonDate,
    mainImage: fruitStrawberry,
    userImage,
    author: commonAuthor,
    category: 'Ingredients'
  },
  {
    id: 6,
    title: 'The Best Ice Cream You’ll Never Eat',
    description: commonDescription,
    desc: commonDesc,
    date:commonDate,
    mainImage: chocolateImage,
    userImage,
    author: commonAuthor,
    category: 'Vegetarian'
  },
  {
    id: 7,
    title: 'What’s Better Than Ice Cream?',
    description: commonDescription,
    desc: commonDesc,
    date: commonDate,
    mainImage: strawberryImage,
    userImage,
    author: commonAuthor,
    category: 'Food Reviews'
  },
  {
    id: 8,
    title: 'Homemade Ice Cream… in a Vitamix?',
    description: commonDescription,
    desc: commonDesc,
    date:commonDate,
    mainImage: vitamixImage,
    userImage,
    author: commonAuthor,
    category: 'Food News'
  },
  {
    id: 9,
    title: '5 Dreamy Ice Cream Hacks for Summer',
    description: commonDescription,
    desc: commonDesc,
    date: commonDate,
    mainImage: techniquesImage,
    userImage,
    author: commonAuthor,
    category: 'Techniques'
  },
  {
    id: 10,
    title: 'The Best Ways to Cool Off This Summer',
    description: commonDescription,
    desc: commonDesc,
    date: commonDate,
    mainImage: glutenImage,
    userImage,
    author: commonAuthor,
    category: 'Gluten Free'
  }
];

export default cardData;
