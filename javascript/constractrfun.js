function User(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
    this.get_email = function () {
        return this.email

    }
}

const user = new User("Amal", 20, "amal@example.com");
console.log(user);
const user2 = new User("Ammu", 28, "ammu@example.com");
console.log(user2);
const user3 = new User("Anu", 30, "anu@example.com");
console.log(user3);


user.dep = "IT";
console.log(user);