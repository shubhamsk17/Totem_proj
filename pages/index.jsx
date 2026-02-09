import Card from '../components/Card'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Empowering Self-Reliance</h1>
        <p>Building an independent and sustainable future.</p>
        <Button text="Join the Movement" />
      </section>

      <section className="cards">
        <Card title="Awareness" description="Sample placeholder content" />
        <Card title="Action" description="Sample placeholder content" />
        <Card title="Impact" description="Sample placeholder content" />
      </section>
    </>
  )
}
