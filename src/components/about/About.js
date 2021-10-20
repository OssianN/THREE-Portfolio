import React, { useState, useEffect } from "react"
import anime from "animejs"
import AnimationSVG from "../AnimationSVG"
import "./about.css"

const About = () => {
  const common = {
    targets: ".polymorph",
    easing: "easeOutQuad",
    duration: 600,
    loop: false,
  }

  useEffect(() => {
    setTimeout(() => {
      anime({
        ...common,
        points: [{ value: "215,110 0,110 0,0 215,0" }],
      })
    }, 2500)
  }, [])

  return (
    <div className="about__container">
      <h1 className="header-title--standard">A quick summary of my journey.</h1>
      <AnimationSVG style={{ transform: "rotate(45deg) scale(1.5)" }} />
      <p className="bread-text--standard">
        Human interaction and behavior has for a long time been an interest of
        mine. With that interest in <i>mind</i>, I tailored my education at
        Lund's university to result in two bachelor degrees – one in Sociology,
        one in Psychology – and one master's degree in HR and work psychology.
        <br />
        <br />
        <b className="bold-text--big">Plot twist</b> though, towards the end of
        this journey I discovered software development. I quickly realized, that
        was an even better fit for me, as I found it extremly captivating and
        rewarding. I decided, after my masters, to persue this dream. This is
        when I discovered &lt;/salt&gt; – a possibility for me to achieve this
        goal through an intense bootcamp.
        <b className="bold-text--big"> Out of 1500 applicants</b>, me and 30
        others were selected for the program after having gone through an
        extensive assessment process. When the bootcamp was coming to an end, I
        was asked by &lt;/salt&gt; to come work as an instructor for the
        bootcamp.
        <br />
        <br />
        Sort of full circle, I'm now working as a{" "}
        <b className="bold-text--big">Full Stack JS instructor</b>. I get to
        apply my knowledge about software development as well as people every
        day, and I also learn a lot about both in the process.
      </p>
    </div>
  )
}

export default About
