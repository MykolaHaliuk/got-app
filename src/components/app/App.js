import React, { Component } from 'react';
// import styled from 'styled-components';
import './App.css';
import Header from '../header';
import RandomChar from '../randomChar';
import { Button } from 'reactstrap';
import ErrorMasage from '../error'
import GotService from '../../service/godInhelp';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage'
import HousesPage from '../pages/housesPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BooksItem from '../pages/booksItem';

export default class App extends Component {
    GotService = new GotService();
    state = {
        showRandom: false,
        error: false
    }

    componentDidCatch() {
        console.log('Error');
        this.setState({
            error: true
        })
    }
    

    toggleShow = () => {
        this.setState((state) => { 
            return {
                showRandom: !state.showRandom
            }
        });
    }
    render() {
        const {showRandom} = this.state;
            
        const randomShow = showRandom ? <RandomChar/> : null;
            
        if(this.state.error) {
            return <ErrorMasage/>
        }
        return (
           <Router>
                <div>
                    <Header/>
                    {randomShow}
                    <Button onClick={this.toggleShow} color="primary">Toggle show</Button>
                    <div className="wrapper-row">
                        <Route path='/characters' exact component={CharacterPage}/>
                    </div>
                    <div className="wrapper-row">
                        <Route path='/houses' component={HousesPage}/>
                       
                    </div>
                    <div className="wrapper-row">
                        <Route exact path='/books' component={BookPage}/>
                        <Route path='/books/:id' render={
                                ({match}) => {
                                    const {id} = match.params;
                                    return(
                                        <BooksItem bookId={id}/>
                                    )
                                }
                            }

                        />
                    </div>          
                </div>
           </Router>
        )
    }
    
}

