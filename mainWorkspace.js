document.querySelector("#globe").innerHTML += handleEarth("500", "500");

document.querySelector("#clickArrow").innerHTML += scrollBounce();

document.querySelector("#dumpTruck").innerHTML += animateTruck();

document.querySelector("#drivingTruck").innerHTML += truckAnimation();


// page 1, 2 and 3 ends here


// page4 StatPage/Falling garbage/ conversation and graph
document.querySelector("#flies").innerHTML += moveFlies()
document.querySelector("#flies").innerHTML += moveFlies("flyflytwo")
document.querySelector("#flies").innerHTML += moveFlies()
document.querySelector("#flies").innerHTML += moveFlies("flyflytwo")

document.querySelector("#garbageItem1").innerHTML += handleGarbage("0em", "10em");

document.querySelector("#garbageItem2").innerHTML += handleGarbage("0em", "15em", "./images/garbage/appple 1.png", "fallingtwo");

document.querySelector("#garbageItem3").innerHTML += handleGarbage("0em", "15em", "./images/garbage/Bananna Peel.png");

document.querySelector("#garbageItem4").innerHTML += handleGarbage("0em", "5em", "./images/garbage/garbage bag.png", "fallingtwo");



document.querySelector("#pile").innerHTML += animateTrash();
document.querySelector("#statistics").innerHTML += statBar();


document.querySelector("#ed").innerHTML += eddyUI();
document.querySelector("#travis").innerHTML += TravisUI();
document.querySelector("#ed").innerHTML += chatUI("0", "500px");
document.querySelector("#travis").innerHTML += chat2UI("750px");

document.querySelector("#interactiveGraph").innerHTML += animateBarChart();

// page4 StatPage/Falling garbage,conversation and bar graph ends here




// mainCategory starts

document.querySelector("#statItem1").innerHTML += tilecomp("91% of the worlds plastic  is not recycled");  
document.querySelector("#statItem2").innerHTML +=tilecomp("75% of the worlds glass is not recycled");
document.querySelector("#statItem3").innerHTML +=tilecomp("30% of the worlds paper is not recycled");
document.querySelector("#statItem4").innerHTML +=tilecomp("40.6% of the worlds Aluminum is not recycled ");


document.querySelector("#statItem1A").innerHTML += tilecomp("30% of the worlds Vegetables are thrown in the trash");  
document.querySelector("#statItem2B").innerHTML +=tilecomp("15% of the worlds Fruit is thrown in the trash");
document.querySelector("#statItem3C").innerHTML +=tilecomp("9% of the worlds baked goods are thrown in the trash");

document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows").innerHTML += makeArrows();
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");
document.querySelector("#arrows2").innerHTML += makeArrows("&larr;");

document.querySelector("#halfGlobe").innerHTML +=handleEarth("800px", "800px");
document.querySelector("#halfGlobe2").innerHTML +=handleEarth("800px", "800px");




// dos and donts

document.querySelector("#donts").innerHTML += reBox("./Dosimages/dr1.png","./Dosimages/dr2.png","./Dosimages/dr3.png","./Dosimages/dr4.png","Don't Recycle", "Soft-Plastic","Tissue Paper", "Reusables(Donate)", "Styrofoam","#E29F9F");
document.querySelector("#dos").innerHTML += reBox("./Dosimages/r1.png","./Dosimages/r2.png", "./Dosimages/r3.png", "./Dosimages/r4.png", "Recycle", "Glass", "Hard Plastic", "Metal", "Paper","#83ADB7");


document.querySelector("#donts2").innerHTML += reBox("./Dosimages/dc1.png", "./Dosimages/dc2.png","./Dosimages/dc3.png","./Dosimages/dc4.png","Don't Compost", "Glossy Paper", "Dairy", "Meats", "Feces","#E29F9F");

document.querySelector("#dos2").innerHTML += reBox("./Dosimages/c1.png","./Dosimages/c2.png","./Dosimages/c3.png","./Dosimages/c4.png","Compost", "Fruits & Veg.", "Non-Glossy Paper", "Yard Waste", "Eggshells", "#83ADB7");






// main category ends here




// sorting


document.querySelector("#bunchOfTrash").innerHTML += animateSorting();
document.querySelector("#blackbin").innerHTML += animateBlackBin();
document.querySelector("#greenbin").innerHTML += animateGreenBin();
document.querySelector("#bluebin").innerHTML += animateBlueBin();



// sorting ends


// result/ending page
document.querySelector("#compostPit").innerHTML += animatecompost();

document.querySelector("#happyTravis").innerHTML += TravisUI("none",  "scaleX(-1);", "-50px");
document.querySelector("#happyEd").innerHTML += eddyUI("none",  "scaleX(-1);", "-50px");
document.querySelector("#happyTravis").innerHTML += chatUI("100", "630px", "50px", "Now that we know how to recycle we can live like this!");
document.querySelector("#happyEd").innerHTML += chatUI("100", "950px","25px", "Right on!");



// functionality 

//  bottle = document.querySelector(".dragger");
// console.log(bottle)
// bottle.onmousedown = function(event)
// {
//     bottle.style.position = "absolute"
//     bottle.style.zIndex = 1000;
//     document.body.sorting.appendChild(bottle);


// function dragAlong(bodX, bodY)
// {
//     bottle.style.left = bodX - bottle.offsetWidth / 2 + "px";
//     bottle.style.height = bodY - bottle.offsetHeight / 2 + "px";

// }
// dragAlong(event.bodX, event.bodY);


// function onMouseMove (event)
// {
//     dragAlong(event.bodX, event.bodY);
// }

// document.addEventListener('mousemove', onMouseMove);

// bottle.onmouseup = function ()
// {
//     document.removeEventListener('mousemove', onMouseMove );
//     bottle.onmouseup = null;
// }
// bottle.ondragstart = function ()
// {
//     return false;
// }

// }

// 


// shits done yo!
