import React, { Component } from 'react';
import GotService from '../../../service/godInhelp';
import ItemDetails, {Field} from '../../itemDetails'; 

export default class BooksItem extends Component{
    GotService = new GotService();


    render(){
        return(
            <>
                <ItemDetails 
                    charId={this.props.bookId}
                    getData={this.GotService.getBook}>
                    <Field field="gender" label="Gender" />
                    <Field field="born" label="Born" />
                    <Field field="died" label="Died" />
                    <Field field="culture" label="Culture" />
                </ItemDetails>
            </>
        )
    }
}