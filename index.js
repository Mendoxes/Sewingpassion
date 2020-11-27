// (function($){
//     /* Store the original positions */
//     var d1 = $('.one');
//     var d1orgtop = d1.position().top;
//     var d2 = $('.two');
//     var d2orgtop = d2.position().top;
//     var d3 = $('.three');
//     var d3orgtop = d3.position().top;
//     var d4 = $('.four');
//     var d4orgtop = d4.position().top;

//     /* respond to the scroll event */
//     $(window).scroll(function(){
//         /* get the current scroll position */
//         var st = $(window).scrollTop();

//         /* change classes based on section positions */
//         if (st >= d1orgtop) {
//             d1.addClass('latched');
//         } else {
//             d1.removeClass('latched');
//         }
//         if (st >= d2orgtop) {
//             d2.addClass('latched');
//         } else {
//             d2.removeClass('latched');
//         }
//         if (st >= d3orgtop) {
//             d3.addClass('latched');
//         } else {
//             d3.removeClass('latched');
//         }
//         if (st >= d4orgtop) {
//             d4.addClass('latched');
//         } else {
//             d4.removeClass('latched');
//         }
//     });

// })(window.jQuery);

// $('.sequenced.images .image')
//   .transition({
//     debug     : true,
//     animation : 'jiggle',
//     duration  : 500,
//     interval  : 200
//   })
// ;
let rect = document.querySelector(".two").getBoundingClientRect();


let top3 = rect;

document.querySelector(".one").addEventListener("click", ok);

function ok(){console.log(document.querySelector(".two").getBoundingClientRect().top);}


//section 1-2
window.onscroll = function (){
  let answer = document.querySelector(".two").getBoundingClientRect().top  ;
  let question = document.querySelector(".two").getBoundingClientRect().top / 2000 ;
// console.log(question);
// console.log(answer);
// let double-question = question
// document.querySelector(".two").getBoundingClientRect().top  




 if(question > 0.4 ){
  $(".header").css("opacity", question+0.6);
  $(".header__picture").css("opacity", question+0.6);
}

  else { $(".header").css("opacity", question/2-0.1);
  $(".header__picture").css("opacity", question/2-0.1);
  }


  if(answer < 400){$(".two__flex1-pic").css("opacity", "1");

  $(".two__flex1-pic").css("width", "90%");

}

else{$(".two__flex1-pic").css("opacity", "0");
$(".two__flex1-pic").css("width", "0");
}

  

  

// $(".one").css("background-color", "yellow")}
// background-image: 

// ((question*100)deg, red, yellow);

if (answer < 400){$(".two__flex2-text").css("opacity", "1");}
else{$(".two__flex2-text").css("opacity", "0");}

if (answer<100){$(".two__flex2-text").css("box-shadow", "5px 10px 18px black");



}
else {$(".two__flex2-text").css("box-shadow", "none");



}





$(".one").css("background-image", "linear-gradient("+question*10+"deg,#738fcc, #0cc198)");

// section 3

let answer2 = document.querySelector(".three").getBoundingClientRect().top  ;
let question2 = document.querySelector(".three").getBoundingClientRect().top / 2000 ;
// console.log(question2);
answer3 = answer2/1000;
// console.log(answer2);
// console.log(answer3);

if(answer2 < 800){$(".two__flex2-text").css("opacity", answer3 - 0.5);
$(".two__flex1-pic").css("opacity", answer3 - 0.7);


  
}

if(answer2 < 800){$(".two__flex2-text").css("box-shadow", "none");}



//section 4

let answer6 = document.querySelector(".footer").getBoundingClientRect().top  ;
let question6 = document.querySelector(".footer").getBoundingClientRect().top / 2000 ;
// console.log(question6);
answer7 = answer6/1000;
// console.log(answer6);
console.log(answer7);


if(answer6 > 700){$(".three__flex1-text").css("opacity", answer7 + 0.5);
$(".three__flex1-border").css("opacity", answer7 + 0.5);
$(".three__flex2-border").css("opacity", answer7 + 0.5);
}


if(answer6 < 700){$(".three__flex1-text").css("opacity", answer7 - 0.5);

$(".three__flex1-border").css("opacity", answer7 - 0.5);
$(".three__flex2-border").css("opacity", answer7 - 0.5);
}
// $(".two__flex1-pic").css("opacity", answer3 - 0.7);

}


$('button').click(function () { 

  $('.ui.sidebar')
  .sidebar({
    transition: 'scale down'
  })
  .sidebar('toggle')
;

document.css("background-color", "#303967");
}) 


document.getElementById("au").addEventListener("click", myfunk1);


function myfunk1(){

  $('.ui.sidebar')
  .sidebar({
    transition: 'scale down'
  })
  .sidebar('toggle')
;
setTimeout(function(){location.replace("https://mendoxes.github.io/Sewingpassion/#two");},1000);
}





document.getElementById("au1").addEventListener("click", myfunk2);


function myfunk2(){

  $('.ui.sidebar')
  .sidebar({
    transition: 'scale down'
  })
  .sidebar('toggle')
;
setTimeout(function(){location.replace("https://mendoxes.github.io/Sewingpassion/#three");},1000);
}




document.getElementById("au2").addEventListener("click", myfunk3);


function myfunk3(){

  $('.ui.sidebar')
  .sidebar({
    transition: 'scale down'
  })
  .sidebar('toggle')
;
setTimeout(function(){location.replace("https://mendoxes.github.io/Sewingpassion/#four");},1000);

}



// document.querySelector("three__flex1-border").lastElementChild.css("")