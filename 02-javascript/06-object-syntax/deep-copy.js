const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: { town: 'Maple Town' },      
}

const rolley = JSON.parse(JSON.stringify(patty));
rolley.name = 'Roller Cocker';
rolley.email = 'rolley@maple.town';
rolley.address.town = 'Palm town';

console.log(patty);
// {
//    name: 'Patty Rabbit',
//    email: 'patty@maple.town',
//    address: { town: 'Maple town' },
// }