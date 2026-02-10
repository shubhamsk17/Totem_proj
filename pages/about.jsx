// export default function About() {
//   return (
//     <section className="page">
//       <h1>The Movement</h1>
//       <p>
//         {/* This section describes the mission and vision of Project Aatmanirbhar. */}
//         Project Aatmanirbhar is a grassroots initiative built on the belief that
// self-reliance begins with awareness and collective effort.

// The movement focuses on encouraging individuals and communities to actively
// participate in building sustainable systems, supporting local initiatives,
// and making informed choices that strengthen long-term independence.
//       </p>
//     </section>
//   )
// }


import Image from 'next/image'

export default function About() {
  return (
    <section className="page">
      <h1>The Movement</h1>

      {/* Section 1 */}
      <div className="section">
        <div className="text">
          <h2>Why Project Aatmanirbhar Exists</h2>
          <p>
            Project Aatmanirbhar was created to address the growing need for
            awareness, participation, and sustainable thinking within communities.
            True self-reliance begins when individuals understand their role in
            shaping long-term outcomes.
          </p>
          <p>
            The movement focuses on empowering people with knowledge, encouraging
            responsible action, and fostering a sense of collective ownership
            toward shared goals.
          </p>
        </div>
      </div>

      <br></br>

      {/* Section 2 */}
      <div className="section reverse">
        

        <div className="text">
          <h2>From Awareness to Action</h2>
          <p>
            Awareness alone is not enough. Project Aatmanirbhar encourages
            individuals to take small but meaningful actions that collectively
            lead to long-term impact.
          </p>
          <p>
            By promoting participation and collaboration, the movement aims to
            bridge the gap between understanding challenges and actively working
            toward solutions.
          </p>
        </div>
      </div>

      <br></br>

      {/* Section 3 */}
      <div>
      <div className="section">
        <div className="text">
          <h2>Building Sustainable Impact</h2>
          <p>
            Sustainable impact is achieved through consistency and shared effort.
            The movement emphasizes long-term thinking, responsible choices, and
            community-driven growth.
          </p>
          <p>
            Every contribution, no matter how small, plays a role in strengthening
            independence and resilience at a collective level.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
