import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Authentication = () => {

    const location = useLocation();
    const parameters = queryString.parse(location.search)

    console.log(parameters);

    return <h1>Code: {parameters.code}<br />State: {parameters.state}</h1>

};

export default Authentication;