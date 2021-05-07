import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
                this.state.countries.map((manish, i)=>{
                return <div key={i}>
                <Link to={`/countires/${i}`}>{manish.name}</Link>
                </div>
            })
            }
            </div>

        )
    }
}
export default CountriesList