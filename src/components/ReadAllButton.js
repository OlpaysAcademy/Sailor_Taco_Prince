import React from 'react';

class MarkAllReadButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.onMarkAllAsRead();
    }
    render() {
        return (
            <button onClick={this.onClick} className="btn btn-primary btn-sm m-r-sm">
                <span className="glyphicon glyphicon-eye-open iconItem"></span> Mark all as read
            </button>
        )
    }
}

export default MarkAllReadButton;
