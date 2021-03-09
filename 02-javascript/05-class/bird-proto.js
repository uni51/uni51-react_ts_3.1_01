function Bird(name) {
  this.name = name;
  this.chirp = function() {
    console.log(`${this.name}が鳴きました。`);
  }

  return this;
}

Bird.explain = function (name) {
  console.log(`${name}は翼があって卵を生みます。`);    
}

function FlyableBird(name) {
  Bird.call(this, name);
  this.fly = function () {
    console.log(`${this.name}が飛びました。`);    
  }
  
  return this;  
}

FlyableBird.prototype.__proto__ = Bird.prototype;

const penguin = new Bird('ペンギン');
penguin.chirp(); // ペンギンが鳴きました。
Bird.explain('カラス'); // カラスは翼があって卵を生みます。

const hawk = new FlyableBird('タカ');
hawk.fly(); // タカがが飛びました。