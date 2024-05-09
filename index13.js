let user = {
    name: "John",
    age: 30
};

delete user.name
 console.log(user)


let user = {};

user["name"] = "Myroslav"
user["age"] = 14

console.log(user)

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    console.log( user[key]);
}

for (let key in user){
    console.log( key )
}

class Person{
    age = 22
    name = "Roman"
    
    print(){
        console.log("Hello World")
    }
}

let a = new Person()
console.log(a.age)

a.print()

class Persone{
    age = 23
    names = "Roman"
}


let b = new Persone()
console.log(b.names)

