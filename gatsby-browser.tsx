import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"

import "./src/styles/globalStyle.css"

import type { WrapPageElementBrowserArgs } from "gatsby"
import React from "react"

import Root from "./src/Root"

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <Root>{element}</Root>
}
