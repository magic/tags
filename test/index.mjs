import { is } from '@magic/test'
import { bodyTags, headTags, svgTags, tags } from '../src/index.mjs'

const headTagCount = 6
// -1 for <var>
const bodyTagCount = 105 - 1
// two svg tags are disabled - color-profile and switch
const svgTagCount = 74 - 2
const tagCount = headTagCount + bodyTagCount + svgTagCount

export default [
  { fn: is.array(bodyTags), info: 'bodyTags is an array' },
  { fn: is.array(headTags), info: 'headTags is an array' },
  { fn: is.array(svgTags), info: 'svgTags is an array' },
  { fn: is.array(tags), info: 'tags is an array' },
  { fn: is.ln(tags), expect: tagCount, info: `there are ${tagCount} tags` },
  { fn: is.ln(bodyTags), expect: bodyTagCount, info: `there are ${bodyTagCount} bodyTags` },
  { fn: is.ln(headTags), expect: headTagCount, info: `there are ${headTagCount} headTags` },
  { fn: is.ln(svgTags), expect: svgTagCount, info: `there are ${svgTagCount} svgTags` },
]
