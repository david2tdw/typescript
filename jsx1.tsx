declare namespace JSX {
  interface IntrinsicElements {
    foo: { requiredProp: string; optionalProp?: number }
  }
}

//<foo requiredProp="bar" unknownProp />
<foo requiredProp='bar' some-unknown-prop/>


///tsc jsx1.tsx --jsx preserve