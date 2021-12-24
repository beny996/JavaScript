console.log(`Nizovi objekata`);

let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};


let arrBlogs = [blog1, blog2, blog3];

//Ispis objekata iz niza pomocu forEach petlje
arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes : ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes : ${objekatBlog.dislikes}</p>`;
});

//Ispis objekata iz niza pomocu for pelje
for(let i = 0; i < arrBlogs.length; i++){
    console.log(arrBlogs[i].title);
}

//Promena vrednosti elementa
// blog3.title = "Napredni HTML tagovi";
// console.log(arrBlogs);

// arrBlogs[2].title = "HTML5 tagovi";
// console.log(arrBlogs);

//Vezbanje

//1. Zadatak Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = arr => {
    let suma = 0;

    //1. Nacin
    // arr.forEach(blog => {
    //     suma += blog.likes;
    // });

    //2. Nacin
    for(let i = 0; i < arr.length; i++){
        suma += arr[i].likes;
    }
    return suma;
}

console.log(`Ukupan broj lajkova: ${sumLikes(arrBlogs)}`);

//2. Zadatak Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosekLajkova = arr => {
    let suma = 0;
    let br = 0;
    arr.forEach(blog => {
        suma += blog.likes;
        br++;
    });
    return br != 0? suma/br : 0;
}
console.log(`Zadatak 2. Prosecan broj lajkova`);
console.log(prosekLajkova(arrBlogs));

//3. Zadatak Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let moreLikes = arr => {
    arr.forEach(blog => {
        if(blog.likes > blog.dislikes){
            console.log(blog.title);
        }
    });
}
console.log(`Zadatak 3.  Blogovi sa vise lajkova nego dislajkova`);
moreLikes(arrBlogs);

//4. Zadatak Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploViseLajkova = arr => {
    arr.forEach(blog => {
        if(blog.likes >= blog.dislikes * 2){
            console.log(blog.title);
        }
    });
}
console.log(`Zadatak 4. Naslovi sa najmanje duplo vise lajkova nego dislajkova`);
duploViseLajkova(arrBlogs);

//5. Zadatak  Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = arr => {
    arr.forEach(blog => {
        if(blog.title.endsWith("!")){
            console.log(blog.title);
        }
    });
}
console.log(`Zadatak 5. Svi naslovi koji se zavrsavaju uzvicnikom`);
uzvicnik(arrBlogs);

