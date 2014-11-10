describe('practice-7-3', function () {

    it("print logs by function", function () {

        console.dir(logs);
        var v1 = logs[0] == "m的值：9";
        var v2 = logs[1] == "n的值：8";
        var v3 = logs[2] == undefined;

        expect(v1).toBe(true);
        expect(v2).toBe(true);
        expect(v3).toBe(true);
    });

});