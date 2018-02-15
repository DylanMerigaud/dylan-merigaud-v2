import BlogMain from 'components/presentational/sections/Blog/Main'
import BlogPresentation from 'components/presentational/sections/Blog/Presentation'
import BlogStack from 'components/presentational/sections/Blog/Stack'

import WebsiteV1Main from 'components/presentational/sections/WebsiteV1/Main'
import WebsiteV1Presentation from 'components/presentational/sections/WebsiteV1/Presentation'
import WebsiteV1Stack from 'components/presentational/sections/WebsiteV1/Stack'

import WebsiteV2Main from 'components/presentational/sections/WebsiteV2/Main'
import WebsiteV2Presentation from 'components/presentational/sections/WebsiteV2/Presentation'
import WebsiteV2Stack from 'components/presentational/sections/WebsiteV2/Stack'

const sections = [
  { components: [BlogMain, BlogPresentation, BlogStack], path: 'blog' },
  { components: [WebsiteV1Main, WebsiteV1Presentation, WebsiteV1Stack], path: 'websiteV1' },
  { components: [WebsiteV2Main, WebsiteV2Presentation, WebsiteV2Stack], path: 'websiteV2' },
]

export default sections