function reBox(url1="./images/glass.png", url2="", url3="", url4="", heading="Dont Recycle", category="plastic",category2="plastic",category3="plastic",category4="plastic",
bgColor="#f1b6b6" )
{
   return`
   <div style="
   height:50em;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   padding-bottom:2em;
   width:50vw;
   ">

   <h1 style="font-size:5em;">${heading} </h1>
   
   
   <div style="
   display:flex; 
   flex-direction:column;
   justify-content:space-around;
   width:40vw;
   height:65vh;
   margin:1em;
   border-radius:1em;
   align-items:center;
   background-color:${bgColor};
   ">


   <div style="
   width:20em;
   height:5em;
   margin:.5em;
   display:flex;
   justify-content:space-around;
   align-items:center;"> 
   <img style="
   animation:rotate .6s linear infinite;" src="${url1}" alt="">
   <div style="color:white; font-size:2em;" > ${category} </div>
   </div>
   

   
   <div style="
   width:20em;
   height:5em;
   margin:.5em;
   display:flex;
   justify-content:space-around;
   align-items:center;"> 
   <img style="
   animation:rotate .6s linear infinite;" src="${url2}" alt="">
   <div style="color:white; font-size:2em;" > ${category2} </div>
   </div>
   

   
   <div style="
   width:20em;
   height:5em;
   margin:.5em;
   display:flex;
   justify-content:space-around;
   align-items:center;"> 
   <img style="
   animation:rotate .6s linear infinite;" src="${url3}" alt="">
   <div style="color:white; font-size:2em;" > ${category3} </div>
   </div>
   
   <div style="
   width:20em;
   height:5em;
   margin:.5em;
   display:flex;
   justify-content:space-around;
   align-items:center;"> 
   <img style="
   animation:rotate .6s linear infinite;" src="${url4}" alt="">
   <div style="color:white; font-size:2em;" > ${category4} </div>
   </div>
   


   

   
   
  


  </div>
  
   </div>
   

   ` 
}