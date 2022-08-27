import './index.css'

const Country = props => {
  const {country, deleteTodo} = props
  const {name, imageUrl, id} = country

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div>
      <img src={imageUrl} alt="thumbnail" className="img" />
      <p>{name}</p>

      <button type="button" onClick={onDeleteTodo}>
        Remove
      </button>
    </div>
  )
}

export default Country
