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
      <SectionMain animateOnComponentShouldUpdate={animateOnComponentShouldUpdate} keySelectedSection={keySelectedSection} type={'Personal project'} title={'Blog'} description={'Yup it\'s a Blog'} sectionAnimation={sectionAnimation} lastAction={lastAction} />
    )
  }
}

export default Main
