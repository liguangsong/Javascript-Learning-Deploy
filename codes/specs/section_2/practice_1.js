describe('practice-2-1', function () {

    it("type of name is string,type of school is string,type of number is number,type of profinal is string, the first log is number", function () {
        var data = profile;
        expect(typeof data['姓名'] === 'string').toBe(true);
        expect(typeof data['学校'] === 'string').toBe(true);
        expect(typeof data['学号'] === 'number').toBe(true);
        expect(typeof data['专业'] === 'string').toBe(true);
        expect(typeof logs[0] === 'number').toBe(true);
    });

});