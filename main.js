function swapheaders(){
    var header1 = document.getElementById("header-1");
    var header2 = document.getElementById("header-2");
    setInterval(function(){
        if(header1.style.display === "block"){
            header1.style.display = "none";
            header2.style.display = "block";
        }else{
            header1.style.display = "block";
            header2.style.display = "none";
        }
    }, 3000);
}

swapheaders();
/*  


*/