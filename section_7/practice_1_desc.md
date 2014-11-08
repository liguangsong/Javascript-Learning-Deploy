- 函数是由一系列的 JavaScript 语句组成的一个代码块，函数需要被定义。
- 定义时需要指定函数名，并在函数体内写入用来完成指定任务的语句，然后才能调用该函数(通过函数名调用)。
- 例如一个获取字符串长度的函数可以如下定义:

    function get_length(string) {
        var length = string.length;
        return length;
    }
- 第一行通过关键字 function 定义一个函数，函数名为 get_length ，并设置其传入的参数 string。
- 函数体内的代码语句对参数 string 取长度，返回长度的值 length 。
- 调用的方式:

    var result = get_length('hello');
- 通过函数名调用，并且在调用的同时传入参数值。将函数的返回值 5 赋给变量 result 。