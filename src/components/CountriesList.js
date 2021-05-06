import React, {Component} from 'react'
import axios from 'axios'
class CountriesList extends Component{

    state={
        countries:[]
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
         .then((countries)=>{
            this.setState({
                countries: countries.data
            })
         })
    }
    render(){
        return(
            <div>
            {
                this.state.countries.map((manish)=>{
                    console.log(manish)
                return <div>{manish.name}</div>
            })
            }
            </div>

        )
    }
}
export default CountriesList