import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";

const CoursePage = () => {
  return(
    <div className="body" >
    <Header/>
    <div className="inner-body">
    
    <center><h1><font color="blue">Our Academic Programs</font></h1></center>
        <p>
          Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
        </p>
        <h2>Discover Campus Life</h2>
        <video src="/videos/college-tour-FAmcnyfF.mp4" width="100%" height="auto"controls  ></video>
        <p class="video-caption">Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
        <h2>Undergraduate Programs (UG)</h2>
        <ul type="square"></ul>
        <li>*Bachelor of Science (B.Sc.)*</li>
        <ul type="square">
        <li>Computer Science (3 years)</li>
        <li>Information Technology (3 years)</li>
        <li>Biotechnology (3 years)</li>
        </ul>
        <ul type="square"></ul>
        <li>*Bachelor of Commerce (B.Com)*</li>
        <ul type="square">
          <li>Accounting & Finance (3 years)</li>
          <li>Banking & Insurance (3 years)</li>
        </ul>
        <ul type="square"></ul>
        <li>*Bachelor of Arts (B.A.)*</li>
        <ul type="square">
          <li>English Literature (3 years)</li>
          <li>Psychology (3 years)</li>
        </ul>
        <h2>Postgraduate Programs (PG)</h2>
        <ul type="square"></ul>
        <li>*Master of Science (M.Sc.)*</li>
        <ul type="square">
          <li>Computer Science (2 years)</li>
          <li>Information Technology (2 years)</li>
          </ul>
          <ul type="square"></ul>
          <li>*Master of Commerce (M.Com)* (2 years)</li>
          <li>*Master of Arts (M.A.)* (2 years)</li>

         <h2>Program Details & Fee Structure (Annual)</h2>
          <table border="solid 2px">
            
            <tr>
              <th>Program Type</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Annual Fee (INR)</th>
              <th>Eligibility</th>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Sc. Computer Science</td>
              <td>3 Years</td>
              <td>₹ 85,000</td>
              <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Com. Accounting & Finance</td>
              <td>3 Years</td>
              <td>₹ 70,000</td>
              <td>10+2 Commerce (45%)</td>
            </tr>
            <tr>
              <td>PG</td>
              <td>M.Sc. Information Technology</td>
              <td>2 Years</td>
              <td>₹ 95,000</td>
              <td>B.Sc. IT/CS (50%)</td>
            </tr>
            
          </table>
          <h2>Specialized & Vocational Courses</h2>
        <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
        <h4>Explore detailed syllabi and admission criteria on our Admissions page.</h4>
       <a href="/contact"> <center><button>Inquire About Courses</button></center></a>
        
    </div>
    <Footer/>
    </div>
   
  )
}

export default CoursePage;