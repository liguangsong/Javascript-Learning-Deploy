describe('practice-6-2', function () {

    it("the console log info is '下面是张三的个人信息：.....'", function () {
        console.dir(logs);
        var v1 = logs[0] == '下面是张三的个人信息：\n姓名：张三\n年龄：18';
        var v2 = logs[1] == undefined;
        expect(v1).toBe(true);
        expect(v2).toBe(true);
    });

});