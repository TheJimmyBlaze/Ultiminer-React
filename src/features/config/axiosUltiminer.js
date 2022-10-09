
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { useConfig } from './useConfig';

const config = useConfig();

const ultiminer = applyCaseMiddleware(axios.create())
ultiminer.defaults.baseURL = config.ultiminerURL;

export default ultiminer;