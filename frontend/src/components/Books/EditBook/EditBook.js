import React from "react";
import { useHistory } from "react-router-dom";
import books from "../listBooks/Books";

const EditBook = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        author: 0,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name!== "" ? formData.name : props.book.name;
        const category = formData.category !== 0 ? formData.category : props.book.category;
        const author = formData.author!== 0 ? formData.author : props.book.author.authorId;
        const availableCopies = formData.availableCopies!== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEdit(props.book.bookId,name,category,author,availableCopies);
        history.push("/books");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option value={'DEFAULT'}>Pick Category</option>
                            {props.categories.map((term) => {
                                if(term===props.book.category)
                                {
                                    return <option selected={props.book.category} value={term}>{term}</option>
                                }
                                else
                                    return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            <option value={0}>Pick Author</option>
                            {props.authors.map((term) =>{
                                if(term.authorId===props.book.author.authorId)
                                {
                                    return <option selected={props.book.author.authorId} value={term.authorId}>{term.name}</option>
                                }
                                return <option value={term.authorId}>{term.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                               min={0}
                               step={1}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default EditBook