import axios from 'axios'
import { TOC } from '../types'

const baseUrl = '/api'

export const getTableOfContents= () => {
  return axios
    .get<TOC[]>(`${baseUrl}/toc`)
    .then(response => response.data)
}

// export const createNote = (object: NewNote) => {
//   return axios
//     .post<Note>(baseUrl, object)
//     .then(response => response.data)
// }