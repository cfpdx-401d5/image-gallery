import React, { Component } from 'react';
import ImageView from '../ViewSelector/ImageView';
import AddImage from '../AddImage/AddImage';
import ViewSelector from '../ViewSelector/ViewSelector';
import images from '../images/images';

const localUrl = 'http://localhost:8000/images';

function UserGreeting(props) {
    return <h1>See what's new in the Gallery!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign in to view the images.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
            </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
            </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default class GalleryApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewSelected: 'thumbnail',
            images: [],
        }
        this.handleClick = this.handleClick.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }// end constructor

    handleClick(value) {
        this.setState({ viewSelected: value })
    }

    onAdd(image) {
        fetch(localUrl, { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(image), method: "POST" })
            .then(res => {
                return res.json();
            })
            .then((newImage) => {
                this.setState({
                    images: this.state.images.concat(newImage),
                });
            });
    }

    onDelete(toDelete) {
        fetch(`${localUrl}/${toDelete._id}`, { headers: { 'Content-Type': 'application/json' }, method: "DELETE" })
            .then(res => {
                return res.json();
            })
            .then((res) => {
                if (res.deleted) {
                    let newImages = this.state.images.filter((image) => {
                        if (image._id !== toDelete._id)
                            return image;
                    })
                    this.setState({
                        images: newImages
                    })
                }
            })
    }

    componentDidMount() {
        fetch(localUrl, {
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
            .then(res => {
                return res.json();
            })
            .then(images => {
                this.setState({ images })
            })
    }

    render() {
        return (
            <div >
                <LoginControl />
                <ViewSelector handleClick={this.handleClick} />
                <AddImage onAdd={this.onAdd} />
                <ImageView viewSelected={this.state.viewSelected} images={this.state.images} onDelete={this.onDelete} />
            </div >
        );
    }
};