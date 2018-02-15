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
      <SectionMain animateOnComponentShouldUpdate={animateOnComponentShouldUpdate} keySelectedSection={keySelectedSection} type={'Personal project'} title={'WebsiteV1'} description={'Yup it\'s a WebsiteV1'} sectionAnimation={sectionAnimation} lastAction={lastAction} />
    )
  }
}

export default Main