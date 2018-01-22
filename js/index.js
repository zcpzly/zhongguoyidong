{
    let imgs=document.querySelectorAll(".bn-imgbox li");
    let pagers=document.querySelectorAll(".lunbodian li");
    let banners=document.querySelector(".banner-zhong");
    let jiantous=document.querySelectorAll(".jiantou");
    let lefts=document.querySelector(".banner-zhong .left");
    let rights=document.querySelector(".banner-zhong .right");
    // console.log(jiantou)
    pagers.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<imgs.length;i++){
                pagers[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            ele.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    let n=0;
    function setFn(dir="r") {

        if(dir==="r"){
            n++;
            if(n===imgs.length){
                n=0;
            }
        }else if(dir==="l"){
            n--;
            if(n===-1){
                n=imgs.length-1;
            }
        }

        for(let i=0;i<imgs.length;i++){
            pagers[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        pagers[n].classList.add("active");
        imgs[n].classList.add("active");
    }
    let st=setInterval(setFn,3000);
    banners.onmouseover=function () {
        clearInterval(st);
        // jiantous.style.display("block");
        
    };
    banners.onmouseout=function () {
        st=setInterval(setFn,3000);
    };
    let flag=true;
    lefts.onclick=function () {
        if(flag){
            flag=false;
            setFn("l");
        }
    };
    rights.onclick=function () {
        if(flag){
            flag=false;
            setFn();
        }
    };
    imgs.forEach(function(ele,index){
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    })
}
{
    let flag=true;
    let floors=document.querySelectorAll(".f1");
    let leftlist=document.querySelectorAll(".list_left");
    let leftbar=document.querySelector(".leftbar");
    let topbar=document.querySelector(".topbar");
    window.onscroll=function () {
        if(flag) {
            let st = document.documentElement.scrollTop;
            if (st >= 570) {
                leftbar.style.width = "35px";
                leftbar.style.height = "254px";
                topbar.style.top = "0";
                leftbar.style.display = "block";
            } else {
                leftbar.style.width = "0";
                leftbar.style.height = "0";
                topbar.style.top = "-60px";
                leftbar.style.display = "none";

            }
            floors.forEach(function (val, index) {
                if (st > val.offsetTop - 100) {
                    for (let i = 0; i < leftlist.length; i++) {
                        leftlist[i].classList.remove("active");
                    }
                    leftlist[index].classList.add("active");
                }
            })
        }
    };
    let totop=document.querySelector(".totop");
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let speed=st*50/500;
        let t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },50)
    };
    leftlist.forEach(function (ele,index) {
        ele.onclick=function () {
            let ot = floors[index].offsetTop - 60;
            let now=document.documentElement.scrollTop;
            let speed = (ot - now) * 30 / 300;
            let time = 0;
            flag=false;
            let t = setInterval(function () {
                now += speed;
                time += 30;
                if (time === 300) {
                    clearInterval(t);
                    now = ot;
                    flag=true;
                }
                document.documentElement.scrollTop = now;
            }, 30)
        }
    })
}
// banner 左侧
{
    let box=document.querySelectorAll(".banner-left li");
    let item=document.querySelectorAll(".bn-list .navbox");
    box.forEach(function(value,index){
        value.onmouseover=function(){
            for(let i=0;i<item.length;i++){
                item[i].classList.remove("active")
            }
            item[index].classList.add("active")
        };
        value.onmouseout=function(){
            for(let i=0;i<item.length;i++){
                item[i].classList.remove("active")
            }
        }
    })
}
//优惠专区
let long = document.querySelector('.gd-big');
let long_box = document.querySelector('.gd-right');
let lprev = document.querySelector('.left-bar');
let lnext = document.querySelector('.right-bar');
let num = 4;
let t = setInterval(moveFn, 2000);
function moveFn() {
    if (dir == 'r') {
        num++;
    } else if (dir == 'l') {
        num--;
    }
    long.style.transition = "all 1s";//每次执行的时候都给其加上动画，下标8之后就没有动画了
    long.style.marginLeft = -241 * num + 'px';
}
long.addEventListener('transitionend', function () {
    flag = true;
    if (num == 12) {
        long.style.transition = 'none';//移动到下标为8的时候，取消动画
        long.style.marginLeft = -958 + 'px';
        num = 4;
    }
    if (num == 0) {
        long.style.transition = 'none';//移动到下标为8的时候，取消动画
        long.style.marginLeft = -1916 + 'px';
        num = 8;
    }
});
long_box.onmouseover =function(){
    clearInterval(t);
};
window.addEventListener("blur",function () {
    clearInterval(t);
});
long_box.onmouseout= function(){
    t=setInterval(moveFn,5000);
};
window.addEventListener("focus",function () {
    t=setInterval(moveFn,5000);
});
let flag = true;
let dir = 'r';//默认往右移动
lnext.onclick = function () {
    dir = 'r';//点击右箭头之后，轮播往左移动
    if (flag) {
        flag = false;
        moveFn();
    }
}
lprev.onclick = function () {
    dir = 'l';//点击左箭头之后，轮播往右移动
    if (flag) {
        flag = false;
        moveFn();
    }
}