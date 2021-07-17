import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PercentComplete from '../Components/PercentComplete';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function PercentChart() {
 const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  };

  if (!loading && data){
    console.log(data.me.goals[0]);
  };
  const goalHours = data.me.goals[1].goalHours;
  const progressHours = data.me.goals[1].progressHours;
  const state = {
    // labels: ["Percent Complete"],
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
  };

  return data.me ? (
    <>
      <div className="chart-container" style={{ margin: "0 auto", alignItems: "center", height: "50vh", width: "50vh" }}>
      <PercentComplete goalHours={goalHours} progressHours={progressHours} />
        <Doughnut
          data={state}
          options={{
            title: {
              responsive: true,
              display: true,
              text: 'Weekly Progress',
              fontSize: 20,
              maintainAspectRatio: false,
            },
            legend: {
              display: true,
              position: 'right'
            },
            plugins: {
              datalabels: {
                display: true,
              },
            }
          }
          }
        />
      </div>
    </>
  ): null;
};

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


export default PercentChart;