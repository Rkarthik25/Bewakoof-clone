let cartData=JSON.parse(localStorage.getItem("cart")) || []

let infoarr=JSON.parse(localStorage.getItem("infokey"))
    //console.log(infoarr)



        infoarr.map(function(el){

            let leftside=document.getElementById("leftside")

            let image=document.createElement("img")
            image.src=el.imageUrl
            leftside.append(image)

            document.getElementById("name").append(el.tshirtName)

            document.getElementById("price").append(el.disPrice)


            let add=document.getElementById("addbut1")
            add.addEventListener("click",function(){
                    addFun(el)
            })
        })

        
       



         var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }


       

        function addFun(el){
            console.log(el)
           cartData.push(el)
            localStorage.setItem("cart",JSON.stringify(cartData))
            window.location.href="#"
     
        }
