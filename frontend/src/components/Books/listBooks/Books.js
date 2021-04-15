import React from "react";
import {Link} from "react-router-dom"
import {withRouter} from 'react-router-dom';
import ReactPaginate from 'react-paginate'

class Books extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooks(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new product</Link>
                            </div>
                        </div>
                    </div>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available Copies</th>
                                <th scope={"col"}></th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getBooks = (offset, nextPageOffset) => {
        return this.props.books.map((term, index) => {
            return (
                <tr>
                    <td>{term.name}</td>
                    <td>{term.category}</td>
                    <td>{term.author.name}</td>
                    <td>{term.availableCopies}</td>
                    <td>
                        <a className={"btn btn-primary ml-1"} onClick={()=>{this.props.onDecrement(term.bookId)}}>Mark as Taken</a>
                        <a className={"btn btn-primary ml-1"} onClick={()=>{this.onEditButtonClick(term.bookId)}}>Edit</a>
                        <a className={"btn btn-danger ml-1"} onClick={()=>{this.props.onDelete(term.bookId)}}>Delete</a>
                    </td>
                </tr>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

    onEditButtonClick = (id)=>{
        this.props.onEdit(id,this.getBookCallBack)
    }

    getBookCallBack = (id) =>{
        this.props.history.push(`/books/edit/${id}`)
    }
}
export default withRouter(Books);
