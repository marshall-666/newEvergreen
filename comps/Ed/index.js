function eddyUI(position="absolute", transform="scaleX(1)", mr="0px", height="400px", width="450px"){
    return`
    <img src="/images/sad ed.png" style="
	height: ${height};
	width: ${width};
	margin-right: ${mr};
    position:${position};
    transform:${transform};
    left: 3px;
    top:10px;
    " onclick='eddyUI.chatBubble(this)'>
 
    `
}


eddyUI.chatBubble = () =>{
    document.getElementById("chat").style.opacity="100";
}