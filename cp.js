let product=[
    {
        imageUrl:"https://images.bewakoof.com/t320/yogi-panda-designer-hard-cover-for-oneplus-9-500801-1653911348-1.jpg",
        brand:"Bewakoof",
        model:"Yogi Panda Designer Hard Cover for OnePlus 9",
        price:249
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/the-league-designer-hard-cover-for-oneplus-9-503112-1653635605-1.jpeg",
        brand:"Bewakoof",
        model:"The League Designer Hard Cover for OnePlus 9",
        price:249
    },
    {
        imageUrl:"https://images.bewakoof.com/t320/pride-designer-hard-cover-for-oneplus-9-505367-1654065662-1.jpg",
        brand:"Bewakoof",
        model:"Pride Designer Hard Cover for OnePlus 9",
        price:249
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/need-space-teddy-designer-hard-cover-for-oneplus-9-510514-1655359703-1.jpg",
        brand:"Bewakoof",
        model:"Need Space Teddy Designer Hard Cover for OnePlus 9",
        price:299
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/pride-designer-hard-cover-for-iphone-xr-505380-1654065704-1.jpg",
        brand:"Bewakoof",
        model:"Pride Designer Hard Cover for iPhone XR",
        price:299
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/vengeance-designer-hard-cover-for-iphone-xr-503228-1653634024-1.jpeg",
        brand:"Bewakoof",
        model:"Vengeance Designer Hard Cover for iPhone XR",
        price:299
    },
    {
        imageUrl:"https://images.bewakoof.com/t320/the-cat-designer-hard-cover-for-iphone-xr-499753-1652969578-1.jpeg",
        brand:"Bewakoof",
        model:"The Cat Designer Hard Cover for iPhone XR",
        price:299
    },
    {
        imageUrl:"https://images.bewakoof.com/t320/lost-in-music-green-designer-hard-cover-for-iphone-xr-493605-1651243388-1.jpeg",
        brand:"Bewakoof",
        model:"Lost in Music Designer Hard Cover for iPhone XR",
        price:399
    },
    {
        imageUrl:"https://images.bewakoof.com/t320/madara-designer-hard-cover-for-samsung-galaxy-note-10-lite-510447-1655360977-1.jpg",
        brand:"Bewakoof",
        model:"Madara Designer Hard Cover for Samsung Galaxy Note 10 Lite",
        price:299
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/t-rex-roar-designer-hard-cover-for-samsung-galaxy-note-10-lite-507188-1654857833-1.jpg",
        brand:"Bewakoof",
        model:"T-Rex Roar Designer Hard Cover for Samsung Galaxy Note 10 Lite",
        price:249
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/camp-samsung-galaxy-note-10-lite-mobile-cover-samsung-galaxy-note-10-lite-mobile-covers-302288-1620675044.jpg",
        brand:"Bewakoof",
        model:"Camp Samsung Galaxy Note 10 lite Mobile Covers",
        price:199
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/spider-stick-designer-hard-cover-for-xiaomi-mi-10-484802-1649397618-1.jpeg",
        brand:"Bewakoof",
        model:"Spider Stick Designer Hard Cover for Xiaomi Mi 10",
        price:349
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/maths-xiaomi-mi-10-mobile-cover-xiaomi-mi-10-mobile-covers-352840-1620682127.jpg",
        brand:"Bewakoof",
        model:"Maths Xiaomi Mi 10 Mobile Cover",
        price:199
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/mickey-and-minnie-xiaomi-mi-10-mobile-cover-xiaomi-mi-10-mobile-covers-352816-1620682062.jpg",
        brand:"Bewakoof",
        model:"Mickey And Minnie Xiaomi Mi 10 Mobile Cover",
        price:199
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/coolio-vivo-s1-mobile-cover-vivo-s1-mobile-covers-240099-1569589928.jpg",
        brand:"Bewakoof",
        model:"Coolio Vivo S1 Mobile Cover Mobile Cover",
        price:199
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/scorpio-zodiac-designer-hard-cover-for-vivo-s1-504941-1654075057-1.jpg",
        brand:"Bewakoof",
        model:"Scorpio Zodiac Designer Hard Cover for Vivo S1",
        price:249
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/aquarius-zodiac-designer-hard-cover-for-vivo-s1-504471-1654075274-1.jpg",
        brand:"Bewakoof",
        model:"Aquarius Zodiac Designer Hard Cover for Vivo S1",
        price:249
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/stars-and-stripes-wood-oppo-a9-2020-mobile-cover-oppo-a9-2020-mobile-covers-268036-1579524179.jpg",
        brand:"Bewakoof",
        model:"Stars And Stripes Wood Oppo A9 2020 Mobile Cover",
        price:299
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/xx-boy-oppo-a9-2020-mobile-cover-oppo-a9-2020-mobile-covers-268095-1579524339.jpg",
        brand:"Bewakoof",
        model:"Xx Boy Oppo A9 2020 Mobile Cover",
        price:249
    },
    {
        imageUrl:"https://images.bewakoof.com/t540/mafia-oppo-a9-2020-mobile-cover-oppo-a9-2020-mobile-covers-267954-1579523972.jpg",
        brand:"Bewakoof",
        model:"Mafia Oppo A9 2020 Mobile Cover",
        price:299
    },

]
let cartData=JSON.parse(localStorage.getItem("cart")) || []


function display(data){
    var product=document.getElementById("cp_container")
   
     data.forEach(function(elem){
        let imdiv=document.createElement("div")
        imdiv.setAttribute("class","imdiv")
         let card=document.createElement("div");
         card.setAttribute("class","Card");
         let img=document.createElement("img");
         img.src= elem.imageUrl;
         img.setAttribute("id","pimg")

         var brand=document.createElement("h3");
         brand.innerText= elem.brand;
         brand.setAttribute("id","Brand")
         var model=document.createElement("p");
         model.innerText= elem.model;
         model.setAttribute("id","Model")
         var price=document.createElement("p")
         price.innerText="₹ "+elem.price;
        price.setAttribute("id","Price")
         var button=document.createElement("button");
         button.innerText="Add to Bag";
         button.setAttribute("id","but")
         button.addEventListener("click",function(){
             addFun(elem);
         })
         
         imdiv.append(img)
         card.append(imdiv,brand,model,price,button)
         product.append(card);

     })
    
         
     };
     
     function addFun(elem){
        console.log(elem)
       cartData.push(elem)
        localStorage.setItem("cart",JSON.stringify(cartData))
        window.location.href="./Bag.html"
 
    }
     display(product);