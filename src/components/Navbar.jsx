import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()

    const [servicesLinks, setServicesLinks] = useState(false)
    const [resourcesLinks, setResourcesLinks] = useState(false)
    const [companyLinks, setCompanyLinks] = useState(false)

    return <nav>
        <img className=" w-24 h-6" src="https://cdn-new.tridge.com/assets/S27EOULS.svg" alt="Tridge Logo" />
        <div>
            <span
                onMouseEnter={() => { setServicesLinks(true), setResourcesLinks(false), setCompanyLinks(false) }}
            >Services {servicesLinks ?
                <i className="fa-solid fa-chevron-up fa-xs"></i> :
                <i className="fa-solid fa-chevron-down fa-xs"></i>}
            </span>

            <span
                onMouseEnter={() => { setResourcesLinks(true), setServicesLinks(false), setCompanyLinks(false) }}
            >Resources {resourcesLinks ?
                <i className="fa-solid fa-chevron-up fa-xs"></i> :
                <i className="fa-solid fa-chevron-down fa-xs"></i>}
            </span>

            <span
                onMouseEnter={() => { setCompanyLinks(true), setServicesLinks(false), setResourcesLinks(false) }}
            >Company {companyLinks ?
                <i className="fa-solid fa-chevron-up fa-xs"></i> :
                <i className="fa-solid fa-chevron-down fa-xs"></i>}
            </span>
        </div>

        <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <button>Sign Up</button>
        </div>

        {/* Services Menu */}

        {servicesLinks &&
            <section onMouseLeave={() => setServicesLinks(false)}>
                <section>
                    <Link to="#">
                        <div>
                            <img src="https://cdn-new.tridge.com/assets/DHWKQNAV.png" alt="Sourcing Hub" />
                            <h3>Sourcing Hub</h3>
                            <p>Grow your business by connecting with credible agri-food suppliers through Exhibition 365 and Sourcing Requests.</p>
                        </div>
                    </Link>
                    <Link to="#">
                        <div>
                            <img src="https://cdn-new.tridge.com/assets/DAQMC2YK.png" alt="Intelligence & Data" />
                            <h3>Intelligence & Data</h3>
                            <p>Make smarter business decisions and gain a competitive edge with our expert insights into the global agri-food market.</p>
                        </div>
                    </Link>
                    <Link to="#">
                        <div>
                            <img src="https://cdn-new.tridge.com/assets/5W2BPLKF.png" alt="Fulfillment Solution" />
                            <h3>Fulfillment Solution</h3>
                            <p>Order with us to safely and reliably import products. We'll take care of everything from production to shipment.</p>
                        </div>
                    </Link>
                </section>

                <section>
                    <div>
                        <h3>Product Browser</h3>
                        <p>Instant global data access to +1,700 agri-food products. Start browsing for your products of interest.</p>
                        <button onClick={() => navigate("#")}>Browse Products <i className="fa-solid fa-arrow-right fa-sm"></i></button>
                    </div>

                    <div>
                        <h3>Supplier Center</h3>
                        <p>Maximize your potential with our Supplier Center. Manage your offers, booth, connections with buyers, and more.
                        </p>
                        <button onClick={() => navigate("#")}>Go to Supplier Center <i className="fa-solid fa-arrow-right fa-sm"></i></button>
                    </div>
                </section>
            </section>
        }

        {/* Services Menu */}

        {resourcesLinks &&
            <section onMouseLeave={() => setResourcesLinks(false)}>
               <Link to="#"><p>Global Price Trends</p></Link>
               <Link to="#"><p>Webinars</p></Link>
               <Link to="#"><p>White Papers</p></Link>
               <Link to="#"><p>Data Coverage</p></Link>
               <Link to="#"><p>Advertise with Tridge</p></Link>
               <Link to="#"><p>Sourcing Requests Quota</p></Link>
            </section>
        }

        {/* Company Menu */}

        {companyLinks &&
            <section onMouseLeave={() => setCompanyLinks(false)}>
            <Link to="#"><p>About Us</p></Link>
            <Link to="#"><p>Careers <i className="fa-solid fa-location-arrow fa-sm"></i> <span>We're hiring!</span></p></Link>
            <Link to="#"><p>Blog <i className="fa-solid fa-location-arrow fa-sm"></i></p></Link>
            <Link to="#"><p>Contact Us <i className="fa-solid fa-location-arrow fa-sm"></i></p></Link>
            </section>
        }

        <hr />
    </nav>
}

export default Navbar