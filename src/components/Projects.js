import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Home",
      description: "With the catalog",
      imgUrl:"https://res.cloudinary.com/francopress26/image/upload/v1663282795/pf-img/Home1_ncncoo.png",
    },
    {
      title: "Users active",
      description: "Admin view with the control of the permissions",
      imgUrl: "https://res.cloudinary.com/francopress26/image/upload/v1663282795/pf-img/UsersDashboard_hfhddx.png",
    },
    {
      title: "Detail",
      description: "Detail of each product",
      imgUrl: "https://res.cloudinary.com/francopress26/image/upload/v1663282792/pf-img/Detail_wcxjtn.png",
    },
    {
      title: "Update",
      description: "Admin view to update products",
      imgUrl: "https://res.cloudinary.com/francopress26/image/upload/v1663282795/pf-img/editProducts_rhdyno.png",
    },
    {
      title: "Catalog",
      description: "With filtering and ordering",
      imgUrl: "https://res.cloudinary.com/francopress26/image/upload/v1663282793/pf-img/Home2_yzgwmn.png",
    },
    {
      title: "Stadistics",
      description: "Real stadistics of the page with graphs",
      imgUrl: "https://res.cloudinary.com/francopress26/image/upload/v1663282791/pf-img/Dashboard_maruig.png",
    },
  ];
  const projectPi = [
    {
      title: "Landing",
      description: "Landing page",
      imgUrl:"https://res.cloudinary.com/francopress26/image/upload/v1663282812/pi-imgs/Landing_ntxcoz.png",
    },
    {
      title: "Detail",
      description: "Detail of each dog with the caracteristics",
      imgUrl: "https://res.cloudinary.com/francopress26/image/upload/v1663282812/pi-imgs/Detail_xnwvu1.png",
    },
    {
      title: "Home",
      description: "Home with pagination, ordering and filtering",
      imgUrl: "https://res.cloudinary.com/francopress26/image/upload/v1663282809/pi-imgs/Home_t6ki88.png",
    },
    {
      title: "Form",
      description: "Form to create a dog validated with JavaScript",
      imgUrl: "https://res.cloudinary.com/francopress26/image/upload/v1663282808/pi-imgs/Create_gkck0s.png",
    }  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Kemba E-commerce</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Dogs SPA Wiki</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Soon...</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                            <p>E-commerce with design and development of the following functionalities:</p>
                            <p>● CRUD of the products (Catalogue)</p>
                            <p>● Integration of payment gateway (Mercado Pago)</p>
                            <p>● Sending of transactional mails (Node mailer)</p>
                            <p>● Administration of shopping cart and product orders </p>
                            <p>● Creation of an admin dashboard for the absolute management of the page,<br></br> including modification of 
                                    shipping status, graphics and statistics with real data from the app,<br></br> control of user permission and 
                                    catalog modification </p>
                            <p> ● Technologies used: Javascript with React, Redux, Material UI, Node.js with Express, PostgreSQL and 
                                                    Sequelize</p> 
                                            <p><a href="https://pf-henry.vercel.app/" target="a_blank" className={'repository-link'}>Visit</a></p> <p><a href="https://github.com/franRappazzini/PF---Henry/tree/development" className={'repository-link'}>Repository</a></p>                  <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Development of a SPA (Single Page Application) using React for the Front End and Redux as state managment.</p>
                            <p>● All components were developed with pure CSS and Material UI</p>
                            <p>● The SPA consumes data from an API (The dog API) through a Back End developed in Node.JS using Express, adding new features to the original API.</p>
                            <p>● Search, ordering and filtering</p>
                            <p>● Controlled form for the creation of a dog</p>
                            <p>● Detail of each dog</p>
                            <p> ● All integrated with an intuitive and easy-to-navigate design</p>
                            <p><a href="https://pf-henry.vercel.app/" target="a_blank" className={'repository-link'}>Visit</a></p> <p><a href="https://github.com/franRappazzini/PF---Henry/tree/development" className={'repository-link'}>Repository</a></p>            

                            <Row>
                        {
                          projectPi.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I will soon be adding some projects to my Portfolio in order to improve my skills.<br></br>  I´m just looking for one...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
