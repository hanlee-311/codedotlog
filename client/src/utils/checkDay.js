var dayjs = require ('dayjs');

var now = dayjs();

function checkDay() {
    if (now.day() === 1) {
        return true
    }
    else {
        return false
    };
}
    
export default checkDay;