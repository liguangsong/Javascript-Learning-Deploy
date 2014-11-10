describe('practice-7-2', function () {

    it("get the result of add and log", function () {

        console.dir(logs);
        var v1 = logs[0] == 203;
        var v2 = logs[1] == undefined;
        var v3 = typeof (logs[0]) === 'number'
        expect(v1).toBe(true);
        expect(v2).toBe(true);
        expect(v3).toBe(true);
    });

});