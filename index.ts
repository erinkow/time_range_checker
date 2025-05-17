const timeRangeChecker = (time: number, start: number, end: number): boolean => {
    const isValidHour = (h: number) => Number.isInteger(h) && h >= 0 && h <= 23;

    if (!isValidHour(time) || !isValidHour(start) || !isValidHour(end) ) {
        throw new Error('数字は0から23の間の整数で指定してください')
    }

    if (start === end) {
        return time === start;
    } 
    
    if (start < end) {
        return time >= start && time < end;
    } 
    
    // startがendより大きい(日付またぎ)
    return time >= start || time < end;
}

console.log(timeRangeChecker(2, 3, 3));
console.log(timeRangeChecker(5, 22, 6));
console.log(timeRangeChecker(24, 23, 3));