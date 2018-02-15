import React, { Component } from 'react'

import SectionMain from 'components/presentational/SectionMain'

class Main extends Component {
  render() {
    const {
      sectionAnimation,
      lastAction,
      keySelectedSection,
      animateOnComponentShouldUpdate,
     } = this.props
    return (
      <SectionMain animateOnComponentShouldUpdate={animateOnComponentShouldUpdate} keySelectedSection={keySelectedSection} type={'Personal project'} title={'WebsiteV2'} description={'Yup it\'s a WebsiteV2'} sectionAnimation={sectionAnimation} lastAction={lastAction} />
    )
  }
}

export default Main
