import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="Projects">
      <h2 className="py-5 text-center">Projects</h2>
      <div className="container">
        <ProjectCard
          slides={[
            "media/images/wanderlust.png",
            "media/images/image.png",
            "media/images/wanderlust1.png",
          ]}
          title={"Wanderlust"}
          about={"A Full-Stack Marketplace for Unique Stays"}
          keyFeatures={[
            "Secure Authentication: Implemented user signup/login and authorization using Passport.js, ensuring users can only edit or delete their own listings.",
            "Cloud Image Handling: Integrated Cloudinary for seamless image uploads and storage.",
            "Interactive Maps: Integrated Mapbox API to provide real-time geocoding and property location visualization.",
            "Responsive Design: Built a mobile-first UI using Bootstrap to ensure a smooth experience across all devices.",
          ]}
          time={"Feb 2026"}
          techStack={
            "EJS, Node.js, GitHub, CSS, npm, JavaScript, HTML, Bootstrap, MongoDB, Express.js"
          }
          linkedinUrl={"https://lnkd.in/p/dbKKpd6K"}
          githubUrl={
            "https://github.com/Aniruddhajadav/Wanderlust-Airbnb-clone"
          }
          live={"https://wanderlust-w28s.onrender.com/listings"}
        />
        <br></br>
        <ProjectCard
          slides={[
            "media/images/zerodha.png",
            "media/images/zerodha1.png",
            "media/images/zerodhaKite1.png",
            "media/images/zerodhaKite2.png",
          ]}
          title={"Zerodha Clone"}
          about={
            "A full-stack (MERN) web application clone of Zerodha, India’s leading stock brokerage platform and Kite Dashboard."
          }
          keyFeatures={[
            "1. Marketing & Landing Platform: Replicates Zerodha's clean UI featuring its core trust statistics, pricing highlights, ecosystem structure, and Varsity education portal.",
            "2. Kite User Dashboard:",
            "Buy/Sell Action Windows: Popup modals enabling simulation of instant market orders.",
            "Data Visualizations: Dynamic graphs and interactive doughnut/vertical charts powered by Chart.js for visually evaluating asset distribution and portfolio balance.",
            <a href="https://zcdashb.netlify.app" target="_blank">
              Kite Dashboard Demo
            </a>,
          ]}
          time={"May-June 2026"}
          techStack={
            "React.js, Bootstrap, Material-UI, Chart.js, Node.js, Express.js, JWT, Bcrypt, MongoDB & Mongoose"
          }
          linkedinUrl={"https://lnkd.in/p/dVQPmJy2"}
          githubUrl={"https://github.com/Aniruddhajadav/Zerodha-Clone"}
          live={"https://zerodha-clone-oo65.onrender.com"}
        />
      </div>
      <br />
      <hr />
    </section>
  );
}

export default Projects;
