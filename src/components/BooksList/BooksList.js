import React, {PureComponent} from "react";
import {withBookStoreService} from "../hoc";
import {booksLoaded, booksRequested, booksError} from "../../actions";
import {connect} from "react-redux";
import {compose} from "../../utils";
import {BooksListItem} from "../BooksListItem";
import {Spinner} from "../Spinner";
import {ErrorIndicator} from "../ErrorIndicator";

import "./BooksList.css";

class BooksList extends PureComponent {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, error, loading} = this.props;

        if (error) {
            return <ErrorIndicator/>;
        }

        if (loading) {
            return <Spinner/>;
        }

        return (
            <ul className="books-list">
                {
                    books.map(({id, ...bookInfo}) => (
                        <li key={id}>
                            <BooksListItem book={bookInfo}/>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books, loading, error}) => ({books, loading, error});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => {
            dispatch(booksRequested());

            ownProps.bookStoreService.getBooks()
                .then(books => dispatch(booksLoaded(books)))
                .catch(err => dispatch(booksError(err)));
        }
    }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksList);
