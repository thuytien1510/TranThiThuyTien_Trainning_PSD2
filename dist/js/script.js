const dots=document.querySelectorAll(".dot button");function dot(e){let t;for(document.querySelector(".slider").style.background="linear-gradient(to left,rgba(10, 5, 5, 0.8), rgba(0,0,0,0.7), rgba(230,218,212,0)),url("+images[e]+")",t=0;t<dots.length;t++)dots[t].className=dots[t].className.replace("active","");dots[e].className+="active"}let i=0,images=[],slideTime=5e3;function changePicture(){document.querySelector(".slider").style.background="linear-gradient(to left,rgba(10, 5, 5, 0.8), rgba(0,0,0,0.7), rgba(230,218,212,0)),url("+images[i]+")";for(let e=0;e<dots.length;e++)dots[e].className=dots[e].className.replace("active","");dots[i].className+="active",i<images.length-1?i++:i=0,setTimeout(changePicture,slideTime)}images[0]="/src/img/slide0.avif",images[1]="/src/img/slide1.avif",images[2]="/src/img/slide1.jpg",setTimeout(changePicture(),slideTime);
//# sourceMappingURL=script.js.map