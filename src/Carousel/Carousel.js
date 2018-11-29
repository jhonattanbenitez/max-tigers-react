import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://scontent.fclo5-1.fna.fbcdn.net/v/t1.0-9/46691523_376160459796780_3455270819918249984_n.png?_nc_cat=110&_nc_ht=scontent.fclo5-1.fna&oh=cf751936c696a5c659600b9c7cf97f05&oe=5CAE6E3A',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://scontent.fclo5-1.fna.fbcdn.net/v/t1.0-9/46810568_376479569764869_3492400021918187520_n.png?_nc_cat=101&_nc_ht=scontent.fclo5-1.fna&oh=9021b426a62f0c8afcfce6a3e215b26c&oe=5CAA409A',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://scontent.fclo5-1.fna.fbcdn.net/v/t1.0-9/46468079_373529706726522_7431690471862173696_n.png?_nc_cat=102&_nc_ht=scontent.fclo5-1.fna&oh=a540611c8c478ef3e4632b7670246f6e&oe=5CACD834',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;