import React from 'react';

class MarkAllUnreadButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.onMarkAllAsUnread();
    }
    render() {
        return (
            <button onClick={this.onClick} className="btn btn-primary btn-sm">
                <span className="glyphicon glyphicon-eye-close iconItem"></span>Mark all as unread
            </button>
        )
    }
}

export default MarkAllUnreadButton;
