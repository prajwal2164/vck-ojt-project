import Header from "../components/Header/Header";

  import Footer from "../components/footer/Footer";
const HomePage = () => {
  return(
    <div className="body" >
     <Header/>
     <div className="inner-body">
     
    <center><img src="/images/college-banner-Cz0xylpt.png"width="110%" height="300px"></img></center>
    <center><h2>Welcome to Vivekanand College !</h2>
    <h4>Your journey to excellence starts here.</h4></center>
     <center><a href="/admision"><button >Apply Now!</button></a></center>
    
      <p>
        *Vivekanand College* is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.<br /><br />
        At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
      </p>
      <h2>Why Choose Vivekanand College...</h2>
      <ul type="square"></ul>
        <li>*Legacy of Excellence:* Decades of commitment to quality education.</li>
        <li>*Experienced Faculty:* Learn from renowned experts and passionate educators.</li>
        <li>*Modern Facilities:* Well-equipped labs, expansive library, and comfortable campus.</li>
        <li>*Holistic Development:* Focus on co-curricular activities, sports, and community service.</li>
        <li>*Strong Placements:* Excellent career opportunities with leading companies.</li>
        <h2>Campus Life & Facilities</h2>
      <center> <img src="images/students-studying-DbLGuwF_.jpeg "height="250px" width="450px"></img>
        <img src="images/campus-life-Crkero7B.jpg"height="250px" width="450px"></img></center>
        <h4 align="center">Ready to start your journey with us?</h4>
      <a href="/courses"> <center><button >Explore Course</button></center></a>
     
     
      
      
    </div>
    <Footer/>
    </div>
  )
}

export default HomePage;