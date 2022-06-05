import './resume.css'
function Resume() {
  return (
    <div className="containner">
      <div className="above intro">

        <p className='name'>Zepeng Chen
          <a href='http://zepengblog.herokuapp.com/portfolios' target="_blank">
            <span>My portfolios<i class="link fa-solid fa-up-right-from-square"></i></span>
          </a>
        </p>
        <h2 className='title'>About me </h2>
        <p className='desc'>I was an electronics engineer in China mainly focusing on embedded hardware system
          and sometimes assisting software team in writing drivers using C. During my graduate studies, I focus 
          on web development and the applications of machine learning.
        </p>
      </div>
      <div className="below detail">
        <div className="left">
          <div className="contact">
            <a href='mailto:zepengc@mun.ca'>
              <div className='email'>
                <i class="fa-solid fa-envelope"></i>
                <p>zepengc@mun.ca</p>
              </div>
            </a>
            <div className='phone'>
              <i class="fa-solid fa-mobile-screen-button"></i>
              <p>(709)327-7352</p>
            </div>
            <div className='location'>
              <i class="fa-solid fa-location-dot"></i>
              <p>St. John's, Canada</p>
            </div>
            <a href='https://zepengblog.herokuapp.com' target="_blank">
              <div className='blog'>
                <i class="fa-solid fa-blog"></i>
                <p>zepengblog.herokuapp.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/zepchen/" target="_blank">
              <div className='linkedin'>
                <i class="fa-brands fa-linkedin-in"></i>
                <p>linkedin.com/in/zepchen</p>
              </div>
            </a>
            <a href='https://github.com/zepsgit' target="_blank">
              <div className='github'>
                <i class="fa-brands fa-github"></i>
                <p>github.com/zepsgit</p>
              </div>
            </a>
          </div>
          <div className="skill">
            <p className='cat'>SKILLS</p>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>JSON</li>
              <li>REST API</li>
              <li>Express</li>
              <li>Nodejs</li>
              <li>Java</li>
              <li>Python</li>
              <li>MongoDB</li>
              <li>Database</li>
              <li>SQL</li>
              <li>Git</li>
              <li>Web Development</li>
              <li>Machine Learning</li>
              <li>Data Analysis</li>
              <li>Matlab</li>
              <li>Skilearn</li>
              <li>Pandas</li>
              <li>Numpy</li>
              <li>OpenCV</li>
            </ul>
          </div>
          <div className="language">
            <p className='cat'>LANGUAGES</p>
            <h2 className='lan'>English</h2>
            <p className='desc'>Full professional Proficiency</p>
            <h2 className='lan'>Chinese</h2>
            <p className='desc'>Native or Bilingual Proficiency</p>
          </div>
          <div className="interest">
            <p className='cat'>INTERESTS</p>
            <ul>
              <li>Coding</li>
              <li>Basketball</li>
              <li>Reading</li>
              <li>Calligraphy</li>
              <li>Travelling</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="work">
            <p className='cat rightcat'>Work Experience</p>
            <div className='section'>
              <p className='title'>Electronics Engineer</p>
              <p className='company'>Alpha Networks Inc.</p>
              <div className='timeline'>
                <p className='time'>06/2016 - 05/2019</p>
                <p className='city'>Chengdu, China</p>
              </div>
              <div className='task'>
                <ol>
                  <li>Designed the schematics and layouts of PCB.</li>
                  <li>Wrote driver of Flash memory and implemented the communication protocol
                    between MCU and peripheral devices.
                  </li>
                  <li>Followed up mass production of an amount of 10k with the reject ratio under 0.5%.</li>
                </ol>
              </div>
            </div>

            <div className='section'>
              <p className='title'>Backpacker</p>
              <p className='company'>Farms, Hotels, Restaurants</p>
              <div className='timeline'>
                <p className='time'>12/2019 - 05/2021</p>
                <p className='city'>Australia</p>
              </div>
              <div className='task'>
                <ol>
                  <li>As a backpacker, I worked in the farms, hotels, meat factories across Australia for saving
                    tuition and exploring the pretty view of Australia. </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="project">
            <p className='cat rightcat'>Academic {"&"} Personal Projects </p>
            <div className='section'>
              <a href='http://zepengblog.herokuapp.com/' target="_blank">
                <p className='title'>Personal Blog (03/2022 - 06/2022)
                  <i class="link fa-solid fa-up-right-from-square"></i>
                </p>
              </a>
              <div className='task'>
                <ol>
                  <li>Implemented the front-end pages using
                    <span style={{ fontWeight: 'bold' }}> React, </span>
                    <span style={{ fontWeight: 'bold' }}>JSX, </span>
                    <span style={{ fontWeight: 'bold' }}>CSS.</span>
                  </li>
                  <li>Connected server to
                    <span style={{ fontWeight: 'bold' }}> MongoDB </span>
                    using <span style={{ fontWeight: 'bold' }}> Mongoose.</span> </li>
                  <li>Fetched and sent data via <span style={{ fontWeight: 'bold' }}> Axios.</span> </li>
                  <li>Designed routing with <span style={{ fontWeight: 'bold' }}> Express.</span></li>
                </ol>
              </div>
            </div>

            <div className='section'>
              <a href='https://github.com/zepsgit/ocean-mammal-sounds-classification' target="_blank">
                <p className='title'>Marine Mammal Sound Classification (01/2022 - 06/2022)
                  <i class="link fa-solid fa-up-right-from-square"></i>
                </p>
              </a>
              <div className='task'>
                <ol>
                  <li>Fetched audio data, and built metadata for all audio files for machine learning and deep learning.</li>
                  <li>Used <span style={{ fontWeight: 'bold' }}>Python, </span><span style={{ fontWeight: 'bold' }}>Pandas, </span><span style={{ fontWeight: 'bold' }}>Librosa, </span>
                    and <span style={{ fontWeight: 'bold' }}>Scikit-Learn</span> in <span style={{ fontWeight: 'bold' }}>Jupyter Notebook </span>
                    to build machine learning models.
                  </li>
                  <li>Explored and learned different algorithms of machine learning and deep learning, and used
                    <span style={{ fontWeight: 'bold' }}> Keras</span> and <span style={{ fontWeight: 'bold' }}>Tensorflow </span>
                    to implement deep learning models.
                  </li>
                </ol>
              </div>
            </div>

            <div className='section'>
              <a href='https://github.com/zepsgit/OpticalMusicRecognition' target="_blank">
                <p className='title'>Optical Music Recognition (05/2021 - 09/2021)
                  <i class="link fa-solid fa-up-right-from-square"></i>
                </p>
              </a>
              <div className='task'>
                <ol>
                  <li>
                    Implemented several image pre-processing algorithms such as image filtering, binarization, and segmentation using
                    <span style={{ fontWeight: 'bold' }}> Python. </span>
                  </li>
                  <li>Employed
                    <span style={{ fontWeight: 'bold' }}> OpenCV </span>
                    and <span style={{ fontWeight: 'bold' }}> CNN </span> for image classification.</li>

                </ol>
              </div>
            </div>

          </div>
          <div className="education">
            <p className='cat rightcat'>Education</p>
            <div className='uni'>
              <p className='degree'>Master of Applied Science in Computer Engineering</p>
              <p className='uniname'>Memorial University of Newfoundland</p>
              <div className='timeline'>
                <p className='time'>05/2021 - 09/2022</p>
                <p className='city'>St. John's, Canada</p>
              </div>
              <ol>
                <li>GPA: 3.6/4.0</li>
              </ol>
            </div>
            <div className='uni'>
              <p className='degree'>Bachelor of Engineering in Electronics Engineering</p>
              <p className='uniname'>Hubei University of Technology</p>
              <div className='timeline'>
                <p className='time'>09/2012 - 06/2016</p>
                <p className='city'>Wuhan, China</p>
              </div>
              <ol>
                <li>GPA: 3.0/4.0</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
