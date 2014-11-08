describe('practice-2-2', function () {

    it("my_profile value right", function () {

        var v_1 = my_profile[0] === profile["姓名"];
        var v_2 = my_profile[1] === profile["学校"];
        var v_3 = my_profile[2] === profile["学号"];
        var v_4 = my_profile[3] === profile["专业"];

        var log_message = logs[1];

        var v_5_1 = log_message.search(profile["姓名"]);
        var v_5_2 = log_message.search(profile["学校"]);
        var v_5_3 = log_message.search(profile["学号"]);
        var v_5_4 = log_message.search(profile["专业"]);
        var v_5 = -1 < v_5_1 < v_5_2 < v_5_4 < v_5_3;

        expect(v_1).toBe(true);
        expect(v_2).toBe(true);
        expect(v_3).toBe(true);
        expect(v_4).toBe(true);
        expect(v_5).toBe(true);

//        expect(v_1 && v_2 && v_3 && v_4 && v_5).toBe(true);
    });

});