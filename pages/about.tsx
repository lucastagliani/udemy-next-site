import { css, keyframes } from '@emotion/react'
import Image from 'next/image'
import Page from '@layouts/page'
import { FaReact as ReactIcon } from 'react-icons/fa'

const rotate = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`

const header = css`
  display: flex;
  max-width: var(--page-width);
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  padding: 0 2ch;
`

const pilotPicture = css`
  border-radius: 50%;
`

const headline = css`
  max-width: 25ch;
`

const title = css`
  font-weight: 200;
  font-size: 2rem;
`

const subtitle = css`
  font-style: italic;
`

const reactIconStyles = css`
  margin-left: 1ch;
  position: realtive;
  top: 5px;
  color: var(--color-accent);
  animation: ${rotate} 5s linear infinite;
`

const bio = css`
  margin: 5ch 0;
  p {
    max-width: 60ch;
    margin: 0 auto;
  }
  > p + p {
    margin-top: 3ch;
  }
`

const footer = css`
  padding-top: 5ch;
  padding-right: 5ch;
  padding-bottom: 5ch;
  text-align: right;
  max-width: var(--page-width);
  margin: 0 auto;
`

const About = () => (
  <Page
    meta={{ title: 'About', description: 'Tagliani Biography' }}
  >
    <section css={header}>
      <Image
        css={pilotPicture}
        src="/perfil_floripa.jpg"
        width={225}
        height={300}
      />
      <div css={headline}>
        <h2 css={title}>
          Tagliani <ReactIcon css={reactIconStyles} />
        </h2>
        <p css={subtitle}>
          Software developer, agilist and speaker and passionate for life
          experiences
        </p>
      </div>
    </section>
    <section css={bio}>
      <p>
        I’ve worked in software development for the last 8 years and I really
        love what I do. I see myself as an adaptable person because I have
        already filled positions such as quality assurance, scrum master, team
        leader (of a trainee team) and obviously back-end / front-end developer.
        The skills I am proud to have learned in the past years are the
        following: helping people, testing automation, designing patterns, clear
        communication, being a quick learner, sharing knowledge, giving sincere
        feedback and - the basic, but amazing - programming logic.
      </p>
      <p>
        I do not like to label myself as a C#, javascript/typescript, Angular,
        Java or Node.js developer because this shouldn’t be a restriction for
        anything, but the quoted programming languages above are (respectively)
        the ones that I am most used to work with. Besides this, in my point of
        view, drawing solutions and solving problems often are more important
        than technical and specific implementation on a programming language.
      </p>
      <p>
        By doing technical and non-technical presentations in IT events I found
        a way to organize ideas clearly, improved my skill to talk in public,
        shared my experience, received constructive feedbacks and got out of my
        comfort zone. I’ve started doing this at The Developers Conference and
        local meetups in 2016 and I keep doing it so far, as speaker and
        coordinator.
      </p>
    </section>
    <section css={footer}>
      <small>Source: </small>
      <a
        href="https://marvelcinematicuniverse.fandom.com/wiki/Star-Lord"
        rel="noopener noreferrer"
        target="_blank"
      >
        Marvel Cinematic Universe Wiki
      </a>
    </section>
  </Page>
)

export default About
