import './index.css'

const Countries = props => {
  const {countriesList, isVisited, onselectedCountry} = props
  const {name} = countriesList
  //   const button = isVisited ? 'visited' : 'visit'
  //   const [isVisited, setIsVisted] = useState(false);

  const onCountry = () => {
    // console.log(event.target)
    onselectedCountry(name)
  }

  return (
    <div>
      <div className="country">
        <li className="list">
          <p id="name">{name}</p>
        </li>
        <li className="list">
          {isVisited ? (
            <p className="list-name">Visited</p>
          ) : (
            <button type="button" className="button" onClick={onCountry}>
              Visit
            </button>
          )}
        </li>
      </div>
      <div>
        <hr className="line" />
      </div>
    </div>
  )
}

export default Countries
