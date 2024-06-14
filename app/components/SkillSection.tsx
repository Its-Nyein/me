import React from 'react'
import { Heading } from './Heading'
import { skills } from '@/data/skillsData'

function SkillSection() {
  return (
    <section className="mt-[90px] scroll-mt-20" id="skills">
        <Heading title="Skills" description="My current stack are:"/>
        <div className='space-y-6'>
            {Object.values(skills).map(cate => {
                return <div key={cate.title}>
                    <p className='mb-3 mt-3'>{cate.title}</p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {cate.stacks.map(({icon: Icon, stack, color, backgroundColor}) => {
                            return <li key={stack}
                            className="bg-zinc-800/50 border border-zinc-800 p-4 inline-flex gap-4 items-center justify-center rounded-md"
                            >
                                <Icon className="text-3xl shrink-0" style={{ color: color, background: backgroundColor }}/>
                                {stack}
                            </li>
                        })}
                    </ul>
                </div>
            })}
        </div>
    </section>
  )
}

export default SkillSection