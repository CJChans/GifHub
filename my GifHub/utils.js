/** 
 * 
 * @desc 求指定范围随机整数的方法
 * @function
 * @name randomInt 
 * @param {number} min - 随机区间的最小值
 * @param {number} max - 随机区间的最大值
 * @returns {number} 随机整数
 * */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * 
 * @desc 获取随机rgb颜色的方法
 * @function
 * @name randomRGBColor 
 * @returns {string} rgb随机颜色
 */
function randomRGBColor() {
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

/**
 * 
 * @desc 获取随机十六进制颜色字符串的方法
 * @function
 * @name randomHexColor 
 * @returns {string} 十六进制颜色字符串
 */
function randomHexColor() {
    var hexColorChars = '0123456789abcdef';
    var color = ['#'];
    for (var i = 0; i < 6; i++) {
        var index = Math.floor(Math.random() * hexColorChars.length);
        color.push(hexColorChars[index]);
    }
    return color.join('');
}
1