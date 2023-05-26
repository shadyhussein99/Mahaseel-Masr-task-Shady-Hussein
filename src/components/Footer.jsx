import { Link } from "react-router-dom"

function Footer() {

    const year = new Date().getFullYear()

    return <footer className="mx-4 mb-14">
        <hr className="mt-10" />
        <section className="md:grid md:grid-cols-3">
            <section className="footer-section">
                <h3 className="footer-header">SOURCING HUB</h3>
                <Link to="#"><p className="footer-paragraph">Introduction</p></Link>
                <Link to="#"><p className="footer-paragraph">Home</p></Link>
                <Link to="#"><p className="footer-paragraph">Sourcing Requests</p></Link>
                <Link to="#"><p className="footer-paragraph">Exhibitfooter-sectionion 365 - Booths</p></Link>
                <Link to="#"><p className="footer-paragraph">Exhibition 365 - Events</p></Link>
                <Link to="#"><p className="footer-paragraph">Exhibition 365 - Overview</p></Link>
            </section>

            <section className="footer-section">
                <h3 className="footer-header">INTELLIGENCE & DATA</h3>
                <Link to="#"><p className="footer-paragraph">Dashboard</p></Link>
                <Link to="#"><p className="footer-paragraph">News & Insights</p></Link>
                <Link to="#"><p className="footer-paragraph">Analysis & Reports</p></Link>
                <Link to="#"><p className="footer-paragraph">Price Data</p></Link>
                <Link to="#"><p className="footer-paragraph">Trade Data</p></Link>
                <Link to="#"><p className="footer-paragraph">Production Data</p></Link>
                <Link to="#"><p className="footer-paragraph">Seasonality Data</p></Link>
                <Link to="#"><p className="footer-paragraph">Weather Data</p></Link>
            </section>

            <section className="footer-section">
                <h3 className="footer-header">FULFILLMENT SOLUTION</h3>
                <Link to="#"><p className="footer-paragraph">Introduction</p></Link>
                <Link to="#"><p className="footer-paragraph">Home</p></Link>
                <Link to="#"><p className="footer-paragraph">Browse</p></Link>
            </section>

            <section className="footer-section">
                <h3 className="footer-header">RESOURCES</h3>
                <Link to="#"><p className="footer-paragraph">Global Price Trends</p></Link>
                <Link to="#"><p className="footer-paragraph">Webinars</p></Link>
                <Link to="#"><p className="footer-paragraph">White Papers</p></Link>
                <Link to="#"><p className="footer-paragraph">Data Coverage</p></Link>
                <Link to="#"><p className="footer-paragraph">Advertise with Tridge</p></Link>
                <Link to="#"><p className="footer-paragraph">Sourcing Requests Quota</p></Link>
            </section>

            <section className="footer-section">
                <h3 className="footer-header">COMPANY</h3>
                <Link to="#"><p className="footer-paragraph">About Us</p></Link>
                <Link to="#"><p className="footer-paragraph">Careers <i className="fa-solid fa-location-arrow fa-sm ml-1"></i> <span className=" text-xs bg-blue-100 text-blue-700 px-2 rounded-3xl">We're hiring!</span></p></Link>
                <Link to="#"><p className="footer-paragraph">Blog <i className="fa-solid fa-location-arrow fa-sm ml-1"></i></p></Link>
                <Link to="#"><p className="footer-paragraph">Contact Us <i className="fa-solid fa-location-arrow fa-sm ml-1"></i></p></Link>
            </section>
        </section>

        <section className="md:flex md:justify-between md:items-end">
            <div className="mt-16 text-gray-500 text-sm">
                <p className="mb-2">ⓒ {year} Tridge</p>
                <p>
                    <Link to="#" className="block underline mt-6 w-fit hover:bg-gray-200">Privacy</Link>
                    <Link to="#" className="block underline mt-6 w-fit hover:bg-gray-200">Terms</Link>
                    <Link to="#" className="block underline mt-6 w-fit hover:bg-gray-200">Sitemap</Link>
                </p>
            </div>

            <div className="mt-16 flex">
                <Link to="#"><img className="footer-img" src="https://cdn-new.tridge.com/assets/SLK4PFQX.svg" alt="linkedin" /></Link>
                <Link to="#"><img className="footer-img" src="https://cdn-new.tridge.com/assets/EV2RLI5P.svg" alt="youtube" /></Link>
                <Link to="#"><img className="footer-img" src="https://cdn-new.tridge.com/assets/SZFTN46V.svg" alt="facebook" /></Link>
                <Link to="#"><img className="footer-img" src="https://cdn-new.tridge.com/assets/OGPCLGVT.svg" alt="twitter" /></Link>
                <Link to="#"><img className="footer-img" src="https://cdn-new.tridge.com/assets/ALBJIRUT.svg" alt="naver" /></Link>
            </div>
        </section>
    </footer>
}

export default Footer