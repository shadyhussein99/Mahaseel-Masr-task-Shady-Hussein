import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()

    const [servicesLinks, setServicesLinks] = useState(false)    // Show Services section on hovering on (Services)
    const [resourcesLinks, setResourcesLinks] = useState(false)  // Show Resources section on hovering on (Rescources)
    const [companyLinks, setCompanyLinks] = useState(false)      // Show Company section on hovering on (Company)

    const [showSearchInput, setShowSearchInput] = useState(false)   // Show search input on clicking the search icon
    const [navMenuImSmallScreens, setNavMenuInSmallScreens] = useState(false) // Show nav elements on clicking the menu icon in small screens

    return <nav className=" bg-white border-b flex py-3 items-center sticky top-0 z-10">

        <img className=" w-24 h-6 ml-3" src="https://cdn-new.tridge.com/assets/S27EOULS.svg" alt="Tridge Logo" />

        <div className="hidden md:block md:ml-16">
            <span
                className=" cursor-pointer md:ml-7"
                onMouseEnter={() => { setServicesLinks(true), setResourcesLinks(false), setCompanyLinks(false) }}
            >Services {servicesLinks ?
                <i className="fa-solid fa-chevron-up fa-xs"></i> :
                <i className="fa-solid fa-chevron-down fa-xs"></i>}
            </span>

            <span
                className=" cursor-pointer md:ml-7"
                onMouseEnter={() => { setResourcesLinks(true), setServicesLinks(false), setCompanyLinks(false) }}
            >Resources {resourcesLinks ?
                <i className="fa-solid fa-chevron-up fa-xs"></i> :
                <i className="fa-solid fa-chevron-down fa-xs"></i>}
            </span>

            <span
                className=" cursor-pointer md:ml-7"
                onMouseEnter={() => { setCompanyLinks(true), setServicesLinks(false), setResourcesLinks(false) }}
            >Company {companyLinks ?
                <i className="fa-solid fa-chevron-up fa-xs"></i> :
                <i className="fa-solid fa-chevron-down fa-xs"></i>}
            </span>
        </div>

        <div className=" ml-auto mr-7">
            <i onClick={() => setShowSearchInput(true)} className="fa-solid fa-magnifying-glass fa-lg ml-4 cursor-pointer"></i>
            <button className="ml-4 bg-black text-white font-semibold px-5 py-2 rounded-3xl hover:bg-slate-800">Sign In</button>

            {showSearchInput &&
                <div className=" bg-white fixed top-0 left-0 w-screen h-screen">
                    <div className="flex justify-between py-5">
                        <p className=" text-xl font-semibold ml-8">Search</p>
                        <div>
                            <i onClick={() => setShowSearchInput(false)} className="fa-solid fa-xmark fa-lg cursor-pointer relative right-12"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="relative">
                    <i className="fa-solid fa-magnifying-glass text-gray-400 absolute top-12 left-7"></i>
                    <input className="w-3/4 mx-20 border mt-9 py-2 px-10 rounded-3xl ml-3 focus:outline-blue-600" placeholder="Search anything in food and agriculture" />
                    </div>
                </div>

            }

            {navMenuImSmallScreens ?
                <div className=" bg-white fixed top-0 left-0  w-screen h-screen md:hidden">
                    <div className=" flex justify-end mr-10 mt-6">
                        <i onClick={() => setNavMenuInSmallScreens(false)} className="fa-solid fa-xmark fa-lg cursor-pointer"></i>
                    </div>
                    <hr className="mt-8" />
                    <Link to="#"><p className=" text-2xl font-bold ml-8 my-4">Services <i className="fa-solid fa-chevron-right text-base"></i></p></Link>
                    <Link to="#"><p className=" text-2xl font-bold ml-8 my-4">Resources <i className="fa-solid fa-chevron-right text-base"></i></p></Link>
                    <Link to="#"><p className=" text-2xl font-bold ml-8 my-4">Company <i className="fa-solid fa-chevron-right text-base"></i></p></Link>
                </div> :
                <div className="inline-block md:hidden">
                    <i onClick={() => setNavMenuInSmallScreens(true)} className="fa-solid fa-bars fa-lg ml-4 cursor-pointer"></i>
                </div>}

        </div>


        {/* Services Menu */}

        {servicesLinks &&
            <section onMouseLeave={() => setServicesLinks(false)} className="md:fixed md:top-16 md:left-0 md:h-screen md:w-full md:px-48 md:bg-white">
                <section className="md:grid md:grid-cols-2">
                    <Link to="#" className=" md:col-span-1 md:mt-8">
                        <div>
                            <img className=" md:w-16 md:h-16" src="https://cdn-new.tridge.com/assets/DHWKQNAV.png" alt="Sourcing Hub" />
                            <h3 className=" text-2xl font-bold">Sourcing Hub</h3>
                            <p className="md:w-11/12 md:text-gray-500 md:mt-2 md:text-sm">Grow your business by connecting with credible agri-food suppliers through Exhibition 365 and Sourcing Requests.</p>
                        </div>
                    </Link>
                    <Link to="#" className=" md:col-span-1 md:mt-8">
                        <div>
                            <img className=" md:w-16 md:h-16" src="https://cdn-new.tridge.com/assets/DAQMC2YK.png" alt="Intelligence & Data" />
                            <h3 className=" text-2xl font-bold">Intelligence & Data</h3>
                            <p className="md:w-11/12 md:text-gray-500 md:mt-2 md:text-sm">Make smarter business decisions and gain a competitive edge with our expert insights into the global agri-food market.</p>
                        </div>
                    </Link>
                    <Link to="#" className=" md:col-span-1 md:mt-8">
                        <div>
                            <img className=" md:w-16 md:h-16" src="https://cdn-new.tridge.com/assets/5W2BPLKF.png" alt="Fulfillment Solution" />
                            <h3 className=" text-2xl font-bold">Fulfillment Solution</h3>
                            <p className="md:w-11/12 md:text-gray-500 md:mt-2 md:text-sm">Order with us to safely and reliably import products. We'll take care of everything from production to shipment.</p>
                        </div>
                    </Link>
                </section>

                <section className="md:grid md:grid-cols-2 md:mt-14 md:mx-6">
                    <div className=" md:col-span-1">
                        <h3 className=" md:text-xl md:font-bold">Product Browser</h3>
                        <p className="md:w-11/12 md:text-gray-500 md:mt-2 md:text-sm">Instant global data access to +1,700 agri-food products. Start browsing for your products of interest.</p>
                        <button onClick={() => navigate("#")} className=" text-xs text-white font-bold px-2 py-1 bg-black rounded-3xl mt-4 hover:bg-slate-900">Browse Products <i className="fa-solid fa-arrow-right fa-sm ml-1"></i></button>
                    </div>

                    <div className=" md:col-span-1">
                        <h3 className=" md:text-xl md:font-bold">Supplier Center</h3>
                        <p className="md:w-11/12 md:text-gray-500 md:mt-2 md:text-sm">Maximize your potential with our Supplier Center. Manage your offers, booth, connections with buyers, and more.
                        </p>
                        <button onClick={() => navigate("#")} className=" text-xs text-white font-bold px-2 py-1 bg-black rounded-3xl mt-4 hover:bg-slate-900">Go to Supplier Center <i className="fa-solid fa-arrow-right fa-sm ml-1"></i></button>
                    </div>
                </section>
            </section>
        }

        {/* Services Menu */}
        {resourcesLinks &&
            <section onMouseLeave={() => setResourcesLinks(false)} className="md:fixed md:top-16 md:left-0 md:py-10 md:w-full md:px-48 md:bg-white border-b shadow-2xl">
                <Link to="#"><p className="text-2xl font-bold my-5">Global Price Trends</p></Link>
                <Link to="#"><p className="text-2xl font-bold my-5">Webinars</p></Link>
                <Link to="#"><p className="text-2xl font-bold my-5">White Papers</p></Link>
                <Link to="#"><p className="text-2xl font-bold my-5">Data Coverage</p></Link>
                <Link to="#"><p className="text-2xl font-bold my-5">Advertise with Tridge</p></Link>
                <Link to="#"><p className="text-2xl font-bold my-5">Sourcing Requests Quota</p></Link>
            </section>
        }

        {/* Company Menu */}

        {companyLinks &&
            <section onMouseLeave={() => setCompanyLinks(false)} className="md:fixed md:top-16 md:left-0 md:py-10 md:w-full md:px-48 md:bg-white border-b shadow-2xl">
                <Link to="#"><p className="text-2xl font-bold my-5">About Us</p></Link>
                <Link to="#"><p className="text-2xl font-bold my-5">Careers <i className="fa-solid fa-location-arrow fa-sm"></i> <span className="text-xs font-normal ml-2 bg-blue-100 text-blue-700 px-2 rounded-3xl">We're hiring!</span></p></Link>
                <Link to="#"><p className="text-2xl font-bold my-5">Blog <i className="fa-solid fa-location-arrow fa-sm"></i></p></Link>
                <Link to="#"><p className="text-2xl font-bold my-5">Contact Us <i className="fa-solid fa-location-arrow fa-sm"></i></p></Link>
            </section>
        }

    </nav>
}

export default Navbar