import React from "react";
import CustomButton from "../atoms/button";
import Hero from "../atoms/Hero";

interface Box2Props {}
const Box2: React.FC<Box2Props> = () => {
  return (
    <>
    <Hero sectionstyle="null" tag={" our services"} 
    head={" High-impact services to take your business to the next level"}
    para={"We have wonderful types of designing and development expertise, they will help you as kind of digital partner with the type of end to end solution services."}
    children={null}
     />
    </>
  );
};

export default Box2;
