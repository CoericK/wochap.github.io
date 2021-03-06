import React from 'react'
import data from 'app/config/data'
import ScreenHelmet from 'components/ScreenHelmet'
import SiteContact from 'components/SiteContact'

function ContactScreen() {
  return (
    <main>
      <ScreenHelmet
        title={data.screens.contact.title}
        description={data.screens.contact.description}
        canonicalHref={data.screens.contact.canonicalHref}
      />
      <SiteContact className='u-mb5' titleTag='h1' />
    </main>
  )
}

export default ContactScreen
