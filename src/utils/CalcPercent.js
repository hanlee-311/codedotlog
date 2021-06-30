const goalHours = 23;
const currentHours = 13;

function CalcPercent(){
    let percent = " ";
    if (isNaN(goalHours) || (isNaN(currentHours))){
        percent = " ";
    }else {
        percent = Math.round(((currentHours/goalHours) * 100));
    }
    console.log(percent);
    return percent;
    };

    CalcPercent();