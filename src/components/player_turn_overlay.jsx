import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerTurnOverlay extends Component {
    state = {
    }

    dismissOverlay = () => {
        this.props.dispatch({type:'DISMISS_TILE_OVERLAY', quadrant: this.props.quadrant, square: this.props.number})
    }

    moveTile = ( clockwise ) => {
        // stuff
        // increment turn
        this.dismissOverlay();

    }
    rotateTileCW = () =>{ return this.rotateTile(true)}
    rotateTileCCW = () =>{ return this.rotateTile(false)}

    rotateTile( clockwise ) {
        // stuff
        // increment turn
        this.props.dispatch({type:'ROTATE_TILE', cw: clockwise, quadrant: this.props.quadrant, player: this.props.player})
        this.dismissOverlay();
        this.props.dispatch({type:'FINISH_TURN'});
    }

    render() { 
        let div;
        if (this.props.player_turn === this.props.player && !this.props.token_move_selected) {
            div = <div  className={"player_turn_overlay q_"+this.props.player} >
                <p>&lt; move counter cloackwise?</p>
                <p onClick={this.rotateTileCW}>turn counter clockwise</p>
                <p onClick={this.dismissOverlay}>no tile movement</p>
                <p onClick={this.rotateTileCCW}>turn clockwise</p>
                <p>move clockwise? &gt;</p>
            </div>
        }

        return ( 
            <div>
                {div}
            </div>
         );
    }
}

const mapStateToProps = state => state
 
export default connect(mapStateToProps)(PlayerTurnOverlay);