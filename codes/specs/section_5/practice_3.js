describe('practice-5-3', function () {

    it("the log is '我们在家看电视吧!'", function () {

        var v1 = weather === "多云";
        var v2 = logs[0] == "我们在家看电视吧!";
        var v3 = logs[1] == undefined;
        console.dir(logs);
        expect(v1).toBe(true);
        expect(v2).toBe(true);
        expect(v3).toBe(true);
    });

});