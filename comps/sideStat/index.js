function statBar ()
{
    return`
    <div onclick="statBar.handleHeight(this)" style="
    position: relative;
    display;flex;
    // left:60em;
    height:12em;
    margin-right:1.5em;
    width:15em;
    background-color:green;
    color: rgba(0, 0, 0, 0);
    padding:1em;
    box-shadow:0 2px 4px black;
    transition:all 2s;
    box-sizind:border-box;
    ">
    
    <span style="font-size: 25px; color:white;">
    32%
    </span>
    of the world currently recycles   
    Based on current levels, 
    
    <span style="font-size: 25px; color:white">
    global waste 
    </span>
    
    production is projected to rise by 70% by 2050.
                More than 
                
    <span style="font-size: 25px; color:white;">
    2 billion tonnes
    </span> 
    of municipal solid waste are generated worldwide per annum
    </div>
    `
}

statBar.handleHeight = (el)=>
{
    el.style.height= "25em"
    el.style.color= "rgb(0, 0, 0)"
}