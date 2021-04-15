import React, {Component} from "react";
import './App.css';
import Books from "../Books/listBooks/Books"
import BooksService from "../../repository/LibraryRepository"
import {BrowserRouter as Router,Redirect,Route} from 'react-router-dom'
import AddBook from "../Books/AddBook/AddBook";
import EditBook from "../Books/EditBook/EditBook";
import Categories from "../Categories/listCategories/Categories";
import reportWebVitals from "../../reportWebVitals";
import Header from "../Books/Header/Header"

class App extends Component
{
    constructor() {
        super();
        this.state = {
            books : [],
            authors : [],
            categories: []
        }
    }



    render() {
        return (
          <Router>
              <Header/>
              <main>
                  <div className="container">
                      <Route path={"/categories"} exact render={() =>
                          <Categories categories={this.state.categories}/>}/>
                      <Route path={"/books/add"} exact render={()=>
                        <AddBook onAddBook={this.addBook}
                                 categories={this.state.categories}
                                 authors={this.state.authors}/>
                      }/>
                      <Route path={"/books/edit/:id"} exact render={()=>
                          <EditBook onEdit={this.editBooks}
                                           categories={this.state.categories}
                                           book={this.state.currentBook}
                                           authors={this.state.authors}/>
                      }/>
                      <Route path={["/books","/"]} exact render={()=>
                          <Books books={this.state.books}
                                 onDelete={this.deleteBook}
                                 onEdit={this.getBook}
                                 onDecrement={this.decrementCopies}/>
                      }/>
                  </div>
              </main>
          </Router>
        );
    }

    loadBooks = () => {
        BooksService.fetchBooks()
            .then((response)=>{
                this.setState({
                    books : response.data
                })
            })
    }

    loadCategories = ()=>{
        BooksService.fetchCategories()
            .then((response)=>{
                this.setState({
                    categories: response.data
                })
            })
    }

    loadAuthors = ()=>{
        BooksService.fetchAuthors().then((response)=>{
            this.setState({
                authors: response.data
            })
        })
    }

    addBook = (name,category,author,availableCopies)=>{
        BooksService.saveBook(name,category,author,availableCopies).then(()=>{
            this.loadBooks();
        })
    }

    editBooks = (id,name,category,author,availableCopies)=>{
        BooksService.editBook(id,name,category,author,availableCopies).then(()=>{
            this.loadBooks();
        })
    }

    deleteBook = (id)=>{
        BooksService.deleteBook(id).then(()=>{
            this.loadBooks();
        })
    }

    decrementCopies = (id)=>{
        BooksService.decrementCopies(id).then(()=>{
            this.loadBooks();
        })
    }

    getBook = (id,callback)=>{
        BooksService.getBook(id).then((response)=>{
            this.setState({
                currentBook: response.data
            },()=>callback(id))
        })
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors()
    }
}


export default App;
