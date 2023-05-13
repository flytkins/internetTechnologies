
// Задание 1
document.write("<br>Задание 1<br>")
const ethereium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
}

function getRate(){
    let curr = document.querySelector('#currency-select');
    document.write(curr.options[curr.options.selectedIndex].value + "'s rate: " + ethereium[curr.options[curr.options.selectedIndex].value] + "<br/>");
}

document.write("<br><br>Задание 2<br>")
// Задание 2
function getValues(massiv){
    let str = Object.values(massiv).join("\', \'");
    document.write("[\'"+str+"\']");
}
getValues({lang:"JavaScript", course:"third"});



//Задание 3
document.write("<br><br>Задание 3<br>")

const adress={
    street: 'Lenina',
    building: 1,
    flat: 40
}

let getInfo=(info)=>{
    Object.keys(info).forEach(element => {
        document.write(element + ": " + info[element]+"<br>");
    });
};

getInfo(adress);

//Задание 4
document.write("<br><br>Задание 4<br>")
let joinArrays=(a, b)=>{
    return Object.assign(a, b);
};

document.write("Объединение объектов etherium и adress:<br>")
getInfo(joinArrays(ethereium, adress));

//задание 6
document.write("<br><br>Задание 6<br>")
class User{
    constructor(_id, _admin){
        this.id = _id;
        this.admin = _admin;
    }

    get Id() {
        return "#"+this.id;
    }
    isAdmin(){
        if(this.admin=="Admin"){
            return true;
        }
        else return false;
    }
    set Name(name){
        this.name = name;
    }
    get Name(){
        return this.name;
    }
    set Email(email){
        this.email = email;
    }
    get Email(){
        return this.email;
    }
}

let User1 = new User(100, "Admin");
let User2 = new User(217, "SimpleUser");
document.write("100 и Admin:<br>"+User1.Id+"  "+User1.isAdmin());
document.write("<br>")
document.write("217 и SimpleUser:<br>"+User2.Id+"  "+User2.isAdmin());


//задание 5
document.write("<br><br>Задание 5<br>")
function createUser(name, email){
    let newUser = new User();
    newUser.Name=name;
    newUser.Email=email;
    return newUser;
}
let u = createUser("Alexandr", "alexandr@gmail.com");
document.write(u.Name+"   "+u.Email)

//Задание 7
document.write("<br><br>Задание 7<br>")

class AreaOfCircle{
    constructor(radius){
        this._radius = radius * radius * 3.14;
    }
    set radius(radius){
        this._radius = radius * radius * 3.14;
    }
    get radius(){
        return this._radius;
    }
}
const area = new AreaOfCircle(2);
document.write(area.radius+"<br>")
area.radius = 10;
document.write(area.radius)


//Задание 8
document.write("<br><br>Задание 8<br>")

class Course{
    constructor(a){
        this.mark = a;
    }
    getCertificate(){
        if(this.getGradle()){
            return "Выдать сертификат";
        }
        else{
            return "Курс не пройден";
        }
    }
    getGradle(){
        if(this.mark == 4 || this.mark == 5){
            return true;
        }
        else{
            return false;
        }
    }
}

let course = new Course(5)
document.write(course.getCertificate()+"<br>")

course = new Course(3)
document.write(course.getCertificate())