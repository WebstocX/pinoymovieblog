import React from "react";
import Hero from "../atoms/Hero";

interface OurTeamProps{
  
}
const OurTeam:React.FC<OurTeamProps> = () => {
    const team =[
        {name:"Aman Jadhav",position:"Founder & CEO", pic:"https://lh3.googleusercontent.com/proxy/9WrHbkXrWvajhDpuvoGI3KaOYlpuSm_mJLiim-CXV0qqfUeJ_W3t1jkOhv1A3NYvhV7bez6KFkLDNvJea6YoBSNLsmOjKuewV9uaX2z2qLWgorR2uyHO"},
        {name:"Karan Jadhav",position:"Co-Founder & CTO", pic:"https://lh3.googleusercontent.com/proxy/9WrHbkXrWvajhDpuvoGI3KaOYlpuSm_mJLiim-CXV0qqfUeJ_W3t1jkOhv1A3NYvhV7bez6KFkLDNvJea6YoBSNLsmOjKuewV9uaX2z2qLWgorR2uyHO"},
        {name:"Sanket Mandvakar",position:"Co-Founder & Director Sales", pic:"https://lh3.googleusercontent.com/proxy/9WrHbkXrWvajhDpuvoGI3KaOYlpuSm_mJLiim-CXV0qqfUeJ_W3t1jkOhv1A3NYvhV7bez6KFkLDNvJea6YoBSNLsmOjKuewV9uaX2z2qLWgorR2uyHO"},
        {name:"Sagar Jadhav",position:"Front-end Developer", pic:"https://lh3.googleusercontent.com/proxy/9WrHbkXrWvajhDpuvoGI3KaOYlpuSm_mJLiim-CXV0qqfUeJ_W3t1jkOhv1A3NYvhV7bez6KFkLDNvJea6YoBSNLsmOjKuewV9uaX2z2qLWgorR2uyHO"}
    ]
  return (
      <>
      <section className="text-gray-600 md:py-0 body-font mb-16" style={{backgroundColor:"#FAFAFC"}}>
  <div className="container md:px-5  mx-auto">
  <Hero tag={"our team"} sectionstyle={null} 
  children={null}
  para={"we have all our job as passion we enjoy our work!"}
  head={"Meet the team at Growth"}
  />
    <div className="flex md:px-24   flex-wrap -m-4">
   {team.map((t)=>{
       return(
           <>
            <div className="p-4  w-full md:mb-10 lg:w-1/4 md:w-1/2">
        <div className="h-full duration-500 hover:ease-in-out transform hover:scale-110 hover:shadow-2xl  flex py-0 flex-col border-2 border-gray-200 rounded-2xl items-center text-center">
          <img alt="team" style={{objectFit:"contain"}} className="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src={t.pic}/>
          <div className="w-full">
            <h2 className="title-font font-medium text-2xl text-bold text-indigo-900 text-gray-900">{t.name}</h2>
            <h3 className="text-gray-500 mb-3 text-xs mt-2 font-bold text-indigo-500">{t.position}</h3>
            
          </div>
        </div>
      </div>
           </>
       )
   })}
      
    </div>
  </div>
</section>
      </>
  )
}

export default OurTeam