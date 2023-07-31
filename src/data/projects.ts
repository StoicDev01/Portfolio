import { ProjectItemProps } from "@/components/ProjectItem";

const projects :ProjectItemProps[]= [
    {
        projectName : "Portfolio",
        githubLink : "https://github.com/izkeas/Portfolio",
        imagePath : "/projects/portfolio.png",
        description : "Meu site de portfolio feito com React, NextJs e Typescript."
    },
    {
        projectName : "Bytethesis",
        githubLink : "https://github.com/izkeas/ByteThesis",
        imagePath : "/projects/bytethesis.png",
        siteLink : "https://bytethesis.one",
        description : "Um site blog de tecnologia voltado a programação criado com hugo framework"
    },
    {
        projectName : "Go Pong!",
        githubLink : "https://github.com/izkeas/Go-Pong",
        imagePath : "/projects/go-pong.png",
        description : "Jogo Pong recriado na linguagem GO com a framework Raylib"
    },
    {
        projectName : "Atlas MapGenerator",
        githubLink : "https://github.com/izkeas/Atlas-MapGenerator",
        imagePath : "/projects/MapGenerator.png",
        description : "Um programa gerador de mapas feito usando a linguagem C++, Opengl e SimplexNoise"
    }

]

export default projects;