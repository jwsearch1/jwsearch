import React from 'react'
import { Link } from 'gatsby-plugin-modal-routing'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const ModalExamplePage = () => (
  <ModalRoutingContext>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}

        <h2>Modal Page</h2>

        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext>
)

export default ModalExamplePage