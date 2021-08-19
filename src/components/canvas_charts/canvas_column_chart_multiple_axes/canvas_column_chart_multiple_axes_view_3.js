import { Fragment } from "react";

///////Canvas Chart//////////////////
import { CanvasJSChart } from "canvasjs-react-charts";

const CanvasColumnChartMultipleAxesView3 = (props) => {
  let { dataDetails } = props;

  const options = {
    animationEnabled: true,
    title: {
      text: "You Vs Topper",
      fontSize: 20,
    },
    axisY: {
      title: "Difficulty Level",
      titleFontColor: "#4F81BC",
      lineColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      tickColor: "#4F81BC",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      //   itemclick: toggleDataSeries,
    },
    dataPointWidth: 45,
    data: [
      {
        type: "column",
        name: dataDetails[0].toughness,
        legendText: dataDetails[0].toughness,
        showInLegend: true,
        color: "#46fff5",
        dataPoints: [
          { label: "Correct", y: dataDetails[0].Correct },
          { label: "Incorrect", y: dataDetails[0].Incorrect },
          { label: "Unattempted", y: dataDetails[0].Unattempted },
          { label: "Guessed", y: dataDetails[0].Gessed },
        ],
      },
      {
        type: "column",
        name: dataDetails[1].toughness,
        legendText: dataDetails[1].toughness,
        // axisYType: "secondary",
        showInLegend: true,
        color: "#468af9",
        dataPoints: [
          { label: "Correct", y: dataDetails[1].Correct },
          { label: "Incorrect", y: dataDetails[1].Incorrect },
          { label: "Unattempted", y: dataDetails[1].Unattempted },
          { label: "Guessed", y: dataDetails[1].Gessed },
        ],
      },
      {
        type: "column",
        name: dataDetails[2].toughness,
        legendText: dataDetails[2].toughness,
        // axisYType: "secondary",
        showInLegend: true,
        color: "#ffa500",
        dataPoints: [
          { label: "Correct", y: dataDetails[2].Correct },
          { label: "Incorrect", y: dataDetails[2].Incorrect },
          { label: "Unattempted", y: dataDetails[2].Unattempted },
          { label: "Guessed", y: dataDetails[2].Gessed },
        ],
      },
      {
        type: "column",
        name: dataDetails[3].toughness,
        legendText: dataDetails[3].toughness,
        // axisYType: "secondary",
        showInLegend: true,
        color: "#ff0000",
        dataPoints: [
          { label: "Correct", y: dataDetails[3].Correct },
          { label: "Incorrect", y: dataDetails[3].Incorrect },
          { label: "Unattempted", y: dataDetails[3].Unattempted },
          { label: "Guessed", y: dataDetails[3].Gessed },
        ],
      },
    ],
  };

  return (
    <Fragment>
      <div className="canvasColumnChartMultipleAxes_wrapper">
        <CanvasJSChart options={options} />
      </div>
    </Fragment>
  );
};

export default CanvasColumnChartMultipleAxesView3;
