- else if 和 else 是两个辅助 if 条件判断语句的关键字，常用的语句如 if....else if...else 。
- 当需要选择多个代码块中的一个来运行时，使用 if....else if...else 语句将会比纯粹的 if...if...if... 语句有更高效的书写方式。
- 例如:

        if (people <= 10) {
            console.log('我们去玩篮球吧!');
        } else if (people <= 20) {
            console.log('我们去踢足球吧!');
        } else {
            console.log('我也不知道该怎么办.');
        }
- 条件判断语句的执行结果和

        if (people <= 10) {
            console.log('我们去玩篮球吧!');
        }
        if (people > 10 && people <= 20) {
            console.log('我们去踢足球吧!');
        }
        if (people > 20) {
            console.log('我也不知道该怎么办。');
        }

- 相同