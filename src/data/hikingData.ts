export type HikingData = {
  id: string;
  name: string;
  img: string;
};

export const hikingData = [
  {
    id: 'p1',
    name: 'Red Rock Canyon Rocks',
    img: require('../assets/Hiking/rocks.png')
  },
  {
    id: 'p2',
    name: 'Red Rock Canyon',
    img: require('../assets/Hiking/canyon-overview.png')
  },
  {
    id: 'p3',
    name: 'Red Rock Canyon Face',
    img: require('../assets/Hiking/face.png')
  },
  {
    id: 'p4',
    name: 'Mount Charleston',
    img: require('../assets/Hiking/forest.png')
  },
  {
    id: 'p5',
    name: 'Mount Charleston Pose',
    img: require('../assets/Hiking/forest-me.png')
  }
] 