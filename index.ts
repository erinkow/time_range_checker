const timeRangeChecker = (time: number, start: number, end: number): boolean => {
    const isValidHour = (h: number) => Number.isInteger(h) && h >= 0 && h <= 23;

    if (!isValidHour(time) || !isValidHour(start) || !isValidHour(end) ) {
        throw new Error('数字は0から23の間の整数で指定してください')
    }

    if (start === end) {
        if (start === time) { // timeがstartと等しい
            return true;
        } else { // timeがstartとことなる
            return false; 
        }
    } else if (start < end) {
        if (time >= start && time < end) { //timeがstart以上で且つend未満
            return true;
        } else {
            return false; 
        }
    } else { // startがendより大きい(日付またぎ)
        if (time >= start || time < end ) { // timeがstart未満、またはendより小さい
            return true;
        } else {
            return false;
        }
    }
}

console.log(timeRangeChecker(2, 3, 23));
console.log(timeRangeChecker(5, 22, 6));
console.log(timeRangeChecker(24, 23, 3));