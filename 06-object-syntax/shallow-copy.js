const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: { town: 'Maple Town' },
}

const rolley = { ...patty, name: 'Roley Cocker' };
rolley.email = 'rolley@maple.town';
rolley.address.town = 'Palm town';

console.log(patty);
// {
//    name: 'Patty Rabbit',
//    email: 'patty@maple.town',
//    address: { town: 'Palm town' },
// }