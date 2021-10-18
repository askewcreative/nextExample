import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Index() {
  return (
    <section>
      <h2>Layout Example (Index)</h2>
      <section>
      <div class="css-bm6yxi e1il4hhy0">
        <h1 spacing="[object Object]" class="css-1x5xuld ex8m3t00">A great workplace combines exceptional colleagues and hard problems. </h1>
        <div class="css-1121uyz e1qglq5r1"><div class="css-1ah7l0z ekubkxx1"><input role="combobox" aria-autocomplete="list" aria-expanded="false" autocomplete="off" value="" placeholder="Search jobs by keyword" id="autocomplete-input" aria-label="Search Box" class="css-iiwo21 ekubkxx0"/>
          <div class="css-1gmh3me ekubkxx2"><button class="css-2y5mtm essqqm81" role="button" aria-label="Search Submit">
            <span tabindex="-1" class="css-1vbg17 essqqm80"><svg width="32" height="32" viewBox="0 0 32 32"><path fill="#231F1F" d="M24.762 21.83L32 29.19c-.774 1.19-1.504 1.93-2.77 2.81l-7.158-7.28c-2.322 1.87-5.257 2.987-8.45 2.987C6.1 27.707 0 21.504 0 13.853 0 6.203 6.1 0 13.623 0c7.524 0 13.624 6.202 13.624 13.853 0 2.97-.92 5.723-2.485 7.978zm-11.14 1.544c5.167 0 9.356-4.263 9.356-9.522 0-5.26-4.19-9.522-9.356-9.522-5.167 0-9.355 4.263-9.355 9.522 0 5.26 4.188 9.522 9.355 9.522z">
              </path>
              </svg>
              </span>
              </button>
              </div></div>
              </div>
              </div>
              {/* <div class="css-1r1x1h e1il4hhy3"><video autoplay="" loop="" playsinline="" muted=""><source src="//videos.ctfassets.net/i5wc420v2vd1/3ST3WLEGpWUu2Ymg8WoEMs/06ee7becf93cce3083b115d2feb63a8b/Netflix-MainHero-V2.mp4"/></video></div> */}
   </section>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we're returning a
        function, we can have complex nested layouts if desired.
      </p>
      <p>
        When navigating between pages, we want to persist page state (input
        values, scroll position, etc) for a Single-Page Application (SPA)
        experience.
      </p>
      <p>
        This layout pattern will allow for state persistence because the React
        component tree is persisted between page transitions. To preserve state,
        we need to prevent the React component tree from being discarded between
        page transitions.
      </p>
      <h3>Try It Out</h3>
      <p>
        To visualize this, try tying in the search input in the{' '}
        <code>Sidebar</code> and then changing routes. You'll notice the input
        state is persisted.
      </p>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
