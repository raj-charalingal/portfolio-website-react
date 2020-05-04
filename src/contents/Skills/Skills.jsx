import React, { Component } from 'react';
import './Skills.Styles.css';


// Constructor function for SKill objects
function Skill(skillName, percent){
    this.skillName = skillName;
    this.percent = percent;
}

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':[ new Skill('Java', 90), 
                         new Skill('Spring Boot/MVC', 80),
                         new Skill('Hibernate', 60),
                         new Skill('JavaScript', 85),
                         new Skill('React JS', 80),
                         new Skill('Redux', 60),
                         new Skill('CSS & Html ', 50),
                         new Skill('Sql ', 40),
                        ]
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="skill-topic-heading">My Skills</h1>
            <div className="wrapper">
            <ul>
            {this.state.myskills.map((obj, i)=>{
                const dynamicInnerDivClassName = `skill-bar skill${i+1} wow slideInLeft animated`;
                const dynamicSpanClassName = `skill-count${i+1}`
                return <li key={i}>
                    <div className="skill">
                        <p>{obj.skillName}</p>
                        <div className={dynamicInnerDivClassName}>
                            {/* <span className={dynamicSpanClassName}>{obj.percent}%</span> */}
                        </div>   
                    </div></li>
            })}
            </ul>
            </div>
            </div>
            )
        }
    }
    
    export default Skills