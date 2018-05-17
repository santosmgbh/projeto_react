import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import BookForm from './bookForm'
import BookList from './bookList'

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', autor:'', preco:'',  list: [] }

    }
    render() {
        return (
            <div>
                <PageHeader name='Cadastro' small='Livros'></PageHeader>
                <BookForm/>
                <BookList />
            </div>
        )
    }
}



