import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

function Gallery() {

    return (
        <section>
            <div className = "uno">
              hi there
            </div>
              Hello + Example
        </section>
        
        
      )
}

console.log("hi there");

Gallery.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    )
  }

  export default Gallery