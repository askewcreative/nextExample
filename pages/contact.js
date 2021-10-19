import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

function Contact() {
  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}


export default Contact