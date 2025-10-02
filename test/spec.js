import { version } from '@magic/test'

import { tags, bodyTags, headTags, svgTags } from '../src/index.js'

const spec = {
  tags: 'array',
  bodyTags: 'array',
  headTags: 'array',
  svgTags: 'array',
}

export default version({ tags, bodyTags, headTags, svgTags }, spec)
