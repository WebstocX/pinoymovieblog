import React from "react";
interface CustomButtonProps{
classN:string;
label:string;
children:any;
click:any;
}
const CustomButton:React.FC<CustomButtonProps> = ({classN,label,children,click}) => {
  return (
    <button onClick={click} className={`${classN} focus:outline-none hover:outline-none`}>
    {label}
    {children}
  </button>
  )
}

export default CustomButton