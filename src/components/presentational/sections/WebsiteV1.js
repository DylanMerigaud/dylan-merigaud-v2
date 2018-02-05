import React, { Component } from 'react'

import Section from 'components/presentational/Section'

class WebsiteV1 extends Component {
  render() {
    const { SelectedSectionIndexX } = this.props
    switch (SelectedSectionIndexX) {
      case 1:
        return (
          <div>
            1
          </div>
        )
      case 2:
        return (
          <div>
            2
          </div>
        )
      case 0:
      default:
        return (
          <Section type={'Personal project'} title={'WebsiteV1'} description={'Yup it\'s a WebsiteV1'} />
        )
    }
  }
}

export default WebsiteV1