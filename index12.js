function jd(){
    console.log("vvvi") 
}

jd()

function hg (vvvi, cccv){
    console.log(vvvi+cccv)
}

hg(2, 7)

let map = new Map();

map.set("1", "str1")
map.set(1, "num1")
map.set(true, "bool1")


console.log(map.get(1))
console.log(map.get("1"))

console.log(map.size)
console.log(map)





let reci = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
])


for (let amount of reci.values()) {
    console.log(amount);
}

for (let entry of reci) {
    console.log(entry);
}

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.delete(mary)

console.log(set.size);

for (let user of set) {
    console.log(user.name);
}

