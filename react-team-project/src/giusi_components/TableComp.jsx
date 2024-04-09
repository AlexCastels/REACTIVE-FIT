import { Card, Typography } from "@material-tailwind/react";
 
export function TableComp({TABLE_HEAD, TABLE_ROWS}) {
  return (
    <Card className="h-full w-full mt-6  bg-">
      <table className="w-full min-w-max table-auto text-left ">
        <thead >
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b p-4 border-solid border-yellow-400"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-bold leading-none "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody >
          {TABLE_ROWS.map(({ esercizio, serie, varianti}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-yellow-400";
 
            return (
              <tr key={esercizio}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold"
                  >
                    {esercizio}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {serie}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {varianti}
                  </Typography>
                </td>
                {/* <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {recupero}
                  </Typography>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}