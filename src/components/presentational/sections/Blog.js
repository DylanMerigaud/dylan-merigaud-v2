import React, { Component } from 'react'

import Section from 'components/presentational/Section'

class Blog extends Component {
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
            <Section type={'Personal project'} title={'Blog'} description={'Yup it\'s a Blog'} sectionAnimation={sectionAnimation} />
          )
    )
  }
}

export default Blog
