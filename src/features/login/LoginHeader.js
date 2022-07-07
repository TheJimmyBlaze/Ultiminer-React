import MineTrolley from  '../../resources/MineTrolley.png'

const style = {
    Logo: {
        maxWidth: '48px',
        maxHeight: '48px'
    }
}

const LoginHeader = () => {
    
    return (
        <div className="p-3 d-flex justify-content-center bg-dark-gradient">
            <img src={MineTrolley} style={style.Logo} />
        </div>
    )
};

export default LoginHeader;