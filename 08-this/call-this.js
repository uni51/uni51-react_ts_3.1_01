const Person = function (name) {
  this.name = name;

  return this;
}

const kanae = Person.call({ gender: 'f' }, 'Kanae'); // { gender: 'f' }をthisとして渡す
console.log(kanae);
