describe('practice-7-1', function () {

    it("get the type of data and log", function () {

        var v1 = choose == 'a' || choose == 'b' || choose == 'c' || choose == 'd';
        var v2 = typeof(all_data) == 'object';
        var v3 = logs[0].search(typeof all_data[choose]) >= 8;
        var v4 = logs[1] == undefined;

        expect(v1).toBe(true);
        expect(v2).toBe(true);
        expect(v3).toBe(true);
        expect(v4).toBe(true);

    });

});