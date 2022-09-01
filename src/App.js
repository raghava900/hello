import {Component} from 'react'
import './App.css'
import Countries from './components/countries'
import Country from './components/country'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class App extends Component {
  state = {
    vistedCountriesList: [
      {
        id: '25841996-fbfd-4554-add4-4c94082c8ccd',
        name: 'India',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
        isVisited: true,
      },
      {
        id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
        name: 'United Kingdom',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
        isVisited: true,
      },
    ],
    dataList: initialCountriesList,
  }

  deleteTodo = id => {
    console.log(id)
    const {vistedCountriesList, dataList} = this.state
    const updatedTodosList = vistedCountriesList.filter(
      eachTodo => eachTodo.id !== id,
    )
    console.log(`hi in delete ::  ${updatedTodosList}`)
    const updatedDataList = dataList.filter(eachTodo => eachTodo.id === id)
    if (updatedDataList[0].isVisited) {
      updatedDataList[0].isVisited = false
      const dummyList = dataList.filter(eachTodo => eachTodo.id !== id)
      // const removedDataList = dataList.remove(eachTodo => eachTodo.id === id)
      // updatedTodosList[0].isVisited = false
      this.setState({
        vistedCountriesList: updatedTodosList,
        dataList: [...dummyList, ...updatedDataList],
      })
    }
  }

  onselectedCountry = name => {
    const {dataList, vistedCountriesList} = this.state
    console.log(`hi onselectedCountry ${dataList}`)
    const updatedTodosList = dataList.filter(eachTodo => eachTodo.name === name)
    const dummyList = dataList.filter(eachTodo => eachTodo.name !== name)
    if (!updatedTodosList[0].isVisited) {
      updatedTodosList[0].isVisited = true
      this.setState(
        prevState => ({
          vistedCountriesList: [
            ...prevState.vistedCountriesList,
            ...updatedTodosList,
          ].sort((a, b) => a.name.localeCompare(b.name)),
          dataList: [...dummyList, ...updatedTodosList],
        }),
        console.log(
          `vistedCountriesList :: ${vistedCountriesList.length} dataList :: ${dataList.length}`,
        ),
      )
    }
  }

  render() {
    const {vistedCountriesList} = this.state
    return (
      <div className="container">
        <h1 className="name1">Countries</h1>
        <div className="container1">
          <ul>
            {initialCountriesList.map(each => (
              <Countries
                key={each.id}
                countriesList={each}
                onselectedCountry={this.onselectedCountry}
                isVisited={each.isVisited}
              />
            ))}
          </ul>
        </div>
        <div>
          <h1 className="heading2">Visited Countries</h1>
          <ul>
            {vistedCountriesList.length === 0 ? (
              <div>
                <p className="empty-name">No Countries Visited Yet</p>
              </div>
            ) : (
              <div className="visit">
                {vistedCountriesList.map(item => (
                  <Country
                    key={item.id}
                    countryList={item}
                    deleteTodo={this.deleteTodo}
                  />
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
