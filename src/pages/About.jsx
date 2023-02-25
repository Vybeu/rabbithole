import React from 'react'

function About() {
  return (
    <section>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"><span className="text-blue-400">Rabbit</span> Hole</p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">About Us</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">Our concept</h3>
            <p className="mt-1 dark:text-gray-400">Rabbit Hole is inspired by a combination of Twitter threads and CreepyPasta stories! We encourage our users to write small, medium, and large posts with more of a "blog" style approach with the difference being you aren't required to click on a post to view the full content.</p>
          </div>
          <div>
            <h3 className="font-semibold">Our Format</h3>
            <p className="mt-1 dark:text-gray-400">We don't want you to have to click into a blog post to see the full content, because we don't want our users to have to go back pages to find something interesting to read. We want you to quickly be able to switch to another post if what you're currently reading doesn't interest you.</p>
          </div>
          <div>
            <h3 className="font-semibold">Our Belief</h3>
            <p className="mt-1 dark:text-gray-400">Some of our most enjoyable moments are finding out new things, reading interesting topics, and experiencing each other's moments in life. We believe that, as humans, we are naturally curious about the world around us and we want to foster that curiousity by giving our users the ability to share long-form information without the distraction of other media.</p>
          </div>
          <div>
            <h3 className="font-semibold">No Media?</h3>
            <p className="mt-1 dark:text-gray-400">We chose to not include media in our posts because we don't want our users to view your photo or video and think they have the full context of what is going on. We encourage our users to create something interesting that people will want to read. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
