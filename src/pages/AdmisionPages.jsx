import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
const AdmisionPages = () => {
  return (
    <div className="body" >
        <Header/>
         <div className="inner-body">
        
       <center><h1><font color="blue">Admissions at Vivekanand College</font></h1></center>
        <p align="left">Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.<br></br><br></br>

Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p><hr></hr>

<h3 align="left">Eligibility Criteria for Undergraduate Programs</h3>
<table border="2">
    <tr>
        <th>Program</th>
        <th>Minimum Qualification</th>
        <th>Required Subjects</th>
        <th>Minimum Marks (%)</th>
    </tr>
    <tr>
        <td>B.Sc. Computer Science</td>
        <td>10+2 (or equivalent)</td>
        <td>Physics, Chemistry, Maths</td>
        <td>50%</td>
    </tr>
    <tr>
        <td>B.Com. Accounting & Finance</td>
        <td>10+2 (or equivalent)</td>
        <td>Commerce Stream</td>
        <td>45%</td>
    </tr>
    <tr>
        <td>B.A. English Literature</td>
        <td>10+2 (or equivalent)</td>
        <td>Any Stream</td>
        <td>40%</td>
    </tr>
</table><hr></hr>

<h3 align="left">Application Process</h3>
<ol align="left">
    <li><b>Online Application:</b> Fill out the application form available on our portal.</li>
    <li><b>Document Submission:</b> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
    <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
    <li><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.
</li>
    <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>

</ol><hr></hr>

< p align="left">For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="/courses">Courses page</a> or<a href="/contact"> Contact us</a> directly.</p>


    </div>
    <Footer/>
    </div>
   
     )
}
export default AdmisionPages;
