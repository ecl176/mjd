/*
 * @Author: dell
 * @Date:   2016-08-20 11:50:57
 * @Last Modified by:   ecl176
 * @Last Modified time: 2016-12-27 14:00:34
 */

window.onload = function() {
    search();
    //secondKill();
    scrollPic();
};
/*头部搜索*/
var search = function() {
    /*搜索框对象*/
    var search = document.getElementsByClassName('jd_header_box')[0];
    /*banner对象*/
    var banner = document.getElementsByClassName('jd_banner')[0];
    /*高度*/
    var height = banner.offsetHeight;

    window.onscroll = function() {
        var top = document.body.scrollTop;
        /*当滚动高度大于banner的高度时候颜色不变*/
        if (top > height) {
            search.style.background = "rgba(201,21,35,0.85)";
        } else {
            //var op = top/height * 0.85;
            search.style.background = "rgba(201,21,35,0.9)";
        }
    };
};
/*秒杀倒计时*/
var secondKill = function() {
    /*复盒子*/
    var parentTime = document.getElementsByClassName('sk_time')[0];
    /*span时间*/
    var timeList = parentTime.getElementsByClassName('num');

    console.log(timeList.length);

    var times = 7 * 60 * 60;
    var timer;
    timer = setInterval(function() {
        times--;

        var h = Math.floor(times / (60 * 60));
        var m = Math.floor(times / 60 % 60);
        var s = times % 60;

        console.log(h + '-' + m + "-" + s);

        timeList[0].innerHTML = h > 10 ? Math.floor(h / 10) : 0;
        timeList[1].innerHTML = h % 10;

        timeList[2].innerHTML = m > 10 ? Math.floor(m / 10) : 0;
        timeList[3].innerHTML = m % 10;

        timeList[4].innerHTML = s > 10 ? Math.floor(s / 10) : 0;
        timeList[5].innerHTML = s % 10;
        if (times <= 0) {
            clearInterval(timer);
        }
    }, 1000);

};

//轮播图
var scrollPic = function() {
    var banner = document.getElementsByClassName('jd_banner')[0];
    var width = banner.offsetWidth;
    var imgBox = banner.getElementsByTagName('ul')[0];
    var pointBox = banner.getElementsByTagName('ul')[1];
    var pointList = pointBox.getElementsByTagName('li');



    var index = 1;
    var timer;


    //加过渡
    var addTransition = function() {
        imgBox.style.transition = "all .3s ease 0s";
        imgBox.style.webkitTransition = "all .3s ease 0s";
    }

    //清除过渡
    var removeTransition = function() {
            imgBox.style.transition = 'none';
            imgBox.style.webkitTransition = "none";
        }
        //改变位置
    var setTransform = function(t) {
        imgBox.style.transform = 'translateX(' + t + 'px)';
        imgBox.style.webkitTransform = 'translateX(' + t + 'px)';
    }

    timer = setInterval(function() {
        if (index > 0 && index < 9) {
            pointList[index - 1].setAttribute("class", 'bgc');
        }
        index++;
        addTransition();
        setTransform(-index * width);
    }, 1000);

    imgBox.addEventListener('webkitTransitionEnd', function() {


        if (index >= 9) {
            index = 1;
        } else if (index <= 0) {
            index = 8;
        }
        removeTransition();
        setTransform(-index * width);
    }, false); //可以多次绑定
    imgBox.addEventListener('transitionEnd', function() {
        if (index >= 9) {
            index = 1;
        } else if (index <= 0) {
            index = 8;
        }
        removeTransition();
        setTransform(-index * width);
    }, false);
};