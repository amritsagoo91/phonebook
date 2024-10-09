
const Filter = ({ handleFilter }) => {

    return <>
        <div>
            filter shown with <input onChange={e => handleFilter(e.target.value)} />
        </div>
    </>
}

export default Filter