
import axios from 'axios';
import { useConfig } from './useConfig';

const config = useConfig();
axios.defaults.baseURL = config.ultiminerURL;

export default axios;