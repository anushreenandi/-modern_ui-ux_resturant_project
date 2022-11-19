import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'Rs500',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'Rs600',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'Rs400',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'Rs200',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'Rs350',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'Rs150',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'Rs166',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'Rs140',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'Rs150',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'Rs170',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };