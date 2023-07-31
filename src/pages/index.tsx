import Stats from '@/components/Stats'
import Links from '@/components/Links'

interface Props {
  commits : number;
  stars : number;
}

import { Container, Typography } from "@mui/material"

export async function getUserStars(){
  let stars_count = 0;

  /// iterate all repos
  const res = await fetch("https://api.github.com/users/StoicDev01/repos", {
    headers: {
      "Authorization" : `Bearer ${process.env.GITHUB_API}`,
      "X-GitHub-Api-Version" : "2022-11-28"
    }
  });

  const reposList = await res.json();
  
  for (const repoItem of reposList){
    stars_count += repoItem["stargazers_count"];
  }

  return stars_count;
}

export async function getUserCommits(){
  // commits
  const res = await fetch('https://api.github.com/search/commits?q=author:StoicDev01');
  const commits = await res.json() as {
    total_count : number;
  };

  return commits.total_count;
}

export async function getStaticProps() {
  return {
    props: {
      commits : await getUserCommits(),
      stars : await getUserStars()
    }
  };
}

export default function Home(props : Props) {
  return (
    <>
      <Container
        sx={{
          maxWidth : { md : "900px"}
        }}
      >

        <div 
          style={{
            paddingTop : "100px"
          }}
        >
          <Typography variant="h1"
            sx={{
            }}
          >
            Olá 
          </Typography>

          <Typography
            sx={{
              maxWidth : "500px"
            }}
          >
            Eu sou um estudante de programação autodidata por mais de 3 anos fascinado em criar novos projetos e soluções
          </Typography>
        </div>
        <Links/>
      </Container>
      <Stats commmits={props.commits} stars={props.stars}/>
    </>
  )
}
