import R from 'ramda';
import React from 'react';
import { connect } from 'react-redux'

const countUnreads = R.pipe(
    R.values,
    R.reject(R.propEq('read', true)),
    R.length
)

const mapStateToProps = (state) => {
    return ({
        unread: countUnreads(state.recipes.entities),
    })
};

const mapDispatchToProps = (dispatch) => ({})

const Unread = props => (
    <span>({props.unread}) </span>
)

const UnreadCount = connect(
    mapStateToProps,
    mapDispatchToProps
)(Unread)

export default UnreadCount