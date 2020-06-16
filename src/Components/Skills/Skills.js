import React, { Component } from 'react';
import SkillCard from "./SkillsDiv";

export default class Skills extends Component {
    render() {
        return (
            <div>
                <h2>Skills</h2>
                <SkillCard
                    icon={"fab fa-java"}
                    name={"Java"}
                />
                <SkillCard
                    icon={"devicon-csharp-plain"}
                    name={"C#"}
                /><SkillCard
                    icon={"devicon-cplusplus-plain"}
                    name={"C++"}
                />
                <SkillCard
                    icon={"fab fa-react"}
                    name={"React"}
                />
                <SkillCard
                    icon={"fab fa-android"}
                    name={"Android"}
                />
                <SkillCard
                    icon={"fab fa-angular"}
                    name={"Angular"}
                />
                <SkillCard
                    icon={"fab fa-node-js"}
                    name={"Node"}
                />
                <SkillCard
                    icon={"fab fa-js-square"}
                    name={"JavaScript"}
                />
                <SkillCard
                    icon={"fab fa-python"}
                    name={"Python"}
                />
                <SkillCard
                    icon={"devicon-mongodb-plain"}
                    name={"MongoDB"}
                />
                <SkillCard
                    icon={"fas fa-database"}
                    name={"SQL"}
                />
                <SkillCard
                    icon={"fab fa-php"}
                    name={"PHP"}
                />
                <SkillCard
                    icon={"fab fa-bootstrap"}
                    name={"Bootstrap"}
                />
                <SkillCard
                    icon={"devicon-git-plain"}
                    name={"GIT"}
                />
                <SkillCard
                    icon={"devicon-visualstudio-plain"}
                    name={"Visual Studio"}
                />
                <SkillCard
                    icon={"fab fa-npm"}
                    name={"NPM"}
                />
                <SkillCard
                    icon={"fas fa-fire-alt"}
                    name={"FireBase"}
                />
                <SkillCard
                    icon={"devicon-heroku-original"}
                    name={"Heroku"}
                />

            </div>
        );
    }
}