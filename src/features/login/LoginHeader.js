import MineTrolley from  '../../resources/MineTrolley.png'

const style = {
    Logo: {
        maxWidth: '48px',
        maxHeight: '48px'
    }
}

const LoginHeader = () => {
    
    return (
        <div className="p-4 d-flex align-items-center position-relative shadow-dark text-light">
            <img src={MineTrolley} style={style.Logo}/>
            <h4 className="m-0 ms-2">Ultiminer</h4>
        </div>
    )
};

export default LoginHeader;