import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function PercentChart({goalHours, progressHours}) {
 
console.log(goalHours);     

    const state = {
  labels: ["Percent Complete"],
  datasets: [
    {
      label: 'Goal Progress',
      backgroundColor: [
        '#185ADB',
        '#FFC947'
      ],
      hoverBackgroundColor: [
      '#EFEFEF',
      '#0A1931'
      ],
      data: [(goalHours - progressHours), progressHours]
    }
  ]
}
    return(
        <>
        <div className="chart-container" style={{margin: "0 auto", alignItems: "center", height:"50vh", width:"50vh"}}>
       <Doughnut
       data={state}
          options={{
            plugins: {
                doughnutlabel: {
                  labels: [{
                      text: 'CalcPercent',
                      font: {
                          size: 20,
                          weight: 'bold',
                          color: 'white',
                      }
                  }, {
                      text: 'total'
                  }]
              }  
            }
          }
          }
        />
  
        </div>
        </> 
    )

// function CalcPercent(goalHours, progressHours){
//     let percent = " ";
//     if (isNaN(goalHours) || (isNaN(progressHours))){
//         percent = " ";
//     }else {
//         percent = Math.round(((progressHours/goalHours) * 100));
//     }
//     console.log(percent);
//     return percent;
//     };
};

export default PercentChart;
