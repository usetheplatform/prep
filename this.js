const obj1 = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};

const getValue = obj1.getValue;
console.log(getValue()); // undefined

const obj2 = {
  value: 42,
  getValue: function () {
    function innerFunction() {
      return this.value; // this refers to the global object (window in a browser)
    }
    return innerFunction();
  },
};

console.log(obj2.getValue()); // undefined

const obj3 = {
  value: 42,
  getValue: () => {
    return this.value; // this refers to the global object (window in a browser)
  },
};

console.log(obj3.getValue()); // undefined

const obj4 = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};

const getValue = obj4.getValue.bind(obj4);
console.log(getValue()); // 42

const obj5 = {
  value: 42,
  getValue: function () {
    const innerFunction = () => {
      return this.value;
    };
    return innerFunction();
  },
};

console.log(obj5.getValue()); // 42

const obj6 = {
  value: 42,
  getValue: function () {
    const self = this;
    function innerFunction() {
      return self.value;
    }
    return innerFunction();
  },
};

console.log(obj6.getValue()); // 42
