function chatUI(opacity="0", left="300px", top="25px", test="Hey Travis, your landfill is looking really full! Whats going on?"){
    return`
	<div style="
    height:130px;
    width: 201px;
    display:flex;
    justify-content: center;
    align-items: center;
    left: ${left};
    top: ${top};
    background-color:#C4C4C4;
    border-radius: 10px;
    text-align: center;
    transition:all 1s;
    opacity:${opacity};
    position:absolute;
    "
    id="chat"
    >
    <p style="
    margin:5px;
    "<p>${test}</p>
    </div>  
    `
}