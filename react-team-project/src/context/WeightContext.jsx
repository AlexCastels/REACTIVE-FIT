import { createContext, useContext, useState } from "react"

const WeightContext = createContext()

export const  WeightProvider = ({children}) => {
    const [weight, setWeight] = useState([]);
    const [addWeight, setAddWeight] = useState("");

    const handleWeight = (e) => {
        e.preventDefault();
        setWeight(prevWeight => [...prevWeight, addWeight]); 
        setAddWeight(""); 
        console.log(weight)
    };

    const handleAddWeight = (e) => {
        const weight = Number(e.target.value);
        setAddWeight(weight);
        
    };

    const chartConfig = {
        type: "line",
        height: 240,
        series: [
          {
            name: "peso",
            data:weight
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
    return(
        <WeightContext.Provider value={[chartConfig, handleWeight, handleAddWeight, weight]}>
            {children}
        </WeightContext.Provider>
    )
}
export const useWeight =()=>useContext(WeightContext)