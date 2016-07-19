//页面加载完触发
window.onload = function () {
    var obtn = document.getElementById('btn');
    var timer = null;
//    var isTop = true;

//    window.onscroll = function(){
//        if(!isTop){
//            clearInterval(timer);
//        }
//        isTop = false;
//    }

    obtn.onclick = function(){
         //设置定时器
        timer = setInterval(function(){
            //获取滚动条距离底部的高度
            var sTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(-sTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = sTop + ispeed;
//            isTop = true;
            if(sTop == 0){
                clearInterval(timer);
            }
        },30);
    }
}
