import React, { Component } from 'react';

import Zoom from 'react-reveal/Zoom';
import NavigationArrow from '../../components/Navigation/NavigationArrow/NavigationArrow';
import Button from '../../components/UI/TechButton/TechButton';
import Project from '../../components/Project/Project';
import './Portfolio.less';

import bcServices from '../../assets/images/bcServices.jpg';
import cruisingStore from '../../assets/images/cruisingStore.jpg';
import lillyOncology from '../../assets/images/lillyOncology.jpg';
import partnerExchange from '../../assets/images/partnerExchange.jpg';

class Portfolio extends  Component {

    state = {
        techStack: [
            {id: 0, name:"Show All",active:true},
            {id: 1, name:"ReactJS",active:false},
            {id: 2, name:"Javascript",active: false},
            {id: 3, name:"jQuery",active: false},
            {id: 4, name:"HTML5",active: false},
            {id: 5, name:"CSS3",active: false},
            {id: 6, name:"Less/Sass",active: false},
            {id: 7, name:"NodeJS",active: false},
            {id: 8, name:"AngularJS",active: false},
            {id: 9, name:"Responsive Design",active: false},
            {id: 10, name:"Bootstrap",active: false},
            {id: 11, name:"RequireJs",active: false},
            {id: 12, name:"ES6",active: false}
        ],
        prevId: 0,
        projects: [
            {
                id: 0,
                name: "AT & T – Partner Exchange",
                description: "Partner Exchange is a B2B e-commerce project. It was an AT&T project which aimed at creating a website for selling the services provided by AT &T to different vendors.",
                techStack: ["HTML5", "JSP","jQuery","CSS3","Javascript"],
                url: "https://partnerexchange.att.com/apex/PortalDesignHomeUnauth",
                imgSource: partnerExchange
            },
            {
                id: 1,
                name: "AT & T – BC Services",
                description: "Worked as a Senior UI Developer. Involved in the development of the web pages using Angularjs, JavaScript, HTML5, CSS3, Bootstrap, RequireJs. Also involved in assigning tasks to other team members for each sprint and deciding the stories for Iteration for front end. Also involved in writing unit test cases for the front end.",
                techStack: ["AngularJS","Less/Sass","Bootstrap","RequireJs", "HTML5", "CSS3","Javascript"],
                url: "https://www.att.com/ebiz/registration",
                imgSource: bcServices
            },
            {
                id: 2,
                name: "Lilly - Oncology",
                description: "A website specific to Tablet/iPad to handle user, doctor and representative experience (registering, case study, etc ) in Hospital.",
                techStack: ["NodeJS","ReactJS","Less/Sass","ES6", "HTML5", "CSS3","Responsive Design"],
                url: "http://www.lillyoncology.com/",
                imgSource: lillyOncology
            },
            {
                id: 3,
                name: "Cruising Store",
                description: "Working as a lead front end developer which involves analyzing the stories, assigning tasks to other front-end developers, and working them to close each iteration’s work. Also involved in defect fixing and performance optimization. I was sent to Lake Mary, USA during the initial phase of the project to get a kick start after gathering requirements and understanding the tech stack required as per the technical challenges.",
                techStack: ["HTML5", "JSP","jQuery","CSS3","Javascript", "Bootstrap"],
                url: "https://cruises.jetblue.com/",
                imgSource: cruisingStore
            },
        ]
    }
    filterByTech = (id) => {
        let techStack = [];
        if(this.state.prevId !== id) {
            techStack = this.state.techStack.map((tech,key) => {
                if(key === id) {
                    return {
                        ...tech,
                        active: !tech.active
                    }
                }else {
                    return {
                        ...tech,
                        active: false
                    }
                }
                
            })
            
            this.setState({techStack: techStack,prevId: id});
        }
        
    }

    render () {
        let technologies = null;
        if(this.state.techStack) {
            technologies = this.state.techStack.map((tech) => {
                if(tech.active) {
                    return (
                        <Button techId={tech.id} classes="White displayInline active" clicked={() => this.filterByTech(tech.id)} key={tech.id}>{tech.name}</Button>
                    )
                }
                return (
                    <Button techId={tech.id} classes="White displayInline" clicked={() => this.filterByTech(tech.id)} key={tech.id}>{tech.name}</Button>
                )
            })
        };
        let activeTech = null;
        for(let tech of this.state.techStack) {
            if(tech.active) {
                activeTech = tech;
            }
        };
        let projectArray = null;
        if(activeTech.id === 0) {
            projectArray = this.state.projects.map(project => {
                return (
                    <Project key={project.id} url={project.url} imgsrc={project.imgSource} name={project.name} techStack={project.techStack} description= {project.description} />
                )
            });
        } else {
            projectArray = this.state.projects.map(project => {
                if(project.techStack.indexOf(activeTech.name) >= 0) {
                    return (
                        <Project key={project.id} url={project.url} imgsrc={project.imgSource} name={project.name} techStack={project.techStack} description= {project.description} />
                    )
                }
                return null;
            });
        }
        
        // if(this.state.projects) {
        //     if(this.state.techStack[0].active) {
        //         projects = this.state.projects.map((project) => {
                    
        //         })
        //     }
        //     projects = this.state.projects.map((project) => {
        //         return this.state.techStack.map((tech) => {
        //             if(tech.name === "Show All") {

        //             }
        //         })
        //     })
        // }
        return (
            <div className="portfolio">
                <h2>Front End Developer Portfolio</h2>
                <Zoom>
                    <p>Technologies worked on:</p>
                    {/* <div><Button technologies={this.state.techStack} clicked={() => this.filterByTech} /></div> */}
                    <div>{technologies}</div>
                </Zoom>
                <Zoom>
                    <p>Have a look in to the projects I worked on:</p>
                </Zoom>
                <div className="ProjectContainer">{projectArray}</div>
                <NavigationArrow class="Left" link="/" />
                <NavigationArrow class="Right" link="/about" />
            </div>
            
        )
    }
}

export default Portfolio;