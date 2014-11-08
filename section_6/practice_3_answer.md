- 在第二行添加如下代码：

    var sum_number = 0;
    for (var i = 1; i < 100; i ++)
    {
        if(i%2 == 0)
        {
            sum_number += i;
        }
    }
    console.log('1~100之间的偶数之和为：' + sum_number);