import React, { Component } from 'react';

class Header extends Component {
    const FetchPerson = (): Promise<any> => {
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
            this.setState({ data })
    
          })
          .catch(err => {
            //handle error
            console.error(err);
          })
      }
      FetchPerson()
    render() {
        return (
            <div>
               Header 
            </div>
        );
    }
}

export default Header;