export type HikingData = {
  id: string;
  name: string;
  img: string;
};

export const hikingData = [
  {
    id: 'p1',
    name: 'Red Rock Canyon Rocks',
    img: require('../assets/rocks.png')
  },
  {
    id: 'p2',
    name: 'Red Rock Canyon',
    img: require('../assets/canyon-overview.png')
  },
  {
    id: 'p3',
    name: 'Red Rock Canyon Face',
    img: require('../assets/face.png')
  },
  {
    id: 'p4',
    name: 'Mount Charleston',
    img: require('../assets/forest.png')
  },
  {
    id: 'p5',
    name: 'Mount Charleston Pose',
    img: require('../assets/forest-me.png')
  }
] 