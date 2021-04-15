import axios from "../custom-axios/axios"

const LibraryService = {
    fetchBooks: ()=>{
        return axios.get("/books");
    },
    saveBook: (name,category,author,availableCopies)=>
    {
        return axios.post("/books/add",{
            "name":name,
            "category": category,
            "authorId":author,
            "availableCopies":availableCopies
        });
    },
    editBook:   (id,name,category,author,availableCopies)=>{
        return axios.put(`/books/edit/${id}`,{
            "name":name,
            "category": category,
            "authorId":author,
            "availableCopies":availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    decrementCopies: (id)=>{
      return axios.post(`/books/decrement/${id}`);
    },
    deleteBook: (id)=>{
      return axios.delete(`/books/delete/${id}`);
    },
    fetchCategories: ()=>{
        return axios.get("/categories");
    },
    fetchAuthors: ()=>{
        return axios.get("/authors");
    }
}

export default LibraryService