//
// File: ApiProxy.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: The one and only interface to the web API.
//       Consume the ApiProxy:
//           import * as apiProxy from './Util/ApiProxy'
//

import axios from 'axios'

const DESC_1_ENDPOINT = ''
const DESC_2_ENDPOINT = ''
const BASE_URL = ''

const api = axios.create({ baseURL: BASE_URL })

export const getData1 = async (reqBody) => {
    const body = { }
    const res = await api.post(DESC_1_ENDPOINT, body)
    return res.data
}

export const getData2 = async () => {
    const res = await api.get(DESC_2_ENDPOINT)
    return res.data
}
