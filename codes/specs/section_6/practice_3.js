describe('practice-6-3', function () {

    it("the console log info is '1~100之间的偶数之和为：2450'", function () {
        console.dir(logs);
        var v1 = logs[0] == '1~100之间的偶数之和为：2450';
        var v2 = logs[1] == undefined;
        expect(v1).toBe(true);
        expect(v2).toBe(true);
    });

});