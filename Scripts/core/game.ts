console.log("game started");

class Person {
    protected _name : String;

    constructor(name:String){
        this._name = name;
    }

    public speak() : void{
        console.log(this._name + " says hey");
    }
}

class Student extends Person {
    private _studentNum : number;

    constructor(name:String, studentNum:number){
        super(name);
        this._studentNum = studentNum;
    }

    public studies(): void{
        console.log(this._name + " is studying");
    }
}

var person : Person = new Person("jamie");
person.speak();

var student : Student = new Student("Jamie", 300753196);
student.studies();