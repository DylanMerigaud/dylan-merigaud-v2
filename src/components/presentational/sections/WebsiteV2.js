import React, { Component } from 'react'

import Section from 'components/presentational/Section'

class WebsiteV2 extends Component {
  render() {
    const {
      SelectedSectionIndexX,
      sectionAnimation,
     } = this.props
    return (


      SelectedSectionIndexX === 1 ? (
        <div>
          1
        </div>
      ) : SelectedSectionIndexX === 2 ? (
        <div>
          2
        </div>
      ) : (
            <Section type={'Personal project'} title={'WebsiteV2'} description={'Yup it\'s a WebsiteV2'} sectionAnimation={sectionAnimation} />
          )
    )
  }
}

export default WebsiteV2