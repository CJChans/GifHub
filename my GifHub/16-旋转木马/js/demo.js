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
            var lis = $('.wrap ul li')