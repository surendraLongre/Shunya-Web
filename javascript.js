// responsive image maps
; (function (a) { a.fn.rwdImageMaps = function () { var c = this; var b = function () { c.each(function () { if (typeof (a(this).attr("usemap")) == "undefined") { return } var e = this, d = a(e); a("<img />").on('load', function () { var g = "width", m = "height", n = d.attr(g), j = d.attr(m); if (!n || !j) { var o = new Image(); o.src = d.attr("src"); if (!n) { n = o.width } if (!j) { j = o.height } } var f = d.width() / 100, k = d.height() / 100, i = d.attr("usemap").replace("#", ""), l = "coords"; a('map[name="' + i + '"]').find("area").each(function () { var r = a(this); if (!r.data(l)) { r.data(l, r.attr(l)) } var q = r.data(l).split(","), p = new Array(q.length); for (var h = 0; h < p.length; ++h) { if (h % 2 === 0) { p[h] = parseInt(((q[h] / n) * 100) * f) } else { p[h] = parseInt(((q[h] / j) * 100) * k) } } r.attr(l, p.toString()) }) }).attr("src", d.attr("src")) }) }; a(window).resize(b).trigger("resize"); return this } })(jQuery);
// end of responsive image maps

const bar_button = document.querySelector('#bar-button');
const right_btn = document.querySelector('#right');

bar_button.addEventListener('click', function () {
    if (right_btn.style.display == "block") {
        right_btn.style.display = 'none';
    }
    else {
        right_btn.style.display = 'block';
    }

})

$(function () {
    //responsive image maps
    $('img[usemap]').rwdImageMaps();

    $('input').focus(function () {
        $(this).css('background', '#e3e3e3');
    })
    $('input').blur(function () {
        $(this).css('background', 'white');
    })
    $('#footer input').addClass('ui-corner-all');
    $('#footer input').keyup(function () {
        $(this).css('background', 'rgb(203, 231, 246)');
    })

    //show subsystems upon hovering
    $('#vent').mouseover(function () {
        mouse_over('.mechanics', '#vent');
        $('#wind_window').slideDown();
    })
    $('#light_bulb').mouseover(function () {
        mouse_over('.electrical', '#light_bulb');
        $('#green_light').slideDown();
    })
    $('#tv').mouseover(function () {
        mouse_over('.communication', '#tv');
    })
    $('#money_plant').mouseover(function () {
        mouse_over('.sponsership', '#money_plant');
    })
    $('#sofa').mouseover(function () {
        mouse_over('.architecture', '#sofa');
    })
    $('#brick_img').mouseover(function () {
        mouse_over('.civil', '#brick_img');
    })


    // upon mouse leaving
    var array = ['#vent', '#sofa', '#tv', '#money_plant', '#light_bulb', '#brick_img'];

    $('#tv-shunya-logo').mouseover(function () {
        $('.communication').fadeIn();
    })

    $('#vent').mouseout(function () {
        mouse_out('.mechanics', '#vent');
        $('#wind_window').slideUp();
    })
    $('#light_bulb').mouseout(function () {
        mouse_out('.electrical', '#light_bulb');
        $('#green_light').slideUp();
    })
    $('#tv').mouseout(function () {
        mouse_out('.communication', '#tv');
    })
    $('#money_plant').mouseout(function () {
        mouse_out('.sponsership', '#money_plant');
    })
    $('#sofa').mouseout(function () {
        mouse_out('.architecture', '#sofa');
    })
    $('#brick_img').mouseout(function () {
        mouse_out('.civil', '#brick_img');
    })

    function mouse_over(element_class, image_element) {
        $(element_class).fadeIn();
        $('#living-room').css({
            "filter": "blur(8px)"
        })

        for (var i = 0; i != array.length; i++) {
            if (array[i] != image_element) {
                $(array[i]).css('filter', 'blur(8px)');
            }
        }
    }

    function mouse_out(element_class, image_element) {
        $(element_class).fadeOut();
        $('#living-room').css({
            "filter": "none"
        })
        for (var i = 0; i != array.length; i++) {
            if (array[i] != image_element) {
                $(array[i]).css('filter', 'none');
            }
        }
    }

    // go to subsystem page
    // $('.subsystems').click(function () {
    //     $('#subsystems').css({
    //         'background': '#914461',
    //         'color': 'white',

    //     });
    // })

    // $('#select-team').selectmenu();
    $('#to-relative, #subsystem-list').mouseover(function () {
        $(this).css('cursor', 'pointer')
        $('#subsystem-list').css('display', 'block');
    });

    $('#subsystems').mouseout(function () {
        $('#subsystem-list').css('display', 'none');
    });

    // for the team
    $('#team-relative, #team-list').mouseover(function () {
        $(this).css('cursor', 'pointer')
        $('#team-list').css('display', 'block');
    });

    $('#team').mouseout(function () {
        
        $('#team-list').css('display', 'none');
    });

    // for the project
    $('#project-relative, #project-list').mouseover(function () {
        $(this).css('cursor', 'pointer')
        $('#project-list').css('display', 'block');
    });

    $('#project').mouseout(function () {
        
        $('#project-list').css('display', 'none');
    });


    // submitting the subscribe form
    $('#submit').click(function(){
        
    });

    // go to another page on click to contact_desc
    $('#contact_desc').click(function(){
        window.location.href="https://www.google.com/maps/place/Hostel-7,+H-7,+Main+Gate+Rd,+Students'+Residential+Zone,+IIT+Area,+Powai,+Mumbai,+Maharashtra+400076/@19.1343399,72.9057782,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3be7b8078393e705:0x15daa6b3031f1f68!2sHostel-7,+H-7,+Main+Gate+Rd,+Students'+Residential+Zone,+IIT+Area,+Powai,+Mumbai,+Maharashtra+400076!3b1!8m2!3d19.1343348!4d72.9079669!16s%2Fg%2F11c4v181kb!3m5!1s0x3be7b8078393e705:0x15daa6b3031f1f68!8m2!3d19.1343348!4d72.9079669!16s%2Fg%2F11c4v181kb";
    })

    $('#contact_desc').mouseover(function(){
        $(this).css('cursor', 'pointer');
    });


})

function team_redirect() {
    // switch($('#select-team').value) {
    //     case "Architecture": 
    //     window.location = "./subsystem_page.php";
    //     break;
    //     default:
    //         window.location = "./something.php";
    // }
    // alert("How are you");
    var value = document.querySelector('#select-team').value;
    alert(value);
}
// team_redirect();


// translate the images
// image_width:752px, margin: 94
// initial width changes: image1: -940px, 2: -840px,3: 1592px
// left: image2: 940px, iamge3: 1692px

var images=['#carousel-image1', '#carousel-image2', '#carousel-image3'];
var index=0;
translate_active_image=-940;
translate_next1_image=-840;
translate_next2_image=-752;

// left_active_image=

var interval = setInterval(() => {
    
    if(index==0){
        active_image=images[index];
        next_image=images[index+1];
        next_image2=images[index+2];
        index++;
    }

    else if(index==1){
        active_image=images[index];
        next_image=images[index+1];
        next_image2=images[index-1];
        clearInterval(interval);
        index++;
    }

    else if(index==2){
        active_image=images[index];
        next_image=images[index-2];
        next_image2=images[index-1];
        // index=0;
        // clearInterval(interval);
    }
    console.log(index);
    console.log(active_image);
    console.log(next_image);
    console.log(next_image2);

    // if(translate_active_image < -2444){
    //     translate_active_image = -200;
    //     console.log("Value of translate_active_image: ", translate_active_image)
    // }
    translate_active=translate_active_image+"px";
    translate_next1=translate_next1_image+"px";
    translate_next2=translate_next2_image+"px";

    console.log(translate_active);
    console.log(translate_next1);
    console.log(translate_next2);

    $(active_image).css('transform',`translateX(${translate_active})`);
    $(next_image).css('transform', `translateX(${translate_next1})`);
    $(next_image2).css('transform',`translateX(${translate_next2})`);
    
    setTimeout(() => {
        // $(active_image).css('left','2632px');
        translate_active_image-=752;
        translate_next1_image-=752;
        translate_next2_image-=752;
    }, 1000);
}, 2000);

var button_interval = setInterval(() => {
    var current_img=$('.carousel-black');
    var next_img=current_img.next();
    console.log("next_img: "+next_img.length);
    if(next_img.length){
        current_img.removeClass('carousel-black').addClass('text-white');
        next_img.addClass('carousel-black');
    }
    else {
        clearInterval(button_interval);
    }
}, 2000);





// button stats ----------
// button clicks and changes

$('#carousel-button1').click(function(){
    clearInterval(interval);
    clearInterval(button_interval);
    $('#carousel-image1').css('transform', 'translateX(0px)');
    $('#carousel-image2').css('transform','translateX(0px)');
    $('#carousel-image3').css('transform','translateX(0px)');

    $(this).addClass('carousel-black');
    $('#carousel-button2, #carousel-button3').removeClass('carousel-black');

})

$('#carousel-button2').click(function(){
    clearInterval(interval);
    clearInterval(button_interval);
    $('#carousel-image1').css('transform', 'translateX(-940px)');
    $('#carousel-image2').css('transform','translateX(-840px)');
    $('#carousel-image3').css('transform','translateX(-752px)');
    
    $(this).addClass('carousel-black');
    $('#carousel-button1, #carousel-button3').removeClass('carousel-black');
})

$('#carousel-button3').click(function(){
    clearInterval(interval);
    clearInterval(button_interval);
    $('#carousel-image1').css('transform', 'translateX(-1692px)');
    $('#carousel-image2').css('transform','translateX(-1692px)');
    $('#carousel-image3').css('transform','translateX(-1592px)');

    $(this).addClass('carousel-black');
    $('#carousel-button1, #carousel-button2').removeClass('carousel-black');
})