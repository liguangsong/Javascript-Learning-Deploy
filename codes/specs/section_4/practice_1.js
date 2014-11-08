describe('practice-4-1', function () {

    it("the logs is right", function () {

        var v_1 = logs[0]===true;
        var v_2 = logs[1]===true;
        var v_3 = logs[2]===true;
        var v_4 = logs[3]===true;
        expect(v_1).toBe(true);
        expect(v_2).toBe(true);
        expect(v_3).toBe(true);
        expect(v_4).toBe(true);
    });

});