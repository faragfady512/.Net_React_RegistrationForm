import React from 'react';


//This Componenet is footer it has social media Bue account and navigate to it 

function Footer() {
    return (

        <footer className="text-center text-white" style={{ backgroundColor: '#f1f1f1' }}>
            {/* Grid container */}
            <div className="container pt-4">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Facebook */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.facebook.com/thebritishuniversityegypt"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    {/* Twitter */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://twitter.com/britishuniegypt?lang=en"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    {/* Google */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.bue.edu.eg/news/bue-ranks-first-among-private-universities-in-egypt-details"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    {/* Instagram */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/thebritishuniversityinegypt/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    {/* LinkedIn */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.linkedin.com/school/the-british-university-in-egypt/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>

                </section>
             
            </div>
    


        </footer>

    
  );
}

export default Footer;