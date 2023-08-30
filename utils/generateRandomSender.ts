import uuid from 'react-native-uuid';

// function for creating random sender name according to test task description

const animals = [
  { name: 'Giraffe', avatarSrc: 'https://images.photowall.com/products/70949/funny-giraffe.jpg?h=699&q=85' },
  { name: 'Penguin', avatarSrc: 'https://content.api.news/v3/images/bin/e82c17d7312b3496f4300d416bd8ce1d' },
  { name: 'Elephant', avatarSrc: 'https://media.istockphoto.com/id/1397520194/photo/elephant-riding-a-scooter.jpg?s=612x612&w=0&k=20&c=ouLX-kS2kCBzLrrCq82Zqu-F01F20ZuAowHcpKbK53Q=' },
  { name: 'Platypus', avatarSrc: 'https://i.pinimg.com/originals/10/8f/7a/108f7aa6aa59c941a79ba804aa171b51.jpg' },
  { name: 'Hedgehog', avatarSrc: 'https://i.pinimg.com/564x/9f/2c/0a/9f2c0a3d50cd7581adaaba726b78b8c9.jpg' },
  { name: 'Lemur', avatarSrc: 'https://cdn.images.express.co.uk/img/dynamic/80/590x/secondary/82109.jpg' },
  { name: 'Narwhal', avatarSrc: 'https://i.natgeofe.com/k/57ae9fdd-2aae-45b8-9e14-af7299fdebcb/narwhal_alone-crop_16x9.jpg' },
  { name: 'Zebra', avatarSrc: 'https://media.istockphoto.com/id/1129073131/de/foto/lachendes-zebra.jpg?s=612x612&w=0&k=20&c=OQwX52pTamrWjkbkmNkHZchgQ3yXbh5IhbhaL7H5lD8=' },
  { name: 'Otter', avatarSrc: 'https://media.istockphoto.com/id/644032024/de/foto/klatschen-otter.jpg?s=612x612&w=0&k=20&c=L5tG3V-lv6RTErv3gKfuvWnCr19k08u_yNlKoymTVd8=' },
 ];
const adjectives = [
  'Looney',
  'Goofy',
  'Quirky',
  'Wacky',
  'Zany',
  'Whimsical',
  'Eccentric',
  'Kooky',
  'Nutty',
  'Bizarre',
];

export const generateRandomSender = () => {
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  const randomAdjective= adjectives[Math.floor(Math.random() * adjectives.length)];

  return {
    id: uuid.v4() as string,
    name: `${randomAdjective} ${randomAnimal.name}`,
    avatarSrc: randomAnimal.avatarSrc,
  };
}
