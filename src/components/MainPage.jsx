
import React from 'react';
import CovidLineChart from './CovidLineChart';
import CovidAreaChart from './CovidAreaChart';
import CovidBarChart from './CovidBarChart';
import CovidColumnChart from './CovidColumnChart';
import CovidDonutChart from './CovidDonutChart';

import './MainPage.css'; // Import CSS file for styling
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const MainPage = () => {
    return (
        <div className="main-container">
            
            <nav className="navbar">
                <Navbar />
            </nav>

            <div className="content-container">
              
                <aside className="sidebar left-sidebar">
                   
                    <Sidebar />
                    
                </aside>

                {/* Main content area */}
                <div className="main-content">
                    {/* Section 1: Line Chart */}
                    <section className="section">
                        <h2>Line Chart</h2>
                        <CovidLineChart />
                    </section>

                    {/* Section 2: Area Chart */}
                    <section className="section">
                        <h2>Area Chart</h2>
                        <CovidAreaChart />
                    </section>

                    {/* Section 3: Bar Chart */}
                    <section className="section">
                        <h2>Bar Chart</h2>
                        <CovidBarChart />
                    </section>

                    {/* Add more charts or content in the sections as needed */}
                </div>

                {/* Right sidebar */}
                <aside className="sidebar right-sidebar">
                    <h3>Right Sidebar</h3>
                    <p>Some content for the right sidebar.</p>
                </aside>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>Footer content goes here</p>
            </footer>
        </div>
    );
};

export default MainPage;







