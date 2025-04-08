import axios from 'axios'
import { TOC } from '../types'

const baseUrl = '/api'

export const getTableOfContents= () => {
  return axios
    .get<TOC>(`${baseUrl}/toc`)
    .then(response => response.data)
}

export const getChapter = (title: string) => {
  return axios
    .get<string>(`${baseUrl}/${title}`)
    .then(response => response.data)
}