import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Crousel(){

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return(
        <>
        <section className="pt-5 pb-5">
    <div className="container">
                <h1 className="my-1 text-center">International <span className="themeColor">Doctor</span></h1>
        <div className="row">
            <div className="col-6">
            </div>
            <div className="col-6 text-right pe-5">
                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </a>
                <a className="btn btn-primary mb-3 me-md-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-11 d-block m-auto">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className="card border-0 shadow" data-aos="fade-right">
                                        <img className="img-fluid" alt="100%x280" src="https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q="/>
                                        <div className="card-body">
                                            <h4 className="card-title">Cardiology specialist</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card border-0 shadow" data-aos="fade-up">
                                        <img className="img-fluid" alt="100%x280" src= "https://st.depositphotos.com/1518767/3917/i/450/depositphotos_39179963-stock-photo-male-doctor-with-laptop-at.jpg"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Neurology specialist</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card border-0 shadow rounded" data-aos="fade-left">
                                        <img className="img-fluid" alt="100%x280" src="https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612&w=0&k=20&c=pek5ehwgsZNPemeEh4bObQ1U5DRPEs0WHleosG-daa8="/>
                                        <div className="card-body">
                                            <h4 className="card-title">Dermatology specialist</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                <div className="card border-0 shadow rounded " data-aos="fade-up">
                                        <img className="img-fluid" alt="100%x280" src="https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612&w=0&k=20&c=pek5ehwgsZNPemeEh4bObQ1U5DRPEs0WHleosG-daa8="/>
                                        <div className="card-body">
                                            <h4 className="card-title">Dermatology specialist</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card card border-0 shadow rounded" data-aos="fade-up">
                                        <img className="img-fluid" alt="100%x280" src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=900&t=st=1692631817~exp=1692632417~hmac=d60066c916ffb9eca89366f42e547151102a108c52e66df82de00a8e20b577de"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                <div className="card card border-0 shadow rounded" data-aos="fade-up">
                                        <img className="img-fluid" alt="100%x280" src="https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q="/>
                                        <div className="card-body">
                                            <h4 className="card-title">Cardiology specialist</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                            <div className="col-md-4 mb-3">
                                    <div className="card card border-0 shadow rounded" data-aos="fade-up">
                                        <img className="img-fluid" alt="100%x280" src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=900&t=st=1692631817~exp=1692632417~hmac=d60066c916ffb9eca89366f42e547151102a108c52e66df82de00a8e20b577de"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card card border-0 shadow rounded" data-aos="fade-up">
                                        <img className="img-fluid" alt="100%x280" src= "https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card card border-0 shadow rounded" data-aos="fade-up">
                                        <img className="img-fluid" alt="100%x280" src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=900&t=st=1692631817~exp=1692632417~hmac=d60066c916ffb9eca89366f42e547151102a108c52e66df82de00a8e20b577de"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}