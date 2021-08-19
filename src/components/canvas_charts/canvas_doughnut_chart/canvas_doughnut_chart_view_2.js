import { Fragment } from "react";

///////Canvas Chart//////////////////
import { CanvasJSChart } from "canvasjs-react-charts";

const CanvasDoughnutChartView2 = (props) => {
  let { dataDetails } = props;

  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",
    subtitles: [
      {
        text: `My Rank : ${dataDetails.user_rank}`,
        verticalAlign: "center",
        fontSize: 22,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        legend: {
          horizontalAlign: "left", // "center" , "right"
          verticalAlign: "center", // "top" , "bottom"
          fontSize: 15,
        },
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #Marks",
        toolTipContent: "<b>{label}:</b> {y} (#Marks)",
        dataPoints: [
          { y: dataDetails.toper_marks, label: "Topper Marks" },
          { y: dataDetails.user_paper_marks, label: "Your Marks" },
        ],
      },
    ],
  };
  return (
    <Fragment>
      <div className="canvasDoughnutChart_wrapper">
        <CanvasJSChart options={options} />
      </div>
    </Fragment>
  );
};

export default CanvasDoughnutChartView2;
