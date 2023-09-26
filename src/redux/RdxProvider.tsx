"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "./store"

type rdxProvider = {
  children: ReactNode
}

export function RdxProvider({ children }: rdxProvider) {

  return <Provider store={store}>
    {children}
  </Provider>

}