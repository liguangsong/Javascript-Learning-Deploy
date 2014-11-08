describe('practice-6-1', function () {

    it("the number of log is （2、4、6、8）", function () {

        var v1 = logs[0].search(2) == 0;
        var v2 = logs[1].search(4) == 0;
        var v3 = logs[2].search(6) == 0;
        var v4 = logs[3].search(8) == 0;
        var v5 = logs[4] == undefined;
        expect(v1).toBe(true);
        expect(v2).toBe(true);
        expect(v3).toBe(true);
        expect(v4).toBe(true);
        expect(v5).toBe(true);
    });

});