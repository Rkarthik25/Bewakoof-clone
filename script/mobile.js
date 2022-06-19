
    const obj= [
        {
          Question: "Is a back cover necessary for the phone?",
          Answer: "Yes, the back covers are essential for the phones as it protects them from accidents; it will undoubtedly save the smartphone. Apart from safeguarding the phone, the excellent appearances of the covers also make it much more impressive, and you can opt for a different look according to the dress code or daily basis."
          }
        
      ,
        {
          Question: "Best Site to buy Mobile Covers Online?",
          Answer: "Bewakoof is the precise place for everyone to buy phone covers online as it has mobile covers of different models and has them in various shades, colors, designs, patterns, etc at affordable rates. This makes it more attractive for buyers. Explore now."
          }
        
      ,
        {
          Question: "Which kind of cover is best for mobile? Or Which material is best for a mobile cover?",
          Answer: "For optimal protection of your phone, it is important to buy a cover made of hard plastic, PU material, or silicone. Phone cases made from these materials protect your device from damage caused by impact, regular wear and tear, accidental drops, and more."
          }
        
      ,
        {
          Question: "What kinds or types of back covers do we have?",
          Answer: "Bewakoof has a wide range of designs and prints to choose from. You can select from funky prints in all categories including Anime, Aesthetic, Floral, Marble, Official Collaborations, and more."
          }
        
      ,
        {
          Question: "Which type of cover is better to protect our mobile phones?",
          Answer: "Impact-resistant hard covers are ideal for all mobile phones. They protect your phone from accidental drops, bumps, dents, and scratches."
          }
        
      ,
        {
          Question: "What quality mobile covers does Bewakoof offer?",
          Answer: "Bewakoof offers top-notch covers that resist damage without compromising on its looks. Our covers are made using premium plastic that keeps your phone safe and retains its looks for a prolonged period."
          }
        
      ,
        {
          Question: "What offers & deals does Bewakoof provide for Mobile Covers?",
          Answer: "Bewakoof has various ongoing offers at all times. We offer discount and cashback offers to both our new and existing customers because we believe in spreading happy, good vibes."
          }
        
      ,
        {
          Question: "Why should you buy a mobile case from Bewakoof?",
          Answer: "Your phone endures anxious throws, dents, scratches, smudges, and many other tortures that not only break your heart but oftentimes, your phone screen too. Bewakoof is a one-stop shop to buy durable, affordable, and quirky mobile covers that not only catch the attention of your peers but ensure optimal protection to your phone."
          }
        
      ,
        {
          Question: "Does Bewakoof provide returns & exchanges on mobile covers?",
          Answer: "Yes; Bewakoof believes in ensuring the happiness and satisfaction of the customers. Therefore, we provide 15 Days Easy Returns, Refunds, and Exchange on mobile covers and across other categories too."
          }
        
      ,
        {
          Question: "What merchandise collection do we have in the mobile case collection?",
          Answer:"Bewakoof's mobile covers collection is versatile and comes with a plethora of options for you to choose the ideal buddy for your phone. Apart from exciting collaborations with Marvel, Disney, DC, and Looney Tunes, Bewakoof also deals with minimalistic covers to appease your aesthetics and quirky themes to outshine the 'quirk' in you!"
          }
        
      ,
        {
          Question: "Which payment models are available at Bewakoof?",
          Answer: "To enhance a smooth shopping experience, we bring to you multiple payment models like e-wallet, card, net banking, UPI, and even cash on delivery. Happy shopping!"
          }
        
      ,
        {
          Question: "What is the price range of mobile covers?",
          Answer: "Bewakoof deals with pocket-friendly mobile covers to safely tuck your gadget into your pocket. Our printed mobile covers come within the price range of Rs. 249 to Rs. 299. Hurry up and give your phone a new quirky look!"
          }
        
      ]
  
      function display(data){
      var append=document.getElementById("Faq")
  
       data.forEach(function(elem){
         let p=document.createElement("p")
         p.innerText=elem.Answer;
         let h2=document.createElement("h3")
         h2.setAttribute("id","question")
         h2.innerText=elem.Question;
        //  console.log(h2,p)
         append.append(h2,p)
       });
    
  
       }
       display(obj);

     function myfun(){
        location.href="cp.html";
        }
     
  