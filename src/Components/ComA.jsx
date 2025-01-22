const CompA = ({name, handleClick}) => {
    return (
        <button onClick={()=>handleClick('John Peter')}>{name}</button>
    )
}
export default CompA;