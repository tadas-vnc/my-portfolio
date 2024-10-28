import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import React, { useEffect, useState , useRef} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@coreui/coreui-pro/dist/css/coreui.css";
import { Form, Button, Container, Row, Col, Alert, Card, FormLabel, ListGroup, Accordion , NavItem, NavLink, Nav, InputGroup, ButtonGroup   } from 'react-bootstrap';
import { CDatePicker } from '@coreui/react-pro'
import { gsap } from "gsap";
import {Icon} from "./icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function App() {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const downArrow = useRef(null);
  const newElementRef = useRef(null);
  const softwareRef = useRef(null)
  const langsRef = useRef(null);
  const frameworksRef = useRef(null);
  const fadeOnScroll = useRef([]);
  const [langs, setLangs] = useState([{
    icon:"html5",
    href:"https://en.wikipedia.org/wiki/html"
  },
  {
    icon:"css",
    href: "https://en.wikipedia.org/wiki/css"
  },
  {
    icon:"js",
    href:"https://en.wikipedia.org/wiki/javascript"
  },
  {
    icon:"cpp",
    href:"https://en.wikipedia.org/wiki/C%2B%2B"
  },
  {
    icon:"csharp",
    href:"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
  },
  {
    icon:"node",
    href:"https://nodejs.org/en"
  },
  {
    icon:"python",
    href:"https://python.org"
  },
  {
    icon:"sql",
    href:"https://en.wikipedia.org/wiki/SQL"
  },
  {
    icon:"php",
    href:"https://en.wikipedia.org/wiki/php"
  }
])
  const [skills, setSkills] = useState([
    {
      "title": "Frontend Development",
      "description": "I focus on creating responsive and user-friendly designs to ensure websites and apps look good and function well across all devices. My frontend work involves using HTML, CSS, and JavaScript, and I often work with React.js and Bootstrap CSS framework to build modular and dynamic user interfaces." 
    },
    {
      "title": "Backend Development",
      "description": "My backend development skills include setting up server-side applications using Express.js and PHP. I’m comfortable designing the server architecture, handling requests, and managing the logic that supports the frontend."
    },
    {
      "title": "Database Management",
      "description": "I’m experienced with relational databases like MySQL and SQLite3, and I know how to set up and manage the connection between databases and the backend to ensure efficient data storage and retrieval."
    },
    {
      "title": "Working with APIs",
      "description": "I frequently work with APIs to enable seamless data exchange between different parts of an application. I know how to build, integrate, and troubleshoot APIs to ensure they function properly and securely."
    },
    {
      "title": "Adaptability",
      "description": "I can quickly learn and adapt to new libraries, frameworks, or programming languages as needed for different projects. I’m comfortable exploring new tools and techniques to stay updated with industry standards."
    },
    {
      "title": "Testing and Debugging",
      "description": "I prioritize testing and debugging to ensure code quality and reliability. I use tools like Chrome DevTools and testing frameworks to identify and resolve issues early, making the development process more efficient and stable."
    }
  ]
  )
const [frameworks, setFrameworks] = useState([
  {href:'https://react.dev/', icon:"react"},
  {href:'https://jquery.com/', icon:"jquery"},
  {href:"https://expressjs.com",icon:"express"},
  {href:"https://ejs.co",icon:"ejs"},
  {href:"https://getbootstrap.com/",icon:"bootstrap"},
  {href:"https://gsap.com/",icon:"gsap"},
  {href:"https://flask.palletsprojects.com/en/stable/",icon:"flask"}
])
  const [softwares, setSoftwares] = useState([
    {href:'https://getpaint.net/', icon:"paintnet"},
    {href:'https://en.wikipedia.com/Windows_10', icon:"windows"},
    {href:"https://code.visualstudio.com/",icon:"vscode"},
    {href:"https://en.wikipedia.org/wiki/Microsoft_365",icon:"microsoftoffice"},
    {href:"https://visualstudio.microsoft.com/",icon:"visualstudio"},
    {href:"https://teams.microsoft.com/",icon:"teams"},
    {href:"https://en.wikipedia.org/wiki/Terminal_emulator",icon:"terminal"},
    {href:"https://en.wikipedia.org/wiki/Linux",icon:"linux"},
    {href:"https://git-scm.com/",icon:"git"},
    {href:"https://github.com/",icon:"github"},
    {href:"https://sqlitebrowser.org/", icon:"database"},
    {href:"https://unity.com/", icon:"unity"}
  ])

  const [projects, setProjects] = useState([
    {title:"My portfolio",
     description:"This is my portfolio that you are currently looking at right now.", 
     imageUrl:"https://files.offshore.cat/olKkaEG0.png",
     uses: ["html5","css","js","react","bootstrap", "gsap"],
     buttons:[{variant:"primary",name:"Repository", href:"https://github.com/tadas-vnc/my-portfolio"}]
    },
    {title:"Trentry - Markdown pastebin",
      description:"Clone of rentry.co markdown pastebin.", 
      imageUrl:"https://files.offshore.cat/cmM3N9RU.png",
      uses: ["html5","css","js","ejs","express","node"],
      buttons:[{variant:"primary",name:"Repository", href:"https://github.com/tadas-vnc/trentry"}]
     },
     {title:"URL shortener",
       description:"Just a simple URL shortener made with flask.", 
       imageUrl:"https://files.offshore.cat/eRUoV162.png",
       uses: ["html5","css","js","react","flask","python"],
       buttons:[{variant:"primary",name:"Repository", href:"https://github.com/tadas-vnc/url-shortener"}]
      },{title:"EventsApp",
        description:"React app made for sharing live events.", 
        imageUrl:"https://files.offshore.cat/2xlXzGto.png",
        uses: ["html5","css","js","react","express","bootstrap"],
        buttons:[{variant:"primary",name:"Repository", href:"https://github.com/tadas-vnc/events-app"}]
       }
  ])
  const [allCombine, setAllCombined] = useState([...frameworks, ...softwares, ...langs])
  const [isOpen, setIsOpen] = useState(true)
  const [fieldSize, setFieldSize] = useState("380px");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [response, setResponse] = useState("")
  const [alertVariant, setAlertVariant] = useState("danger")
  function sendEmail(){
    setButtonDisabled(true);
    fetch("https://api.emailjs.com/api/v1.0/email/send",
      {
        body:JSON.stringify({"service_id":"service_yzp1nbb","user_id":"FM2vvKdQPXBrKusHp","template_id":"template_avhrjrv",
          template_params: {
            "message":message,
            "from_name":name, 
            "reply_to":email
          },
          "lib_version":"4.3.3"
        }),
        method: "POST",
        headers: {'content-type':'application/json'}}).then(res=>{
          if(!res.ok){
            setResponse("Error occurred while trying to send a message.");
            setAlertVariant("danger");
          }else{
            setResponse("Message has been sent successfully.");
            setAlertVariant("success");
          }
        }).catch(e=>{
          setResponse("Error occurred while trying to send a fetch request.");
          setAlertVariant("danger");
        })
  }
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(parentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(childRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    }).from(downArrow.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
    
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5; 

      if (window.scrollY > triggerPoint) {
        gsap.to(downArrow.current, { opacity: 0, duration: 0.5 });
      } else {
        gsap.to(downArrow.current, { opacity: 1, duration: 0.5 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    gsap.from(newElementRef.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: newElementRef.current,
        start: "top 90%",  
        toggleActions: "play none none none",
      },
    });
    gsap.from(langsRef.current, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: langsRef.current,
        start: "top 80%",  
        toggleActions: "play none none none",
      },
    });
    gsap.from(frameworksRef.current, {
      opacity: 0,
      x: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: frameworksRef.current,
        start: "top 80%",  
        toggleActions: "play none none none",
      },
    });
    gsap.from(softwareRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: softwareRef.current,
        start: "top 80%",  
        toggleActions: "play none none none",
      },
    });

    fadeOnScroll.current.forEach((ref) => {
      gsap.from(ref, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  useEffect(() => {
    

    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS.load('particles-js', (window.location.pathname +'/particlesjs.json').replace("//","/"), function() {
          console.log('callback - particles.js config loaded');
        });
      }
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = loadParticles;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  let oldScrollY = 0;

  const [direction, setDirection] = useState('up');

  const controlDirection = () => {
      if(window.scrollY > oldScrollY) {
          setDirection('down');
      } else {
          setDirection('up');
      }
      oldScrollY = window.scrollY;
  }

  useEffect(() => {
      window.addEventListener('scroll', controlDirection);
      return () => {
          window.removeEventListener('scroll', controlDirection);
      };
  },[]);
  return (
    <>
      <Helmet>
        <title>My portfolio</title>
      </Helmet>
      <div className="App">
        <div id="floatingnavbar" style={{"top": direction != "up" ? "-100%" : "0px"}}>
          <div>
            <a href='#'>Top</a>
            <a href='#techstack'>I use</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </div>
        </div>
        <div id="particles-js">
        </div>
        
        <div id="ontopofparticles">
        <Card className="dark-theme" ref={parentRef} style={{width:"400px", maxWidth:"100dvw"}}>
          <Card.Body>
          <div className="container" ref={childRef}>
            <div className="pfp">
              <img src="https://cvbankas-img.dgn.lt/userphoto_4_22516987/img.jpg"></img>
            </div>
            <div className="name"><h3 className='text-center'>Tadas Venckus</h3></div>
            <div className="desc"><p className='text-center'>Full-stack developer<br></br>UI designer<br></br>Software developer</p></div>
          </div>
         </Card.Body>
         
        </Card>
        
        </div>
        <p ref={downArrow} style={{textAlign:"center",position:"absolute",top:"75%", width:"100%",  animation: "upDown 1.5s ease-in-out infinite"}}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg></p>
        <div id="pageunder">
          <h2 className='text-center' id="techstack" ref={newElementRef}>What do I use?</h2>
          <div className="skills">
          <Card className='skillcontainer dark-theme' ref={langsRef}>
            <h4>Languages I use</h4>
            <div className='iconswrapper'>
              {langs.map((lang,index) => (
                <a target='_blank' className='btn btn-secondary' href={lang.href} key={index}>
                  <Icon icon={lang.icon}></Icon>
                </a>
              ))}
            </div>
          </Card>
            <Card className='skillcontainer dark-theme' ref={frameworksRef}>
              <h4>Frameworks and libraries I use</h4>
              <div className='iconswrapper'>
              {frameworks.map((lang,index) => (
                <a target='_blank' className='btn btn-secondary' href={lang.href} key={index}>
                  <Icon icon={lang.icon}></Icon>
                </a>
              ))}
              </div>
            </Card>
            
            <div className='w-100'></div>
            <Card className='skillcontainer dark-theme' ref={softwareRef}>
              <h4>Tools and software that I use</h4>
              <div className='iconswrapper'>
              {softwares.map((lang,index) => (
                <a target='_blank' className='btn btn-secondary' href={lang.href} key={index}>
                  <Icon icon={lang.icon}></Icon>
                </a>
              ))}
              </div>
            </Card>
            
          </div>
          <hr></hr>
          <h2 ref={(el) => (fadeOnScroll.current[0] = el)} id="skills">What are my skills?</h2>
          <div className='skills'>
            {skills.map((skill, index)=>(
              <Card className='dark-theme skill-card' ref={(el) => (fadeOnScroll.current[index + 1] = el)} key={index}>
                <Card.Body>
                  <h3 className='text-center'>{skill.title}</h3>
                  <p>{skill.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
          <hr></hr>
          
          <h2 id="projects" ref={(el) => (fadeOnScroll.current[fadeOnScroll.current.length + 1] = el)}>What are my projects?</h2>
          <Accordion ref={(el) => (fadeOnScroll.current[fadeOnScroll.current.length + 1] = el)} className='dark-theme' onSelect={(e)=>{setIsOpen(!isOpen);}} defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header className='dark-theme'>My projects (Click here to {isOpen ? "hide" : "show"}!)</Accordion.Header>
              <Accordion.Body>
                <div className='center projects' style={{overflowX:"auto", flexWrap:"wrap"}}>
              
                  {projects.map((project, index) =>(
                <Card key={index} style={{ width: '18rem', maxWidth:"100dvw" }} className='dark-theme'>
                  <Card.Img variant="top" src={project.imageUrl} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}
                    </Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <p className='text-center'>Made using:</p>
                        {project.uses.map((usethis, index)=>(
                          
                          <a target='_blank' className='smollsvg btn btn-secondary' href={allCombine.find(f => f.icon === usethis).href} key={index}>
                            <Icon icon={usethis}></Icon>
                          </a>
                          
                        ))}
                      </ListGroup.Item>
                      <ListGroup.Item>
                    {project.buttons.map((button, index)=>(
                    <a href={button.href} key={index} target='_blank' className={"btn btn-"+button.variant} variant={button.variant}>{button.name}</a>
                    ))}
                    </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>))}
                </div>
                </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr></hr>
          <h2 id="contact">Contact me</h2>
          <div className='center'>
          <Card ref={(el) => (fadeOnScroll.current[fadeOnScroll.current.length + 1] = el)} style={{width:"800px", maxWidth:"100%", display:"flex", flexWrap:"wrap", justifyContent:"space-around", flexDirection:"row"}} className='dark-theme mb-5'>
          <div className='' style={{width:fieldSize}}>
            <FormLabel>Name</FormLabel>
            <InputGroup  className="">
              <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M420-160v-520H200v-120h560v120H540v520H420Z"/></svg></InputGroup.Text>
              <Form.Control id="shortenPass" aria-label="link" placeholder='Your name...' type="text" value={name} onInput={(e)=>{setName(e.target.value);}} />
              
            </InputGroup>
            </div>
            <div className='' style={{width:fieldSize}}>
            <FormLabel>Email</FormLabel>
            <InputGroup  className="">
              <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></InputGroup.Text>
              <Form.Control id="shortenPass" aria-label="link" placeholder='Your email...' type="text" value={email} onInput={(e)=>{setEmail(e.target.value);}}/>
            </InputGroup>
            </div>
            <div style={{width:"100%", margin:"10px"}}>
            <FormLabel className='text-left'>Message</FormLabel>
            <Form.Control placeholder='Message...' value={message} onInput={(e)=>{setMessage(e.target.value);}} style={{width:"100%",height:"120px"}} as="textarea" aria-label="With textarea" />
            </div>
            <div className='center' style={{flexDirection:"column", alignItems:"center"}}>
              <Button style={{width:"min-content"}} onClick={(e)=>{sendEmail();}} disabled={buttonDisabled} className='text-center'>Send!</Button>
              <div className='w-100'>
                 <div className='center'>
                {response && <Alert style={{width:"max-content"}} variant={alertVariant} dismissible="true" onClose={(e)=>{setResponse("");}}>
                      {response}
                  </Alert>}
                  </div>
              </div>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
