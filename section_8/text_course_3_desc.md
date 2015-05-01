对于很多初学者来说，有一些常见的错误，比如：

    for(var i = 0; i < 3; i++){
        var result = [];
        result.push(i);
    }
    console.log(result); //有的初学者以为这里会打印 [0,1,2]，实际上会打印undefined，因为result是在for里面被定义的，外面访问不到
    
再比如： 
   
    var result = [];
    for(var i = 0; i < 3; i++){
        result.push(i);
        console.log(result); //有的初学者以为这里会在循环结束后打印，实际上每一次循环console.log都会被执行
    }
    /**
     * 上面这些代码执行的结果是：
     * [0]
     * [0,1]
     * [0,1,2]
     **/
     
     