import './index.css'

const Country = props => {
  const {countryList, deleteTodo} = props
  const {name, imageUrl, id} = countryList

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div className="visited-list">
      {/* <li> */}
      <img src={imageUrl} alt="thumbnail" className="img" />
      {/* </li> */}

      <div className="visited">
        {/* <li> */}
        <p className="country-name">{name}</p>
        {/* </li> */}
        {/* <li> */}
        <button type="button" onClick={onDeleteTodo} className="button-visited">
          Remove
        </button>
        {/* </li> */}
      </div>
    </div>
  )
}

export default Country
