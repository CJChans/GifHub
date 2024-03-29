$(function() {
    // 这是一个数组，数组里面有一些数据，这些对象是用来控制li标签
    var config = [{
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        }, //0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        }, //1
        {
            "width": 800,
            "top": 120,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        }, //2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        }, //3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }
    ];

    // 1. 获取标签对象
    var lis = $('#wrap .slide li');
    var left = $('#arrLeft')
    var right = $('#arrRight')

    function assign() {
        lis.each(function(index, ele) {
            $(ele).css('zIndex', config[index].zIndex).stop().animate(config[index], 500)
        })
    }
    assign();
    $('#wrap').hover(function() {
        $('#arrow').animate({ opacity: 1 }, 300)
    }, function() {
        $('#arrow').animate({ opacity: 0 }, 300)
    })
    $(right).on('click', function() {
        config.push(config.shift());
        assign();
    })
    $(left).on('click', function() {
        config.unshift(config.pop());
        assign();
    })
})