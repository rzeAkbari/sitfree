import axios from 'axios'

async function get({ queryKey }: any) {
    const [_, { path, parameters }] = queryKey
    const result = await axios.get(`fixtures/${path}?${parameters}`)
    return result.data
}

export default get
