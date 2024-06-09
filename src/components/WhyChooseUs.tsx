'use client'
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Introduction to Music Theory",
        description: "Learn the basics of music notation, scales, chords, and rhythm. Perfect for beginners."
    },
    {
        title: "Classical Guitar",
        description: "Explore classical guitar techniques and repertoire from beginner to advanced levels."
    },
    {
        title: "Jazz Improvisation",
        description: "Develop skills in jazz improvisation, including scales, chord progressions, and soloing."
    },
    {
        title: "Piano for Beginners",
        description: "A comprehensive course designed for those new to the piano, covering basic techniques and songs."
    },
    {
        title: "Advanced Vocal Techniques",
        description: "Enhance your singing abilities with advanced techniques in breath control, tone, and performance."
    },
    {
        title: "Music Production",
        description: "Learn the fundamentals of music production, including recording, mixing, and mastering."
    },
    {
        title: "String Ensemble",
        description: "Join a string ensemble and perform a variety of classical and contemporary pieces."
    },
    {
        title: "Digital Music Creation",
        description: "Explore the world of digital music creation using software like Ableton Live and Logic Pro."
    },
    {
        title: "Percussion Instruments",
        description: "An in-depth look at various percussion instruments and techniques from around the world."
    },
    {
        title: "History of Western Music",
        description: "A survey of the major periods and styles in Western music history from the Middle Ages to the present."
    }
];

function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={content}/>
        </div>
    )
}

export default WhyChooseUs
