interface ColorObjType {
  deg: number
  start: string
  end: string
}
export interface IBookmark {
  name: string
  link: string
  backgroundColor: string | ColorObjType
  color: string
  border?: string,
}
