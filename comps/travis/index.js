function TravisUI(position="absolute", transform="scaleX(1)", mr="0px"){
    return`
    <img src="/images/trashy travis.png" style="
    height:450px;
    width 350px;
    margin-left:${mr};
    position:${position};
    transform:${transform};
    top:250px;
    
    " onclick='TravisUI.chatBubble()'>
   
    `
}


TravisUI.chatBubble = () =>{
    document.getElementById("chat2").style.opacity="100";
}
