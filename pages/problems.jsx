import Card from '../components/Card'

export default function Problems() {
  return (
    <section className="page">
      <h1>The Problems</h1>
      <div className="cards">
        <Card title="Lack of Awareness" description="Many individuals are unaware of how their everyday decisions impact long-term
self-reliance and sustainability at a community level." />
        <Card title="Limited Participation" description="Even when solutions exist, low participation and engagement often limit their
effectiveness and reach." />
        <Card title="Unsustainable Practices" description="Short-term solutions and dependency-driven approaches reduce the ability of
communities to grow independently over time." />
        <Card title="Fragmented Efforts" description="Many well-intentioned initiatives operate in isolation, which reduces their
overall effectiveness. Without collaboration and shared direction, impact
remains limited and difficult to sustain." />
      </div>
    </section>
  )
}
