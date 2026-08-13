"use client"
import { skills } from '@/data'
import dynamic from 'next/dynamic'
import React from 'react'

const TechIcon = dynamic(
  () => import("./TechIcon"),
  { ssr: false }
)

const Skills = () => {
    return (
        <div id="skills" className="flex-center section-padding pt-20">
            <div className="w-full h-full md:px-10 ">
                <div className="section-header text-center mb-10">
                    <p className='text-purple text-3xl'>Ma stack technologique privilégiée</p>
                    <p className='text-2xl '>❤ Les compétences que je mets à votre service</p>
                </div>
                <div className="  grid 
                                    grid-cols-1 
                                    sm:grid-cols-2 
                                    md:grid-cols-3 
                                    lg:grid-cols-4 
                                    gap-6">
                    {skills.map((icon) => (
                        <div key={icon.id} className="  card-border 
                                                        tech-card 
                                                        overflow-hidden 
                                                        group 
                                                        rounded-xl
                                                        h-[180px]
                                                        sm:h-[200px]
                                                        md:h-[220px]
                                                        lg:h-[240px] ">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper w-full h-full">
                                    <TechIcon model={icon} />
                                </div>
                                <div className="padding-x text-center w-full">
                                <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills