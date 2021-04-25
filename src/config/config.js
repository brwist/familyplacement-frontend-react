import axios from 'axios'
import Path from './Path'

const Axios = axios.create({
  baseURL: Path.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default Axios
