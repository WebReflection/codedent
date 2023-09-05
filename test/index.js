const dedent = require('../cjs');

const assert = (current, expected, message) => {
  if (current !== expected)
    throw new Error(message);
};

const OK = 'OK';

assert(
  dedent`def test():
  return "${OK}"
`,
  `def test():
  return "${OK}"
`,
  'not indented at all'
);

assert(
  dedent`
    def test():
      return "${OK}"
  `,
  `
def test():
  return "${OK}"
  `,
  'indented'
);

assert(
  dedent`
def test():
  return "${OK}"
`,
`
def test():
  return "${OK}"
`,
  'not indented'
);

assert(
  dedent(`
    def test():
      return "${OK}"
  `),
  `
def test():
  return "${OK}"
  `,
  'indented'
);

assert(
  dedent(`
def test():
  return "${OK}"
`),
`
def test():
  return "${OK}"
`,
  'not indented'
);
