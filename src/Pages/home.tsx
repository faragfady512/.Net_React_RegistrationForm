import React from 'react';
import BueCover from '../Assets/BueCover.jpg';
import bueRanking from '../Assets/bueRanking.jpg'


// Home component for the landing page
function Home() {
    return (
        <>
            { /* BackgroundImage with BUE image */}
            <div className="container-fluid p-0">
                <div
                    id="intro-example"
                    className="p-5 text-center bg-image rounded position-relative"
                    style={{
                        backgroundImage: `url(${BueCover})`,
                        backgroundSize: 'cover',
                        height: '90vh', 
                    }}
                >
                    <div className="mask position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white BUE-text">
                                <h1 className="mb-3 custom-BueSize">BUE</h1>
                                <h2 className="mb-3 bueine">Welcome to
                                    The British University
                                    in Egypt</h2>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            { /* About section */}
            <section className="about py-5">
                <div className="title text-center position-relative">
                    <h2>ABOUT</h2>
                    <h3 className="position-absolute start-50 top-50 translate-middle">ABOUT</h3>
                </div>
                <p className="text-center my-5 font-weight-bold fs-3 brand-text">BUE Ranks First Among Private Universities in Egypt in Young Universities Ranking 2023</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-img">
                                <img src={bueRanking} className="img-fluid rounded" alt="Robin Steel" />
                            </div>
                        </div>
                        <div className="col-md-7 offset-md-1 d-flex align-items-center">
                            <div className="about-info">
                                <h4 className="h2  font-weight-bold text-uppercase">History</h4>
                                <p className="text-pink">The British University in Egypt</p>
                                <p className="my-4 justify-content">
                                    The formation of the British University in Egypt arose from a 1998 Memorandum of Cooperation between the governments of Egypt and the United Kingdom. It was envisaged that such an institution would produce graduates of UK standards for key sectors of the Egyptian economy, particularly in the areas of engineering, computer science and business studies.
                                </p>
                                <h6>E-mail: <a href="#" className="text-dark">info@bue.edu.eg</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

 


   
            
        </>


    
    
  );
}

export default Home;
