import React, { Component } from 'react'

import Section from 'components/presentational/Section'

class Blog extends Component {
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
          <Section type={'Personal project'} title={'Blog'} description={'Yup it\'s a Blog'} />
        )
    }
  }
}

export default Blog
