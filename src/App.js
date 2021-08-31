import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import  Homepage  from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth){
                const userRef = await createUserProfileDocument(userAuth);

                onSnapshot((userRef), snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    },
                        () => {
                        console.log(this.state);
                    })
                });

            }
            this.setState( { currentUser: userAuth });
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header currentUser = {this.state.currentUser} />
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" component={SignInAndSignUpPage}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
