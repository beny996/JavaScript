console.log(`Objekti`);

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovim HTML tagovima",
    author: "Vukasin"
};

console.log(blog1);
console.log(typeof blog1);

//Ispis property-a na dva nacina
console.log(blog1.title);
console.log(blog1['title']);

//Izmene property-a na dva nacina
blog1.title = "Osnove HTML-a";
console.log(blog1);
blog1["author"] = "Vukasin Mladzic";
console.log(blog1);

/////////////////////////////////////////////////////

let user = {
    username: "VM",
    age: 25,
    blogs: ["IF - Naredba grananja", "WHILE petlja", "FOR petlja"],
    login: function(){
        console.log(`Ulogovani ste`);
    },
    logout: function(){
        console.log(`Izlogovani ste`);
    },
    logBlogs: function(){
        console.log(this);
        console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(user);
console.log(user.blogs);

let nasloviBlogova = user.blogs;
for(let i = 0; i < nasloviBlogova.length; i++){
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
}

for(let i = 0; i < user.blogs.length; i++){
    document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`;
}

//Poziv metoda
user.login();
user.login();
user.logout();

//Poziv metoda koji u sebi sadrzi 
//This
user.logBlogs();
console.log(this);

let dan = {
    datum: "2021/12/23.",
    kisa: true,
    sunce: false,
    oblacno:true,
    vrednostiTemperature: [-9, -7, -3, 0, 1, 1, 0, 1],
    
    //Prvi
    prosek: function(){
        let suma = 0;
        let br = 0;
        this.vrednostiTemperature.forEach(vrednost => {
            suma += vrednost;
            br++;
        })
        return br != 0?  suma / br : 0;
    },
    //Drugi
    natprosecna: function(){
        let br = 0;
        let arsr = this.prosek();
        this.vrednostiTemperature.forEach(vrednost => {
            if(vrednost > arsr){
                br++;
            }
        })
        return br;
    },
    //Treci
    brojMaksimalna: function(){
        let br = 0;
        let max = this.vrednostiTemperature[0];
        this.vrednostiTemperature.forEach(vrednost => {
            if(max < vrednost){
                max = vrednost;
            }
        })
        this.vrednostiTemperature.forEach(vrednost => {
            if(max == vrednost){
                br++;
            }
        })
        return br;
    },
    //Cetvrti
    temperatura: function(a, b){
        let br = 0;
        this.vrednostiTemperature.forEach(vrednost => {
            if(vrednost > a && vrednost < b){
                br++;
            }
        })
        return br;
    },
    //Peti
    iznadProseka: function(){
        let br = this.natprosecna();
        let broj = this.vrednostiTemperature.length;
        if(br > (broj /2)){
            return true;
        }
        else{
            return false;
        }
    },
    //Sesti
    leden: function(){
       let res = true;
       this.vrednostiTemperature.forEach(vrednost => {
           if(vrednost <= 0){
               res = true;
           }
           else{
               res = false;
           }
       })
       return res;
    },
    //Sesti - Jelena
    leden2: function(){
        for(let i = 0; i < this.vrednostiTemperature.length; i++){
            if(this.vrednostiTemperature[i] > 0){
                return false;
            }
        }
        return true;
    },
    //Sedmi
    tropski: function(){
        let res = true;
        this.vrednostiTemperature.forEach(vrednost => {
            if(vrednost >= 24){
                res = true;
            }
            else{
                res = false;
            }
        })
        return res;
    },
    //Osmi
    nepovoljan: function(){
       
    },
    //Deveti
    neuobicajen: function(){
        let res = true;
        this.vrednostiTemperature.forEach(vrednost => {
            if((vrednost < -5 && this.kisa == true) || (vrednost > 25 && this.oblacno == true) || (this.kisa == true && this.sunce == true && this.oblacno == true)){
                res = true;
            }
            else{
                res = false;
            }
        })
        return res;
    }
    
};

console.log(dan.prosek());
console.log(dan.natprosecna());
console.log(dan.brojMaksimalna());
console.log(dan.temperatura(-2, 1));
console.log(dan.iznadProseka());
console.log(dan.leden());
console.log(dan.tropski());
console.log(dan.neuobicajen());
