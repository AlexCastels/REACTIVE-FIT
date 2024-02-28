import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";

 
   
  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Sales",
        data:[]
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
      colors: ["#020617"],
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
            colors: "#616161",
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
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
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
      <div className="rounded-xl m-4 p-4 bg-opacity-30 bg-black">
        <form >
          <h2>peso</h2>
          <input type="text" name="weight"/>
        </form>
<Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
      </div>
      
    );
  }