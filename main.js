let $li = $(".navigator li ");
let IMAGE_WIDTH = 920;
let index = 0;
let $container = $('.container');


function navigatorClick() {
    for(let i = 0; i < $li.length; i++) {
        $($li[i]).on("click", function(e) {
            $(e.currentTarget).siblings().removeClass("active");
            $(e.currentTarget).addClass("active");
            index = i;
            moveTo(index);
        })
    }
}

function moveTo(index) {
    console.log(index)
    $container.css({
        transform: 'translateX(-'+ index*IMAGE_WIDTH +'px)',
    });
}

navigatorClick();