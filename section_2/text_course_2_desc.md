javascript中的复杂数据类型只有一种，即 对象(object)。

{} 花括号，用来定义一个对象；

对象由花括号包围。在括号内部，属性以键值对的形式，如 key : value  来定义，又称属性名和属性值。属性间由逗号分隔。例如:

    var student={name:'Tom', finish_work:true, id:123};

上面例子中的对象 (student) 有三个属性：name、finish_work 以及 id。

空格和属性间的换行无关紧要。例如可以写成:

    var student = {
        
        name          : 'Tom',
        
        finish_work : true,
        id                : 123
    };

当然正常情况下，我们不要写的这么乱。

对象属性值有两种获取方式:

    name = student.name;

或

    name = student['name'];

都可以将'Tom'取出来赋给变量name。在取值方面，两者是完全等价的。
唯一的区别在于使用场景，后者可以用于动态的取值，我可以通过变量传递我要访问的属性名。

请回答:
