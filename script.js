class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  CompAge = function (altro) {
    if (this.age > altro.age) {
      return this.firstName + " " + "è più vecchio di" + " " + altro.firstName;
    } else {
      return altro.firstName + " " + "è più vecchio di" + " " + this.firstName;
    }
  };
}
const maria = new User("Maria", "Giordano", "20", "Italia");
const michele = new User("Michele", "Famoso", "25", "Italia");

console.log(michele.CompAge(maria));

console.log(maria.CompAge(michele));

