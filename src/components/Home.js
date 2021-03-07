import React from 'react'
import image from '../homeImg.jpg'


export default function Home() {
    return (
        <main>
            <img src={image} alt="Photo by Enq 1998 on Unsplash" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center  min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-purple-100 font-bold cursive lg:leading-snug home-name">Hello. I'm Warren</h1>
            </section>
        </main>
    )

}