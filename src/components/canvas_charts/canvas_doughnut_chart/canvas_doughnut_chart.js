import { Fragment } from "react";

///////Canvas Chart//////////////////
import { CanvasJSChart } from "canvasjs-react-charts";

const CanvasDoughnutChart = (props) => {
  let { title, subTitleText, dataPoints } = props;

  console.log(dataPoints);

  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      text: title,
      fontSize: 18,
      fontWeight: "normal",
      verticalAlign: "top",
      // margin: 10,
    },
    subtitles: [
      {
        text: subTitleText,
        verticalAlign: "center",
        fontSize: 22,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        radius: "100%",
        innerRadius: "70%", //change the innerRadius here.
        // showInLegend: true,
        dataPoints: dataPoints,
        // dataPoints: [
        //   {
        //     label: "Total Video",
        //     color: "#008080",
        //     y: 330,
        //   },
        //   {
        //     label: "Watch Video",
        //     color: "#3CB371",
        //     y: 0,
        //   },
        // ],
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

export default CanvasDoughnutChart;
