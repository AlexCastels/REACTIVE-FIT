
export function DataToday() {
    const data = new Date()
    const gg = data.getDate();
    const mm = data.getMonth();
    const years = data.getFullYear();
    const dataComplete = `Oggi, ${gg}/${mm +1 }/${years}`
    console.log(gg);
  return (
    <>
    <p className="font-thin">{dataComplete}</p>
    </>
  )
}
