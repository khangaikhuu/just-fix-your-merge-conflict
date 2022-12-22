console.log("developer 3 changes");

var o = {
  name: "khangai",
  call: function () {
    console.log(`My name is ${this.name}`);
  },
};

console.log(o.name);

o.talk = function () {
  console.log("wha");
};

console.log(o.talk());
console.log(Math.sqrt(9));

let now = new Date();
console.log(now.getDate());
class MyDate {
  constructor() {
    this._date = "2022-12-22";
  }

  getDate() {
    return this._date;
  }
}

class MyDateChild extends MyDate {
  constructor() {
    super();
  }

  setDate(a) {
    this._date = a;
  }
}

let nowMy = new MyDate(); // new object
console.log(nowMy.getDate());

let nowMy2 = new MyDateChild(); // new object
nowMy2.setDate("2020202");
