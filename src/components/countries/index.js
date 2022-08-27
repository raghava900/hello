import './index.css'

const Countries = props => {
  const {countriesList, isVisited} = props
  const {name, isActive} = countriesList
  //   const button = isVisited ? 'visited' : 'visit'
  //   const [isVisited, setIsVisted] = useState(false);

  const onCountry = event => {
    const {onselectedCountry} = props
    // console.log(event.target)
    onselectedCountry(name)
  }

  const text = isActive ? 'visited' : 'visit'

  return (
    <div className="country">
      <li>
        <p className="name">{name}</p>
      </li>
      <li>
        {/* <button type="button" className="button" onClick={onCountry}>
          {isVisited ? <p>Visited</p> : <p>Visit</p>}
        </button> */}

        {isVisited ? (
          <p>Visited</p>
        ) : (
          <button type="button" className="button" onClick={onCountry}>
            Visit
          </button>
        )}
      </li>
    </div>
  )
}

export default Countries
