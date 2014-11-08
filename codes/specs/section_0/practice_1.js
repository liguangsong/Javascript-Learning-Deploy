describe('practice-0-1', function () {

    it("console log hello world", function () {
        expect(typeof(logs[0])).toBe('string');
        expect(-1 < logs[0].search("ello") < logs[0].search("orld")).toBe(true);
    });

});




