import { Fragment } from "react";

///////Canvas Chart//////////////////
import { CanvasJSChart } from "canvasjs-react-charts";

const CanvasColumnChartMultipleAxesView2 = (props) => {
  let { dataDetails } = props;

  const options = {
    animationEnabled: true,
    title: {
      text: "You Vs Topper",
      fontSize: 20,
    },
    axisY: {
      title: "Count",
      titleFontColor: "#4F81BC",
      lineColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      tickColor: "#4F81BC",
    },
    axisY2: {
      title: "Count",
      titleFontColor: "#C0504E",
      lineColor: "#C0504E",
      labelFontColor: "#C0504E",
      tickColor: "#C0504E",
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
        dataPoints: dataDetails.UserCWCTime,
      },
      {
        type: "column",
        name: "Topper",
        legendText: "Topper",
        axisYType: "secondary",
        showInLegend: true,
        color: "#cb2d62",
        dataPoints: dataDetails.ToperCWCTime,
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

export default CanvasColumnChartMultipleAxesView2;
