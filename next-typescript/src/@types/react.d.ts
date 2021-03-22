namespace NodeJS {
  interface Global {
    document: Document
    window: Window
    navigator: Navigator
    localStorage: Storage
  }
}

namespace JSX {
  interface IntrinsicAttributes extends React.Attributes {
    id?: string
    className?: string
    style?: CSSProperties
    onClick?: (...args: any) => any
  }
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
