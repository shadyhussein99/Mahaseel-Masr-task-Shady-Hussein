import { Link } from "react-router-dom"

function Footer() {

    const year = new Date().getFullYear()

    return <footer>
        <section>
            <section>
                <h3>SOURCING HUB</h3>
                <Link to="#"><p>Introduction</p></Link>
                <Link to="#"><p>Home</p></Link>
                <Link to="#"><p>Sourcing Requests</p></Link>
                <Link to="#"><p>Exhibition 365 - Booths</p></Link>
                <Link to="#"><p>Exhibition 365 - Events</p></Link>
                <Link to="#"><p>Exhibition 365 - Overview</p></Link>
            </section>

            <section>
                <h3>INTELLIGENCE & DATA</h3>
                <Link to="#"><p>Dashboard</p></Link>
                <Link to="#"><p>News & Insights</p></Link>
                <Link to="#"><p>Analysis & Reports</p></Link>
                <Link to="#"><p>Price Data</p></Link>
                <Link to="#"><p>Trade Data</p></Link>
                <Link to="#"><p>Production Data</p></Link>
                <Link to="#"><p>Seasonality Data</p></Link>
                <Link to="#"><p>Weather Data</p></Link>
            </section>

            <section>
                <h3>FULFILLMENT SOLUTION</h3>
                <Link to="#"><p>Introduction</p></Link>
                <Link to="#"><p>Home</p></Link>
                <Link to="#"><p>Browse</p></Link>
            </section>

            <section>
                <h3>RESOURCES</h3>
                <Link to="#"><p>Global Price Trends</p></Link>
                <Link to="#"><p>Webinars</p></Link>
                <Link to="#"><p>White Papers</p></Link>
                <Link to="#"><p>Data Coverage</p></Link>
                <Link to="#"><p>Advertise with Tridge</p></Link>
                <Link to="#"><p>Sourcing Requests Quota</p></Link>
            </section>

            <section>
                <h3>COMPANY</h3>
                <Link to="#"><p>About Us</p></Link>
                <Link to="#"><p>Careers <i className="fa-solid fa-location-arrow fa-sm"></i> <span>We're hiring!</span></p></Link>
                <Link to="#"><p>Blog <i className="fa-solid fa-location-arrow fa-sm"></i></p></Link>
                <Link to="#"><p>Contact Us <i className="fa-solid fa-location-arrow fa-sm"></i></p></Link>
            </section>
        </section>

        <section>
            <div>
                <p>ⓒ {year} Tridge</p>
                <p>
                    <Link to="#">Privacy</Link>
                    <Link to="#">Terms</Link>
                    <Link to="#">Sitemap</Link>
                </p>
            </div>

            <div>
                <Link to="#"><img src="https://cdn-new.tridge.com/assets/SLK4PFQX.svg" alt="linkedin" /></Link>
                <Link to="#"><img src="https://cdn-new.tridge.com/assets/EV2RLI5P.svg" alt="youtube" /></Link>
                <Link to="#"><img src="https://cdn-new.tridge.com/assets/SZFTN46V.svg" alt="facebook" /></Link>
                <Link to="#"><img src="https://cdn-new.tridge.com/assets/OGPCLGVT.svg" alt="twitter" /></Link>
                <Link to="#"><img src="https://cdn-new.tridge.com/assets/ALBJIRUT.svg" alt="naver" /></Link>
            </div>
        </section>
    </footer>
}

export default Footer