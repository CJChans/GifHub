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

    //  旋转木马的思路
    // 1. 让每个li标签根据配置单里面对应的数组元素生成各自的样式
    // 2. 单击按钮的时候，改变配置里面的元素位置
    // 3. 让每个li标签根据新的配置单重新生成各自的位置
    // 4. 加节流阀  

    // 把config数组中的每一个对象里面的属性，给对应的每一个li标签设置一遍，然后观察变化

    // 1. 获取标签对象
    var lis = $('#wrap .slide li');
    var arrLeft = $('#arrLeft')
    var arrRight = $('#arrRight')
        // var timeId = null;

    // 2. 鼠标移入大盒子的时候，要显示左右按钮
    $('#wrap').hover(function() {
        clearInterval(timeId)
        $('#arrow').animate({
            'opacity': 1
        }, 300)
    }, function() {
        $('#arrow').animate({
            'opacity': 0
        }, 300)
        timeId = setInterval(function() {
            config.push(config.shift());
            assign();
        }, 1500)
    })

    function assign() {
        // 3. 让每个li标签根据配置单中的数据进行一个样式呈现   因为配置单中的属性是用来控制标签的
        lis.each(function(index, ele) {
            // $(ele).css(config[index])  // 让循环到的每一个标签拥有对应的数组中的样式  也就是每个li都有自己的样式
            // $(ele).animate(config[index],500)
            // 先设置一个层级,再设置一个动画的效果
            $(ele).css('zIndex', config[index].zIndex).stop().animate(config[index], 500)

        })
    }
    assign(); // 
    // 4.给右侧按钮注册事件 当单击右侧按钮的时候，要让所有的标签都移动一下
    $('#arrRight').on('click', function() {
        config.push(config.shift());
        assign();
    })
    $('#arrLeft').on('click', function() {
        config.unshift(config.pop());
        assign();
    })
    timeId = setInterval(function() {
        config.push(config.shift());
        assign();
    }, 1500)
})