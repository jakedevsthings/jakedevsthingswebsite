import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      {/* Bio Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Biography</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="mb-4">
              Hello! I'm Jake, a passionate software engineer with expertise in various technologies and a love for creating innovative solutions.
              Beyond coding, I have diverse interests including music, gaming, and exploring the mysteries of our universe.
            </p>
            <p className="mb-4">
              My journey in software development began with a fascination for problem-solving and has evolved into a career focused on building impactful applications.
              I specialize in backend/application development.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new musical compositions on my guitar, diving into gaming adventures, working on personal projects (like those listed on my site!), or just relaxing.
              I also have a passion for physics and cosmology, and I enjoy reading about the latest developments in those fields.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Profile Image */}
            <div className="relative w-full h-full min-h-[500px]">
              <Image 
                src="/images/profile.jpg" 
                alt="Jake's profile picture" 
                fill 
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="card p-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
      <h3 className="text-xl font-medium">Bachelor of Science in Computer Engineering</h3>
      <div className="text-sm text-gray-600 dark:text-gray-400">2016 - 2019</div>
    </div>
    <div className="mb-2 text-primary-light dark:text-primary-dark">Texas Tech University</div>
    <p className="mb-2">Focused on computer architecture, embedded systems, software engineering, and digital logic design.</p>
    <details className="mt-4">
      <summary className="font-medium mb-2 cursor-pointer hover:text-primary-light dark:hover:text-primary-dark">Key Coursework</summary>
      <ul className="grid grid-cols-1 gap-2 list-disc pl-5 mt-2">
        <li>Data Structures & Algorithms</li>
        <li>Computer Architecture</li>
        <li>Concepts of Programming</li>
        <li>Theory of Automata</li>
        <li>Software Engineering</li>
        <li>Digital Logic Design</li>
        <li>Discrete Mathematics</li>
        <li>Project Laboratories</li>
        <li>Theory & Analysis of Electronics & Circuits</li>
      </ul>
    </details>
  </div>
  <div className="card p-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
      <h3 className="text-xl font-medium">Bachelor of Science in Physics</h3>
      <div className="text-sm text-gray-600 dark:text-gray-400">2014 - 2019</div>
    </div>
    <div className="mb-2 text-primary-light dark:text-primary-dark">Texas Tech University</div>
    <p className="mb-2">Focused on advanced applied mathematics, classical and quantum mechanics, and experimental physics.</p>
    <details className="mt-4">
      <summary className="font-medium mb-2 cursor-pointer hover:text-primary-light dark:hover:text-primary-dark">Key Coursework</summary>
      <ul className="grid grid-cols-1 gap-2 list-disc pl-5 mt-2">
        <li>Calculus I, II, III</li>
        <li>Differential Equations I, II</li>
        <li>Mathematical Methods in Physics I, II</li>
        <li>Linear Algebra</li>
        <li>Classical Mechanics</li>
        <li>Modern Physics</li>
        <li>Quantum Mechanics</li>
        <li>Electromagnetism</li>
        <li>Thermodynamics</li>
        <li>Astrophysics</li>
        <li>Optics</li>
      </ul>
    </details>
  </div>
</div>
          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-medium">Continuing Education</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400">2020 - Present</div>
            </div>
            <div className="mb-2 text-primary-light dark:text-primary-dark">Various Online Platforms</div>
            <p>Continuously expanding my knowledge through online courses, certifications, and self-directed learning in areas such as cloud computing, Artificial Intelligence, and Machine Learning.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-medium mb-3">Software Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-32 font-medium">Languages:</span>
                <span>Python, Java, C++</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Frontend:</span>
                <span>React, Next.js, TailwindCSS</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Backend:</span>
                <span>Node.js, Express, Django</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Databases:</span>
                <span>MongoDB, PostgreSQL, Firebase</span>
              </li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-medium mb-3">AI & Machine Learning</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-32 font-medium">Frameworks:</span>
                <span>TensorFlow, PyTorch, scikit-learn</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Areas:</span>
                <span>NLP, Computer Vision, Reinforcement Learning</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Tools:</span>
                <span>Jupyter, Google Colab, Hugging Face</span>
              </li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-medium mb-3">Other Interests</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-32 font-medium">Music:</span>
                <span>Guitar, Music Production, Composition</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Gaming:</span>
                <span>RuneScape, Strategy Games, RPGs</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Science:</span>
                <span>Physics, Cosmology, Quantum Mechanics</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Journey & Experience</h2>
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-medium">Senior Associate Software Engineer</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400">2022 - Present</div>
            </div>
            <div className="mb-2 text-primary-light dark:text-primary-dark">JPMorganChase | Plano, TX</div>
            <details className="mt-2">
              <summary className="cursor-pointer font-medium text-sm">View details</summary>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>At JPMorganChase, I work on an API Platform team focused on go-to-market implementations and deployments that support 50+ internal and external customers. I specialize in building scalable backend solutions and ensuring smooth integration across systems.</li>
                <li>My role involves deep CI/CD experience, managing complex deployment pipelines, and participating in SRE rotations to ensure platform reliability. I've implemented monitoring solutions and automated various operational processes to improve system stability.</li>
                <li>Beyond technical work, I contribute significantly to project management and planning, collaborating with cross-functional teams, participating in sprint planning sessions, and coordinating with stakeholders to align technical solutions with business needs.</li>
              </ul>
            </details>
          </div>

          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-medium">Software Engineer</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400">February 2020 - July 2022</div>
            </div>
            <div className="mb-2 text-primary-light dark:text-primary-dark">Texas Instruments | Dallas, TX</div>
            <details className="mt-2">
              <summary className="cursor-pointer font-medium text-sm">View details</summary>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Worked as part of a 5-7 member team to release and verify updates to a large-scale system of Java/C++ applications comprising an internal framework that runs in production at numerous TI device assembly and testing sites worldwide</li>
                <li>Aided in the design and development of a Java solution that performs end-to-end system testing of both internal and external vendor software packages and provides automated verification of patches</li>
                <li>Participated in the reporting of system testing and batch verification results to management and multiple stakeholders</li>
                <li>Led the design and delivery of a Python solution that automatically generates Verilog-AMS code models for multiple utility users to use to collaborate on schematic design</li>
              </ul>
            </details>
          </div>

          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-medium">Test Engineering Intern</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400">May 2019 - August 2019</div>
            </div>
            <div className="mb-2 text-primary-light dark:text-primary-dark">Texas Instruments | Dallas, TX</div>
            <details className="mt-2">
              <summary className="cursor-pointer font-medium text-sm">View details</summary>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Architected the release of revisions to a test solution for an active, high-volume device in TI's portfolio</li>
                <li>Collaborated with engineers from multiple departments for access to information and equipment</li>
                <li>Ensured test solution revisions followed TI protocols by collecting data through in-factory verification</li>
              </ul>
            </details>
          </div>

          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-medium">Software Engineering Intern</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400">May 2018 - August 2018</div>
            </div>
            <div className="mb-2 text-primary-light dark:text-primary-dark">Texas Instruments | Dallas, TX</div>
            <details className="mt-2">
              <summary className="cursor-pointer font-medium text-sm">View details</summary>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Full stack experience developing a data analytics application with Java, Spring Boot and MyBatis Frameworks, and Oracle SQL that enables users to quickly find occurrences of outliers in production data</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card overflow-hidden">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Guitar Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2">Music & Guitar</h3>
              <p>Passionate about playing guitar and creating music. Enjoy exploring different genres and recording original compositions.</p>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">RuneScape Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2">RuneScape Gaming</h3>
              <p>Avid RuneScape player with a focus on questing, skilling, and community events. Love sharing gaming experiences through content creation.</p>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Physics Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2">Physics & Cosmology</h3>
              <p>Fascinated by the fundamental questions of our universe. Enjoy keeping up with the latest discoveries in physics and cosmology.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
