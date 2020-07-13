import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about" className="s-about target-section">
                    <div className="row narrow section-intro has-bottom-sep">
                        <div className="col-full text-center">
                            <h3>Education</h3>
                            <h4>Bachelor of Technology in Electrical and Electronics Engineering <br /> VIT Vellore (Jul 2017 - May 2021)</h4>
                            <p className="lead">CGPA: 9.06/10(till 6th Sem)</p>
                            <p> Academic Merit Certificate for IV University Rank in 2017-18 | Member of MHRD Institutions's Innovation Council (IIC) - VIT |  Represented VIT at Formula Student Germany 2019 | Former Student Mentor at Mozilla Student Developers Group - VIT | Won multiple prizes for hackathons, academics, and public speaking. </p>
                        </div>
                    </div>
                    <div className="row about-content about-content--timeline">
                        <div className="col-full text-center">
                            <h3>WORK EXPERIENCE</h3>
                        </div>
                        <div className="col-six tab-full left">
                            <div className="timeline">
                                <div className="timeline__block">
                                    <div className="timeline__bullet" />
                                    <div className="timeline__header">
                                        <p className="timeline__timeframe">Jul 2020 - Present</p>
                                        <h3>Business Analyst</h3>
                                        <h5>Areva consultancy</h5>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>Involved in Business Analysis, Strategy Development, Implementaion & Marketing activities in the internal projects and building proof of concepts at Areva.</p>
                                    </div>
                                </div> {/* end timeline__block */}
                                <div className="timeline__block">
                                    <div className="timeline__bullet" />
                                    <div className="timeline__header">
                                        <p className="timeline__timeframe">Jan 2020 - Present</p>
                                        <h3>Google Ads Top Marketer</h3>
                                        <h5>Google Ad Grants Online Marketing Challenge 2020</h5>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>Increased total conversions by 1798% and click through rate by 50.27% within 4 weeks through Market Analysis and Research for an education based NGO - PlanetRead</p>
                                    </div>
                                </div> {/* end timeline__block */}
                                <div className="timeline__block">
                                    <div className="timeline__bullet" />
                                    <div className="timeline__header">
                                        <p className="timeline__timeframe">Sept 2019 - Present</p>
                                        <h3>Microsoft Student Partner</h3>
                                        <h5>Microsoft</h5>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>Organised and informed 150 students through 9 workshops about Open Source, Machine Learning, Azure and DevOps.<br/> Guest Keynote Speaker at Global Diversity CFP Day 2020</p>
                                    </div>
                                </div> {/* end timeline__block */}
                                
                            </div> {/* end timeline */}
                        </div> {/* end left */}
                        <div className="col-six tab-full right">
                            <div className="timeline">
                            <div className="timeline__block">
                                    <div className="timeline__bullet" />
                                    <div className="timeline__header">
                                        <p className="timeline__timeframe">June 2019 - Present</p>
                                        <h3>Women Techmakers Engineering Fellowship Program</h3>
                                        <h5>Google India</h5>
                                    </div>
                                    <div className="timeline__desc">
                                        <p> One among top 100 women engineers from 7300+ applicants all over India. 
                                             Attended 53 online workshops and 3 bootcamps to learn problem solving and industrial analytical skills.</p>
                                    </div>
                                </div> {/* end timeline__block */}
                                
                                <div className="timeline__block">
                                    <div className="timeline__bullet" />
                                    <div className="timeline__header">
                                        <p className="timeline__timeframe">June 2019 - Present</p>
                                        <h3>Startup Co-ordinator</h3>
                                        <h5>Institution's Innovation Council MHRD - VIT</h5>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>MHRD IIC is a council for fostering the culture of Innovation in all Higher Education Institutions (HEIs) across the country. <br /> Faciliated 3 early startups in terms of resources and guidance.</p>
                                    </div>
                                </div> {/* end timeline__block */}

                                <div className="timeline__block">
                                    <div className="timeline__bullet" />
                                    <div className="timeline__header">
                                        <p className="timeline__timeframe">Jan 2018 - Sept 2019</p>
                                        <h3>Design & Cost Analysis Team Member</h3>
                                        <h5>Pravega Racing</h5>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>Analysed, prepared, and presented the Design and Cost Analysis of the race car internationally at Formula Student Germany 2019. <br /> Secured 15th overall rank out of 117 teams worldwide.</p>
                                    </div>
                                </div> {/* end timeline__block */}
                            </div> {/* end timeline */}
                        </div> {/* end right */}
                        <div>
                            <a href="https://www.linkedin.com/in/anjalisharmaaa/" className="btn btn--primary full-width">See Full Timeline</a>
                        </div>
                    </div> {/* end about-content timeline */}
                    <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>I've worked on some Tech Projects.</h3>
            <p>
                <ul>
                    <strong>May 2020</strong>
                    <li>
                        Portfolio Website
                    </li>
                    <li>
                        COVID 19 - Tracker
                    </li>
                    <li>
                        Personal Advice Generator React App
                    </li>
                    <strong>Apr 2020</strong>
                    <li>
                        React ToDo Web App
                    </li>
                    <li>
                        Online Resume Generator
                    </li>
                    <li>
                        Customised Meme Generator Web App
                    </li>
                    
                    <li>
                        Social Media Profile Launcher - Browser Extension
                    </li>
                    
                    <strong>Jun 2019</strong>
                    <li>
                        DeVote - An Ethereum Blockchain based Voting System Prototype
                    </li>
                    <strong>Mar 2019</strong>
                    <li>
                        MentosS - A Retailed Redefined prototype for Offline Market
                    </li>
                    <strong>Oct 2018</strong>
                    <li>
                        AAWAAZ - A home Automation Prototype for Deaf and Hard of Hearing 
                    </li>
                </ul>
            </p>
          </div>
          <div className="col-six tab-full right">
            <h3>I've Got Some skills.</h3>
            <ul className="skill-bars">
            <li>
                <div className="progress percent100"></div>
                <strong>Business Problem Solving - Analytical, Case Study </strong>
              </li>
              <li>
                <div className="progress percent100"></div>
                <strong>Software Problem Solving - Java, python</strong>
              </li>
              <li>
                <div className="progress percent100"></div>
                <strong>Web Development - HTML5, CSS3, Javascript, ReactJS</strong>
              </li>
              <li>
                <div className="progress percent100"></div>
                <strong>Tools - GIT, Google Adwords, GSuite</strong>
              </li>
              <li>
                <div className="progress percent100"></div>
                <strong>Time Managemet & Project Management</strong>
              </li>   
              <li>
                <div className="progress percent100"></div>
                <strong>Public Speaking & Blogging</strong>
              </li>   
            </ul>
          </div>
        </div> {/* end about-content */}
        <div className="row about-content about-content--buttons">
          <div className="col-six tab-full left">
            <a href="https://github.com/AnjaliSharma1234" className="btn btn--primary full-width">View Projects on Github</a>
          </div>
          <div className="col-six tab-full right">
            <a href="" className="btn full-width">Download my Resume</a>
          </div>
        </div> {/* end about-content buttons */}  
        
                    
                </section> {/* end about */}

            </React.Fragment>
        );
    }
}
