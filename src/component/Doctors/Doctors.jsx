
import { useEffect,useState } from "react";
import DoctorCard from "./DoctorCard";
import Loading from "../Loading";
// import Register from "../Register/Register";



export default function Doctors(){

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false)

    async function FetchData(){
        try{
            setLoading(true);
            let res = await fetch(`https://doctors-api-bc6x.onrender.com/doctors`);
            let resp = await res.json();
            setData(resp)
           setLoading(false)
        }
        catch(err){
            console.log("error", err);
        }
    }
    console.log(data)
    useEffect(()=>{
        FetchData()
    },[])

    if(loading){
        return <h1 className="text-center">{<Loading/>}</h1>
    }



    return(
        <div className="container">
        <h1 className="text-center mt-5 mb-3">Explore our Centres of <span className="themeColor">Clinical Excellence</span></h1>
        <h5 className="text-center mb-5 ">Learn about the world class health care we provide</h5>
            <div className="row gap-4 " >
                <div className="col-md-3 shadow mt-3 ms-md-4 rounded  doctorSidebar">
                <div className="p-3 m-2 mt-4 rounded shadow text-center">
                    <button className="btn px-5">Click me for </button>
                </div>
                <div className="p-3 m-2 mt-3 rounded shadow">Special</div>
                <div className="p-3 m-2 mt-3 rounded shadow">Special</div>
                <div className="p-3 m-2 mt-3 rounded shadow">Special</div>
                <div className="p-3 m-2 mt-3 rounded shadow">Special</div>
                <div className="p-3 m-2 mt-3 rounded shadow">Special</div>
           


                </div>
           

        <div className="col-md-8">
            {data.length>0 && data.map((e)=>(
                 <DoctorCard key={e.id} {...e}/>
            ))}
        </div>


        </div>
        </div>
    )
}