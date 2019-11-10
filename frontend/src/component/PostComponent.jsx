import React, { Component } from 'react';
import DataService from '../service/DataService';

class PostComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            headline: '',
            tag: '',
            message: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.backClick = this.backClick.bind(this);
        this.deletePostClicked = this.deletePostClicked.bind(this);
    }

    componentDidMount(){
        DataService.retrievePost(this.state.id)
            .then(response => this.setState({
                id: response.data.id,
                headline: response.data.headline,
                tag: response.data.tag,
                message: response.data.message
            }));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
      }

    onSubmit(event){
        let post = {
            id: this.state.id,
            headline: this.state.headline,
            tag: this.state.tag,
            message: this.state.message
        }
        DataService.updatePost(this.state.id, post)
                .then(() => this.props.history.push('/'))

        event.preventDefault();
    }

    backClick(){
        this.props.history.push('/');
    }

    deletePostClicked(id) {
        DataService.deletePost(id)
            .then(
                response => {
                    this.setState({ message: `Delete ${id}` });
                    this.props.history.push('/');
                }
            )
    }

    render() {
        //let { message, tag, headline, id } = this.state;
        console.log(this.state);
        return (
            <div className="container">
                <h3>Post</h3>
                <br/>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                                Тэг:
                            </label>
                            <input name = "tag" className="form-control" type="text" value={this.state.tag} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>
                                Заголовок:
                            </label>
                            <input name = "headline" className="form-control" type="text" value={this.state.headline} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>
                                Сообщение:
                            </label>
                            <textarea name = "message" className="form-control" value={this.state.message} onChange={this.handleChange} />
                        </div>
                        <div className="row">
                            <button className="btn btn-success mx-2" onClick={this.backClick}>Назад</button>
                            <button className="btn btn-warning float-right" onClick={() => this.deletePostClicked(this.state.id)}>Удалить</button>
                            <input className="btn btn-primary float-right mx-2" type="submit" value="Сохранить" />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default PostComponent;