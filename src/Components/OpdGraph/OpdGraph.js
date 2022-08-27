import { Box } from "@chakra-ui/layout";
import React from "react";
import { Bubble } from "react-chartjs-2";
import { barGraphColorC } from "../../Theme";

const OpdGraph = ({ data,width,height }) => {
  const data1 = {
    labels: [
      data[0].xaxis.sixDayBefore,
      data[0].xaxis.fiveDayBefore,
      data[0].xaxis.fourDayBefore,
      data[0].xaxis.threeDayBefore,
      data[0].xaxis.twoDayBefore,
      data[0].xaxis.currentDate,
    ],
    datasets: [
      {
        label: data[0].label[0],
        data: data[0].yaxis,
        fill: false,
        borderColor: "red",
        type: "line",
      },
      {
        label: data[0].label[1],
        data: data[0].yaxis,
        fill: false,
        backgroundColor: barGraphColorC,
        type: "bar",
      },
    ],
  };

  return (
    
      <Bubble
        data={data1}
        width={width}
        height={height}
        options={{ maintainAspectRatio: false }}
        style={{ maxWidth: 400, height: 300,backgroundColor:"#f7f7f7", boxShadow:"-1px 4px 12px -3px rgba(0,0,0,0.28)" }}
      />
    
  );
};

export default OpdGraph;
