import React, { Component } from 'react'

let FetchPerson = (): Promise<any> => {
    return axios.get('https://randomuser.me/api')
      .then(res => {
        //handle success
        console.log(res);
       
        // console.log(res.data)
        let data = res
        console.log(data.data.results[0].name);
        console.log(data.data.results[0].gender);
        console.log(data.data.results[0].location);
        console.log(data.data.results[0].phone);
        console.log(data.data.results[0].picture);
        let props = data.data.results[0]
        this.setState()

      })
      .catch(err => {
        //handle error
        console.error(err);
      })
}

FetchPerson()
export default class Rando extends Component {
   
    render() 
        return (
            <div>
                
            </div>
        )
    
}
