export const isLink = (text: string) => {
  return /^https?:\/\//.test(text)
}
