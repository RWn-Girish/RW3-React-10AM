

const HOC = (Component) => {

    return ({ isLoading, ...props }) => {
        if(!isLoading){
            return <Component {...props} />
        }else{
            return <h3>Loading.....</h3>
        }
    }
}

export default HOC;