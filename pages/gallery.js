import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Gallery() {

    return (
        <section>
            Hello 
        </section>
      )
    }
    

Gallery.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    )
  }