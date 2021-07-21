import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PercentComplete from '../Components/PercentComplete';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import GoalInformation from './GoalInformation';

function PercentChart({ setGoalId, goalId }) {
  const { loading, data } = useQuery(QUERY_ME);
 
  if (loading) {
    return <div>Loading...</div>;
  };

  if (!loading && data) {
    console.log(data.me.goals);
  };
  const goalArray = data?.me?.goals;
  const selectedGoal = goalArray.find(goal => goal._id == goalId);

  const language = selectedGoal? selectedGoal.language : goalArray[0].language;
  const goalHours = selectedGoal ? selectedGoal.goalHours : goalArray[0].goalHours;
  const progressHours = selectedGoal ? selectedGoal.progressHours : goalArray[0].progressHours;
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
        <GoalInformation goalHours={goalHours} progressHours={progressHours} language={language}/>
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
  ) : null;
};


export default PercentChart;