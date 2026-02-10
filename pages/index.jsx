import Card from '../components/Card'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Empowering Self-Reliance</h1>
        <p>Building an independent and sustainable future. 
          <br></br>Project Aatmanirbhar is a people-driven initiative focused on building awareness, encouraging action, and supporting sustainable, self-reliant communities.
        </p>
        <Button text="Join the Movement" />
      </section>

      <section className="cards">
        <Card title="Awareness" description="We work to spread awareness about self-reliance, local empowerment, and
responsible participation through education and community engagement." />
        <Card title="Action" description="Meaningful change happens through action. We encourage individuals to take
small, consistent steps that contribute to long-term positive impact." />
        <Card title="Impact" description="By combining awareness and action, we aim to create measurable impact that
supports sustainable growth and collective responsibility." />
      </section>
    </>
  )
}
