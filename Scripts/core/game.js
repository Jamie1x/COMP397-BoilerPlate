var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log("game started");
var Person = (function () {
    function Person(name) {
        this._name = name;
    }
    Person.prototype.speak = function () {
        console.log(this._name + " says hey");
    };
    return Person;
})();
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, studentNum) {
        _super.call(this, name);
        this._studentNum = studentNum;
    }
    Student.prototype.studies = function () {
        console.log(this._name + " is studying");
    };
    return Student;
})(Person);
var person = new Person("jamie");
person.speak();
var student = new Student("Jamie", 300753196);
student.studies();
//# sourceMappingURL=game.js.map