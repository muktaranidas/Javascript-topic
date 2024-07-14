function User (first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age
    this.fullName = function(){
        return this.firstName + " " + this.lastName
    }
}
const mukta = new User("Mukta" , "Thakur", 26);
User.prototype.department = "SWE"
console.dir(User)
