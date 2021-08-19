import { Fragment } from "react";

///////Canvas Chart//////////////////
import { CanvasJSChart } from "canvasjs-react-charts";

const CanvasColumnChartMultipleAxes = (props) => {
  let { userData, topperData, type } = props;

  const options = {
    animationEnabled: true,
    title: {
      text: "You Vs Topper",
      fontSize: 20,
    },
    axisY: {
      title: type,
      titleFontColor: "#b5b3ba",
      lineColor: "#b5b3ba",
      labelFontColor: "#b5b3ba",
      tickColor: "#b5b3ba",
    },
    axisY2: {
      title: type,
      titleFontColor: "#b5b3ba",
      lineColor: "#b5b3ba",
      labelFontColor: "#b5b3ba",
      tickColor: "#b5b3ba",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      //   itemclick: toggleDataSeries,
    },
    dataPointWidth: 70,
    data: [
      {
        type: "column",
        name: "You",
        legendText: "You",
        showInLegend: true,
        color: "#6d48ef",
        // dataPoints: [
        //   { label: "Physics", y: 100 },
        //   { label: "Chemistry", y: 150 },
        //   { label: "Mathematics", y: 100 },
        // ],
        dataPoints: userData,
      },
      {
        type: "column",
        name: "Topper",
        legendText: "Topper",
        axisYType: "secondary",
        showInLegend: true,
        color: "#cb2d62",
        // dataPoints: [
        //   { label: "Physics", y: 200 },
        //   { label: "Chemistry", y: 250 },
        //   { label: "Mathematics", y: 150 },
        // ],
        dataPoints: topperData,
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

export default CanvasColumnChartMultipleAxes;
