import PersonalInfo from "./PersonalInfo";

export default function CV(props) {
  return (
    <div>
      <PersonalInfo name={props.name} surname={props.surname} email={props.surname} phone={props.phone} birth={props.birth} country={props.country}/>

    </div>
  );
}

