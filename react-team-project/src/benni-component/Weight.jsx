import {
    Card,
    CardBody,
    CardHeader,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
import "./utils.css"
 
   
  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Sales",
        data:[80, 81.5, 81, 81.4, 81.5,  80.5, 80.5, 80.3, 80.8, 80.7]
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#eab308"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#eab308",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
        

          
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#eab308",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#eab308",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
  export default function Weight() {
    return (
      <>
        <form className="yellow-500 flex justify-center flex-col items-center gap-2">
          <h2 className="text-yellow-500">peso</h2>
          <input className=" border border-yellow-500 yellow-500 bg-transparent text-lg p-2" type="text" name="weight"/>
          <button className="m-2  px-4 py-1 bg-slate-950 rounded-lg text-yellow-500">inserisci</button>
        </form>
<Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col yellow-500 gap-4 rounded-none md:flex-row md:items-center"
        >
          
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
      </>
      
    );
  }