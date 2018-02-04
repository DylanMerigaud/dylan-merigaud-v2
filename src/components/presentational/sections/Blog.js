import React, { Component } from 'react'

import Section from 'components/presentational/Section'

class Blog extends Component {
  render() {
    const { SelectedSectionIndexX } = this.props
    console.log(SelectedSectionIndexX)
    if (SelectedSectionIndexX === 1)
    return (
      <div/>
    )
    else
    return (
      <Section type={'Personal project'} title={'Blog'} description={'Yup it\'s a blog'}/>
    )
  }
}

export default Blog
