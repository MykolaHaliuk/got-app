import React, { Component } from 'react';
import GotService from '../../../service/godInhelp';
import ItemsLIst from '../../itemsList';
import ErrorMasage from '../../error';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {

    GotService = new GotService();

    state = {
        error: false
    }

    componentDidCatch() {
        console.log('Error');
        this.setState({
            error: true
        })
    }
   

    render() {
        
        if(this.state.error) {
            return <ErrorMasage/>
        }
        return (
            <ItemsLIst 
            getData={this.GotService.getAllBooks}
            onCharSeelected={(itemId) => 
                this.props.history.push(`/books/${itemId}`)
                }
            renderItem={(item) => `${item.name}`}
            />
        )
    }
    
}
export default withRouter(BookPage);