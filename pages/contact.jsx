export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <section className="page">
      <p>Have questions, ideas, or want to get involved?</p>
      <h1>Join Us</h1>
      
{/* Reach out to us and we’ll get back to you.</p> */}
<br></br>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
