describe('practice-3-1', function () {

    it("the result is bigger than 10000", function () {

        var v_1 = typeof(result) === "number" && result > 10000;
        var v_2 = logs[0].search(result-2) == 6;
        var v_3 = logs[1].search(result) == 12;
        var v_4 = logs[2] == undefined;

        expect(v_1).toBe(true);
        expect(v_2).toBe(true);
        expect(v_3).toBe(true);
        expect(v_4).toBe(true);
    });

});