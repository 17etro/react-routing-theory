import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';

import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts"
                            exact
                            activeClassName='my-active'
                            activeStyle={{
                                color : '#fa923f',
                                textDecoration : 'underline',}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname : "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;