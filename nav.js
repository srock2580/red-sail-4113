let cont = document.getElementById("ap")

let main = document.getElementById("main")

// sale sec

let sale = document.getElementById("sale");
sale.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// women sec

let women = document.getElementById("women");
women.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});


// man sec

let men = document.getElementById("men");
men.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// kids sec

let kids = document.getElementById("kids");
kids.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// young sec


let young = document.getElementById("young");
young.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// active sec

let active = document.getElementById("active");
active.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// home sec

let home = document.getElementById("home");
home.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// beauty sec

let beauty = document.getElementById("beauty");
beauty.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// design sec

let design = document.getElementById("design");
design.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// gifts sec

let gifts = document.getElementById("gifts");
gifts.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// thread sec

let thread = document.getElementById("thread");
thread.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});

// brands sec

let brands = document.getElementById("brands");
brands.addEventListener("click", function () {
    // cont.innerHTML = null
    main.innerHTML = null
    let div = document.createElement("div");
    div.className = "over"

    let women = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Women";
    let p1=document.createElement("p");
    p1.innerText="New Markdowns";
    let p2=document.createElement("p");
    p2.innerText="Clothing";
    let p3=document.createElement("p");
    p3.innerText="Shoes";
    let p4=document.createElement("p");
    p4.innerText="Handbags & Wallets";
    let p5=document.createElement("p");
    p5.innerText="Jewelry";
    let p6=document.createElement("p");
    p6.innerText="Beauty";
    let p7=document.createElement("p");
    p7.innerText="Contemporary";
    let p8=document.createElement("p");
    p8.innerText="Designer";
    let p9=document.createElement("p");
    p9.innerText="Plus";
    let p10=document.createElement("p");
    p10.innerText="Petite";
    let p11=document.createElement("p");
    p11.innerText="Maternity";
    let p12=document.createElement("p");
    p12.innerText="Juniors";

    women.append(h3,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


    let Men = document.createElement("div");
    let mh3 = document.createElement("h3");
    mh3.innerHTML = "Men";
    let mp1=document.createElement("p");
    mp1.innerText="New Markdowns";
    let mp2=document.createElement("p");
    mp2.innerText="Clothing";
    let mp3=document.createElement("p");
    mp3.innerText="Shoes";
    let mp4=document.createElement("p");
    mp4.innerText="Handbags & Wallets";
    let mp5=document.createElement("p");
    mp5.innerText="Jewelry";
    let mp6=document.createElement("p");
    mp6.innerText="Beauty";
    let mp7=document.createElement("p");
    mp7.innerText="Contemporary";
    let mp8=document.createElement("p");
    mp8.innerText="Designer";
    let mp9=document.createElement("p");
    mp9.innerText="Plus";
    let mp10=document.createElement("p");
    mp10.innerText="Petite";
    let mp11=document.createElement("p");
    mp11.innerText="Maternity";
    let mp12=document.createElement("p");
    mp12.innerText="Juniors";
    
   Men.append(mh3,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12);
    // main.append(women,Men)

    let Kids = document.createElement("div");
    let kh3 = document.createElement("h3");
    kh3.innerHTML = "Kids";
    let kp1=document.createElement("p");
    kp1.innerText="New Markdowns";
    let kp2=document.createElement("p");
    kp2.innerText="Clothing";
    let kp3=document.createElement("p");
    kp3.innerText="Shoes";
    let kp4=document.createElement("p");
    kp4.innerText="Handbags & Wallets";
    let kp5=document.createElement("p");
    kp5.innerText="Jewelry";
    let kp6=document.createElement("p");
    kp6.innerText="Beauty";
    let kp7=document.createElement("p");
    kp7.innerText="Contemporary";
    let kp8=document.createElement("p");
    kp8.innerText="Designer";
    let kp9=document.createElement("p");
    kp9.innerText="Plus";
    let kp10=document.createElement("p");
    kp10.innerText="Petite";
    let kp11=document.createElement("p");
    kp11.innerText="Maternity";
    let kp12=document.createElement("p");
    kp12.innerText="Juniors";
    
   Kids.append(kh3,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9,kp10,kp11,kp12);
    

    let All = document.createElement("div");
    let ah3 = document.createElement("h3");
    ah3.innerHTML = "All";
    let ap1=document.createElement("p");
    ap1.innerText="New Markdowns";
    let ap2=document.createElement("p");
    ap2.innerText="Clothing";
    let ap3=document.createElement("p");
    ap3.innerText="Shoes";
    let ap4=document.createElement("p");
    ap4.innerText="Handbags & Wallets";
    let ap5=document.createElement("p");
    ap5.innerText="Jewelry";
    let ap6=document.createElement("p");
    ap6.innerText="Beauty";
    let ap7=document.createElement("p");
    ap7.innerText="Contemporary";
    let ap8=document.createElement("p");
    ap8.innerText="Designer";
    let ap9=document.createElement("p");
    ap9.innerText="Plus";
    let ap10=document.createElement("p");
    ap10.innerText="Petite";
    let ap11=document.createElement("p");
    ap11.innerText="Maternity";
    let ap12=document.createElement("p");
    ap12.innerText="Juniors";


    
    let close = document.createElement("button");
    close.innerText = "X"
    close.addEventListener("click", function () {
        div.style.display = "none"
    })

    All.append(ah3,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,ap9,ap10,ap11,ap12);
    div.append(women,Men,Kids,All,close);
    main.append(div)

    if (div.style.display === "none") {
        div.style.display = "block"
    }

});


// let ss=document.getElementById("ss")
// let sign=document.getElementById("signIn");
// sign.addEventListener("mouseover",function(){
//     ss.innerHTML=null
//     let div=document.createElement("div");
//     div.className="signDiv"

//     let h2=document.createElement("h2");
//     h2.innerText="SignIn | Create Account"

//     let p1=document.createElement("p");
//     p1.innerText=`purchase`;

//     let p2=document.createElement("p");
//     p2.innerText=`wishlist`;

//     div.append(h2,p1,p2);
//     ss.append(div)

//     if (div.style.display === "none") {
//         div.style.display = "block"
//     }else{
//         div.style="none"
//     }

// });