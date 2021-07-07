import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function Dashboard(){
 let goalHours = 50;
 let progressHours = 45;       

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
      data: [goalHours, progressHours]
    }
  ]
}
    return(
        <>
        <div className="chart-container" style={{margin: "0 auto", alignItems: "center", height:"50vh", width:"50vh"}}>
       <Doughnut
       data={state}
          options={{
            title:{
              responsive: true,	
              display:true,
              text:'Weekly Progress',
              fontSize:20,
              maintainAspectRatio: false,
            },
            legend:{
              display:true,
              position:'right'
            },
            plugins: {
                datalabels: {
                  display: false,   
                },
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
    //   data = {{
    //     labels: ['January', 'February', 'March', 'April', 'May'],
    //     datasets: [{
    //       data: [50, 60, 70, 180, 190]
    //     }]
    //   }}
    //   options = {
    //     {
    //       plugins: {
    //         datalabels: {
    //           display: true,
    //           backgroundColor: '#ccc',
    //           borderRadius: 3,
    //           font: {
    //             color: 'red',
    //             weight: 'bold',
    //           }
    //         },
    //         doughnutlabel: {
    //           labels: [{
    //             text: '550',
    //             font: {
    //                 color: 'black',
    //               size: 20,
    //               weight: 'bold'
    //             }
    //           }, {
    //             text: 'total'
    //           }]
    //         }
    //       }
    //     }
    //   }
        />
  
        </div>
        </> 
    )
       
        //   
     

function CalcPercent(goalHours, progressHours){
    let percent = " ";
    if (isNaN(goalHours) || (isNaN(progressHours))){
        percent = " ";
    }else {
        percent = Math.round(((progressHours/goalHours) * 100));
    }
    console.log(percent);
    return percent;
    };
};

export default Dashboard;