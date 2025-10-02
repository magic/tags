import { version } from '@magic/test'

import { tags } from '../src/index.js'

const spec = {
  bump: 'fn',
  isBigger: 'fn',
  isSemver: 'fn',
  isSmaller: 'fn',
  parse: 'fn',
  serialize: 'fn',
  stringify: 'fn',
}

export default version(tags, spec)
