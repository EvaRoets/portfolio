import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Skills(props) {
    return (
        <div className="my-skills" id="my-skills">
            <FontAwesomeIcon icon="cogs"/>
            <h2>Skills & Technologies</h2>
            <p>These are the skills and technologies I know how to use or wish to specialize in further.</p>
        </div>
    )
}

export default Skills;