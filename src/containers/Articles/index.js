import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import './articles.css';

const API_ROUTE = "http://0.0.0.0:3000/api/v1/articles/";

export default class Articles extends Component {

    state = {
        articles: []
    }
    componentDidMount() {
		axios.get(API_ROUTE).then(res => {
            console.log(res.data.data);
			this.setState({ articles: res.data.data })
		});
    }

    _deleteEntry = (id) => {
        const { articles } = this.state;
        axios.delete(API_ROUTE + id).then(res => {
            const updatedArticles = articles.filter(article => article.id !== id);
            this.setState({ articles: updatedArticles })
        })
    }
    
    _articleMarkup = (articleData) => {
        const { title, body, id } = articleData;
        return (
            <div className="c-articles__item" key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="u-textCenter">
                    <Button onClick={() => this._deleteEntry(id)} type="danger">DELETE</Button>
                    <Link className="c-btn u-inlineBlock" to={`/articles/${id}`}>View</Link>
                </div>

            </div>
        )
    }

    _renderArticles = (articles = []) => {
        return articles.map(article => this._articleMarkup(article));
    }

    render() {
        const { articles } = this.state;
        console.log(articles);
        return (
            <div className="c-articles">
                {articles && this._renderArticles(articles)}
            </div>
        )
    }
}