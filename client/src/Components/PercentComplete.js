import React from 'react';

function progressPercentage({ goalHours, progressHours }) {
    const percentageDone = progressHours / goalHours * 100 + "%";

    // const [percentageDone, percentageDoneUpdater] = useState("");



    return(
        <div id="percentage-done" style={{ position: "absolute", top: "55%", left: "43%"}}>
            <h4 style={{position: "relative", textAlign: "center", fontSize: "500%"}}>
                {percentageDone}
            </h4>
        </div>
    )
};

export default progressPercentage;