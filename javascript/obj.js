// { property: value };
// this is a global object / represent current object
const obj = { 
    place : "kochi",
    state : "keralam",
    age : 22,
    sampleKey : 234557,
        get_age: function () {
        return this.age
    }
};

const sampleKey = "place";
console.log(obj[sampleKey])
console.log(obj.get_age());

obj[sampleKey] = "Kozhikode";

console.log(obj);

console.log(obj[sampleKey]);
console.log(obj["state"])


// deconstruction

const st1 = {
    name: "amarnath",
    mark: 80

}

const st2 = {
 name: "jishnu"

}

const { name: st_name, mark = 0 } = st2;
console.log(st_name, mark);

//..
const array = [1, 2, 3];
const newArr = [...array];
newArr.push(4)
console.log(array, newArr);

// combainf obj

const prsnlinfo = {
    name: "sharath",
    age: 35
};

const addinfo = {
    city: "calicut",
    country: "india"
};

const prs = { ...prsnlinfo, ...addinfo}
console.log(prs)

const ob = {
 name: aysha,
 mark: 50,
 age: 22

}

