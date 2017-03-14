(function(){
    var pEle=document.querySelectorAll("p");
    var test=pEle[3];

    function inView(ele){
        var temp=ele.getBoundingClientRect();
        if(temp.top>=0&&temp.bottom<=window.innerHeight){
            return true;
        }
    }
    function callBack(){
        for(var i=0;i<pEle.length;i++){
            if(inView(pEle[i])){
                if(pEle[i].parentElement.classList.contains("left")){
                    pEle[i].classList.add("move-left");
                }
                pEle[i].classList.add("move");

            }
        }
    }
    window.addEventListener("scroll",callBack);
})();
