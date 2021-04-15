import React from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

const categories = (props) =>{
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((item)=>
                            <tr>
                                <td>{item}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories