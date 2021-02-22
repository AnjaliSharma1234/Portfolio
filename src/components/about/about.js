import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="s-about target-section">
          <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
              <h3>Education</h3>
              <h4>
                Bachelor of Technology in Electrical and Electronics Engineering{" "}
                <br /> VIT Vellore (Jul 2017 - May 2021)
              </h4>
              <p className="lead">CGPA: 9.13/10(till 7th Sem)</p>
              <p>
                {" "}
                Academic Merit Certificate for IV University Rank in 2017-18 |
                Member of MHRD Institutions's Innovation Council (IIC) - VIT |
                Represented VIT at Formula Student Germany 2019 | Former Student
                Mentor at Mozilla Student Developers Group - VIT | Won multiple
                prizes for hackathons, academics, and public speaking.{" "}
              </p>
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
                    <p className="timeline__timeframe">Feb 2021 - Present</p>
                    <h3>Associate Product Manager</h3>
                    <h5>Bajaj Finserv Health</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Working in the Product domain of one of the finest
                      healthcare solutions to drive change for good.
                    </p>
                  </div>
                </div>

                {/* end timeline__block */}
                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Oct 2020 - Feb 2021</p>
                    <h3>Category Growth Analyst</h3>
                    <h5>Gradeup (Gradestack Learning Pvt Ltd)</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Funnel Analysis, Competitor Benchmarking & Analyzing data
                      on Google Analytics, Tableau, and CleverTap software,
                      extracting insights to develop marketing and growth
                      strategies.
                    </p>
                  </div>
                </div>
                {/* end timeline__block */}

                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Jan 2020 - Oct 2020</p>
                    <h3>Google Ads Top Marketer</h3>
                    <h5>Google Ad Grants Online Marketing Challenge 2020</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Increased total conversions by 1798% and click through
                      rate by 50.27% within 4 weeks through Market Analysis and
                      Research for an education based NGO - PlanetRead
                    </p>
                  </div>
                </div>
                {/* end timeline */}
              </div>
            </div>{" "}
            {/* end of left */}
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
                    <p>
                      One among top 100 women engineers from 7300+ applicants
                      all over India. Attended 53 online workshops and 3
                      bootcamps to learn problem solving and industrial
                      analytical skills.
                    </p>
                  </div>
                </div>
                {/* end timeline__block */}

                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div clssName="timeline__header">
                    <p className="timeline__timeframe">Sept 2019 - Present</p>
                    <h3>Microsoft Student Partner</h3>
                    <h5>Microsoft</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Organised and informed 150 students through 9 workshops
                      about Open Source, Machine Learning, Azure and DevOps.
                      <br />
                      Guest Keynote Speaker at Global Diversity CFP Day 2020
                    </p>
                  </div>
                </div>
                {/* end timeline__block */}

                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">Jan 2018 - Sept 2019</p>
                    <h3>Design & Cost Analysis Team Member</h3>
                    <h5>Pravega Racing</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Analysed, prepared, and presented the Design and Cost
                      Analysis of the race car internationally at Formula
                      Student Germany 2019. <br />
                      Secured 15th overall rank out of 117 teams worldwide.
                    </p>
                  </div>
                </div>
                {/* end timeline__block */}
              </div>
            </div>{" "}
            {/*end of right*/}
            <div>
              <a
                href="https://www.linkedin.com/in/anjalisharmaaa/"
                className="btn btn--primary full-width"
              >
                See Full Timeline
              </a>
            </div>
            {/* end about-content timeline */}
          </div>
        </section>{" "}
        {/* end about */}
      </React.Fragment>
    );
  }
}
