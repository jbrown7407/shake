import React, {Component} from 'react';

class RandomUser extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.fetchRandomUser();        
    }

    fetchRandomUser = async() => {
        try {
            await fetch('https://randomuser.me/api/')
            .then(results => {
                return results.json();
              
            })
            .then(data => {
                let user = data.results.map((user) => {
                    let userElm = '';
                    console.log(user)
                    if (typeof user !== undefined && typeof user.name !== undefined && typeof user.picture != undefined) {
                        userElm = <div key={user}>
                            <h2>{user.name.first} {user.name.last}</h2>
                            <img src={user.picture.large} alt="" />
                            <h2> {user.location.city}, {user.location.country}</h2>
                            <h2>{user.gender} </h2>
                            <h3>{user.cell} </h3>
                            <h3>{user.email} </h3>
                            </div>;
                    }
                    
                    return(userElm)
                });

                this.setState({user: user, isLoading: false});
            });
        }
        catch(error) {
            this.setState({ error: error, isLoading: false });
        }
    }

    render() {
        let { user, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
          }
          
        if (isLoading) {
            return <p>Loading...</p>;
          }

        return (
            <div>
                {user}
            </div>
        )
    }
}

export default RandomUser;