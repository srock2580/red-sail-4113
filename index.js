import { navbar, footer } from "./component/nav_foot.js";
document.querySelector(".navbar").innerHTML = navbar();
document.querySelector(".footer").innerHTML = footer();

let anss=document.querySelector(".first");
anss.innerHTML=null;

let data={
    0:'https://images.unsplash.com/photo-1513884923967-4b182ef167ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob3BwaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    1:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    2:'https://images.unsplash.com/photo-1576072446584-4955dfe17b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNob3BwaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

}
  
let imgg=document.createElement("img");
 let j=0;
 setInterval(function (){
     if(j==3){
         j=0;
     }
     imgg.src=data[j];
     anss.append(imgg);
     j++;
    },4000);


        // let left=document.querySelector(".left1");
        // left.innerHTML=null;

        // let data2={
        //     0:'https://n.nordstrommedia.com/id/d3b10906-7d01-47f3-adc2-2098e4ac6600.jpeg?h=700&w=1608',
        //     1:'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNob3BwaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

            
        // }

        let img=document.createElement("img");
 let i=0;
 setInterval(function (){
     if(i==2){
         i=0;
     }
     img.src=data2[i];
     left.append(img);
     i++;
    },4000);



    let lnt=document.getElementById("latinx");
    lnt.innerHTML=null;
    
    let data3={
        0:'https://n.nordstrommedia.com/id/f357e310-4980-4e26-988a-cd792fece56b.jpeg?h=700&w=1608',
        1:'https://n.nordstrommedia.com/id/69fdafac-5f3a-4c62-8e4c-57d911fe24c5.jpeg?h=700&w=1608',
    }

    let img3=document.createElement("img");
    let k=0;
    setInterval(function(){
        if(k==2){
            k=0;
        };

        img3.src=data3[k];
        lnt.append(img3);
        k++;
    },3000);


    

    let sty=document.getElementById("style");
    sty.innerHTML=null;
    
    let data4={
        0:"https://n.nordstrommedia.com/id/3aa68b69-013f-4f60-bbbc-f45b85722335.jpeg?h=400&w=1608",
        1:"https://n.nordstrommedia.com/id/ce9d6820-42f8-4d0c-b45c-0e440e5b6252.jpeg?h=400&w=1608"
    
    }

    let img4=document.createElement("img");
    let l=0;
    setInterval(function(){
        if(l==2){
            l=0;
        };

        img4.src=data4[l];
        sty.append(img4);
        l++;
    },3000);

    let d1=[
        {
    img:"https://n.nordstrommedia.com/id/sr3/f4c8c06d-9352-4453-ad3b-9b9ce8450389.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand:"Caslon",
    price:"INR 5,718.94 – INR 6,156.29",
    discount:"(Upto 34% off)",
    
    
        },
        {
    img:"https://n.nordstrommedia.com/id/sr3/193636d9-19fa-4169-9929-78b43ff98450.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand:"Olaplex",
    price:"INR 6,969",
    discount:"(20% off)",
    
    
    
        },
        {
      img:"https://n.nordstrommedia.com/id/sr3/410fd155-299d-41e2-aa01-67f6bfd1a6df.jpeg?q=45&dpr=2&h=365.31&w=230",
      brand:"BP.",
      price:"INR 1,319",
      discount:"(61% off)",
    
    
    
        },
        {
    img:"https://n.nordstrommedia.com/id/sr3/2263f125-b580-485f-8ccb-5343ef9ea010.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand:"Steve Madden",
    price:"INR 6,157",
    discount:"(46% off)",
    
    
    
        },
        {
    img:"https://n.nordstrommedia.com/id/sr3/c45ee4da-0f2c-4356-a260-b365511dee02.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand:"Steve Madden",
    price:"INR 5,277",
    discount:"(57% off)",
    
    
    
        },
    ]

    const  append1=(d1)=>{


        d1.forEach(function(el){
            let append_here=document.getElementById("deals_h");
            let div=document.createElement("div");
            let image_d=document.createElement("img");
            image_d.src=el.img;
            let brand=document.createElement("p");
            brand.innerText=el.brand;
            brand.style.color="#393939"
            let price=document.createElement("p");
            price.innerText=el.price;
            price.style.fontWeight="700"
            discount=document.createElement("p");
            discount.innerText=el.discount;
           

            div.append(image_d,brand,price,discount);
            append_here.append(div);


        })

    }     
    append1(d1);

    

    


