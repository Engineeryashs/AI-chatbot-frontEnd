import { Link } from "react-router-dom"
 type Props={
to:string;
bg:string;
text:string;
textColour:string;
onClick?:()=>Promise<void>;
 }
const NavigationLink = (props:Props) => {
  return (

      <Link to={props.to} style={{
        background:props.bg,
        color:props.textColour
      }} className="nav-link">
        {props.text}
      </Link>
  
  )
}

export default NavigationLink
