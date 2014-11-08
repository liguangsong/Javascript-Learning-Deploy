describe('practice-4-2', function () {

    it("the score is bigger than 60", function () {

        var v1 = 100 >= profile.score && profile.score >= 60 && typeof(profile.score) === "number";
        var v2 = logs[0] === '嘿Tom!你通过了本学期的Maths考试。';
        var v3 = logs[1] == undefined;
        expect(v1).toBe(true);
        expect(v2).toBe(true);
        expect(v3).toBe(true);
    });

});