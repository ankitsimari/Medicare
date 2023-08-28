import VideoHome from "../VideoCall/VideoHome";



export default function Token(){

    const data = JSON.parse(localStorage.getItem("user"));

    return(

        <>
        {data.booking? <VideoHome/> : <h1 className="text-center mt-5 border w-50 d-block m-auto p-5">you don't have any Appointment</h1>}
        </>
    )
}