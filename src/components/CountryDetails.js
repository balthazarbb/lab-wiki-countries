import React, { Component } from 'react'
import axios from 'axios'


class CountryDetail extends Component{
state = {
    countryDetails: null
}

//API call for details
getData = ()=>{
    let countryid = Number(this.props.match.params.id)+1
    axios.get(`https://restcountries.eu/rest/v2/all/${countryid}/`)
        .then((jorge) => {
            const {name, flag, borders} = jorge.getData
            let detail = {
                name: name,
                flag: flag,
                borders: borders,
                id: Number(this.props.match.params.id)
            }
            this.setState({
                countryDetail: detail
            })

        })
}    

        componentDidMount(){ 
            console.log('Did Mount')
            this.getData()
        }
        componentDidUpdate(){
            let stateId = this.state.countryDetail?.id
        }


    render(){
        return(
            <div>
                <h1>CountryDetails</h1>
                <img src={countryDetails.flag} />
                <h2>Location: {countryDetails.subregion}</h2>
                <h2>Borders: {countryDetails.borders}</h2>

            </div>
        )
    }
}

export default CountryDetail