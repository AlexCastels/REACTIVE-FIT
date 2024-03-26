// import { useEffect, useState } from "react";

// export function WorkList() {
//     const [data, setData] = useState([]);

//     async function getData() {
//         const url =
//             "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10";
//         const options = {
//             method: "GET",
//             headers: {
//                 "X-RapidAPI-Key":
//                     "09d11f3934msh4cb88cb42be833fp1623ebjsn0a4f9c4bce76",
//                 "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//             },
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.json();
//             console.log(result);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     useEffect(() => {
//         getData();
//     }, []);
// }
