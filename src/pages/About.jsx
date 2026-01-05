import React from 'react'
import Title from '../components/Title'
import SocialLinks from '../components/SocialLinks'

const About = () => {
  return (
    <main className='about-page'>
      <section className='about-left'>
        <Title>
          Shalom my friends
        </Title>

        <h2>My name is Arik and welcome to my website.</h2>
        <p>
          Hey there! I’m a 17-year-old high school student and aspiring web developer.
          I built this React app because I believe gaming should be accessible to everyone,
          regardless of budget. That's why I created this hub to help you find the best
          free-to-play games out there.
        </p>
        <p>
          When I'm not coding, I'm usually gaming—whether it’s grinding competitive shooters
          on PC or exploring open worlds on console. I hope you find your next favorite game here!
        </p>

        <SocialLinks/>


      </section>

      <section className='about-right'>
        <img alt="Arik Alexandrov"
          src="https://img.freepik.com/premium-photo/space-monkey-neon-lights-environment_841925-135.jpg" />
      </section>
    </main>
  )
}

export default About