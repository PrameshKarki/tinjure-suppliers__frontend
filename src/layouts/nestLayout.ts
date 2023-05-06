import { ReactElement, ReactNode } from 'react'

type LayoutFunction = (page: ReactElement) => ReactNode

const nestLayout = (parent: LayoutFunction, child: LayoutFunction) => {
  return (page: ReactElement) => parent(child(page) as ReactElement)
}

export default nestLayout
