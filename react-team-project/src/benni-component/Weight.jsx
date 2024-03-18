import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import "./utils.css";
import { useWeight } from "../context/WeightContext";

export default function Weight() {
  const [chartConfig, handleWeight, handleAddWeight] = useWeight();
  const weight = chartConfig.series[0].data;

  const lastWeight = weight[weight.length - 1];

  const ibm = (lastWeight / 1.72 ** 2).toFixed(2);

  let ibmValue;
  
  if (ibm < 16) {
    ibmValue = "grave magrezza";
  } else if (ibm >= 16 && ibm < 18.49) {
    ibmValue = "sottopeso";
  } else if (ibm >= 18.5 && ibm < 24.99) {
    ibmValue = "normopeso";
  } else if (ibm >= 25 && ibm < 29.99) {
    ibmValue = "sovrappeso";
  } else if (ibm >= 30 && ibm < 34.99) {
    ibmValue = "Obeso classe 1";
  } else if (ibm >= 35 && ibm < 39.99) {
    ibmValue = "Obeso classe 2";
  } else {
    ibmValue = "Obeso classe 3";
  }
  return (
    <>
      <form
        className="yellow-500 flex justify-center flex-col items-center gap-2"
        onSubmit={handleWeight}
      >
        <h2 className="text-yellow-500">peso</h2>
        <input
          className=" border border-yellow-500 text-yellow-500 yellow-500 bg-transparent text-lg p-2"
          onChange={handleAddWeight}
          type="text"
          name="weight"
        />
        <button className="m-2  px-4 py-1 bg-slate-950 rounded-lg text-yellow-500">
          inserisci
        </button>
      </form>
      <Card color="transparent">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col yellow-500 gap-4 rounded-none md:flex-row md:items-center"
        ></CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
        <div className="flex justify-center h-3 text-yellow-500 text-center">
          <p>IBM= {ibm + " " + ibmValue}</p>
        </div>
      </Card>
    </>
  );
}
