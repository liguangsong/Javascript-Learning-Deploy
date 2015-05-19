前面介绍了对象(object)，形如:

    var student = { name : 'Tom', finish_work : true, id : 123 };
    
这是正常的对象形式，表示变量student有三个不同的属性。

实际上，事物对象（object）可以由一个或者多个属性组成(像数学中的"集合")。比如学生Tom期末成绩的数据可以详细地用对象(object)表示为:

    var grades ={ Maths : 80, Chinese : 82, Biology : 79, Physics : 86};
    
当我们仅需要记录成绩的数值时，对象的另一种格式 "数组(array)"就派上用场了。

    var scores = [ 80, 82, 79, 86];
    
如上所示，数组由方括号包围。在括号内部，数据以独立值的形式 value 来定义。数据值之间由逗号分隔。比如课程名的数组:

    var courses = [ "Maths", "Chinese", "Biology", "Physics"];
    
定义值得方式可以使用声明变量时值得方式，也可以使用变量。
    
    var math = "Maths"
    var courses = [ math, "Chinese", "Biology", "Physics"];


这段代码定义出来的courses跟上面那一段定义出来的courses是一样的。

取courses数组中第一个值的方法是:

    var course = courses[0]; //给course赋值为"Maths"
    
由于数组的下标(序号)是从零开始的，所以第一个项目是[0]，第二个是[1]，以此类推。