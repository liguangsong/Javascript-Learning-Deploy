describe('practice-7-4', function () {

    it("print logs are 81、81、9", function () {

        console.dir(logs);
        var v1 = logs[0] == "边长为a为的正方形的面积为：81";
        var v2 = logs[1] == "边长为border_length为的正方形的面积为：81";
        var v3 = logs[2] == "border_length值为：9"
        var v4 = logs[3] == undefined;

        expect(v1).toBe(true);
        expect(v2).toBe(true);
        expect(v3).toBe(true);
        expect(v4).toBe(true);
    });

});