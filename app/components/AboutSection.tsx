import React from 'react'
import Image from 'next/image'
import { Heading } from './Heading'
import { socialLinks } from '@/data/socialLink'
import { CustomLink } from './CustomLink'

function AboutSection() {
  return (
    <section id='about' className='mt-[90px] mb-[20px]'>
        <Heading title="About Me" description="Let me know something about me:"/>
        <div className="flex flex-col md:flex-row gap-4 items-center mt-0">
            <div className="w-80 h-80 shrink-0 overflow-hidden">
                <Image src="/programmer-01.svg" alt="programmer image" width={600} height={600} className="w-f h-f object-cover"/>
            </div>
            <div className='space-y-2' >
                <p className="text-zinc-400">I&apos; m software developer specialize in building and maintaining web applications using JavaScript and modern frameworks. I&apos;m committed to improving my skills with a focus on delivering high-quality, user-friendly experiences. Passionate about continuous learning, I stay updated with industry trends and strive to create efficient, scalable solutions. I pursued a Bachelor of Engineering in Information Science from the University Of Technology(Yatanarpon Cyber City). I have temporarily suspended my studies at the moment. I&apos;m currently learning Scrimba(Online Coding School). My passionate is trying out new things and applying them in practical situations.</p>
                <ul className="flex mt-4 gap-2">
                  {socialLinks.map(({icon: Icon, href}, index) => {
                    return (
                      <li key={index}>
                        <CustomLink 
                        href={href}
                        linkType="secondary"
                        className="w-10 h-10 p-0 rounded-full flex text-center items-center justify-center"
                        >
                          <Icon className="text-xl shrink-0"/>
                        </CustomLink>
                      </li>
                    )
                  })}
                  </ul>
            </div>
        </div>
    </section>
  )
}

export default AboutSection