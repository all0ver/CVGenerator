export default function PersonalInfo(props) {
  return (
    <div className="outline-black outline-1 bg-blue-300 w-[90%] h-full">
      <h1 className="font-bold text-3xl">{props.name} {props.surname}</h1>
      <h2><span className="font-semibold"> Email:</span> {props.email}</h2>
      <h2><span className="font-semibold"> Phone:</span> {props.phone}</h2>
      <h2><span className="font-semibold"> Birth date:</span> {props.birth}</h2>
      <h2><span className="font-semibold"> Country:</span> {props.country}</h2>
    </div>
  )
}
