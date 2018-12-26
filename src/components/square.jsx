import React, { Component } from 'react';
import { connect } from 'react-redux';
import Token from './token';

class Square extends Component {

    insertToken = () => {
        if (this.props.board['q_'+this.props.quadrant].squares[this.props.number].type !== undefined) {
            return (
                <Token 
                    player={this.props.board['q_'+this.props.quadrant].squares[this.props.number].player}
                    onClickHandler={this.initMoveToken} 
                    type={this.props.board['q_'+this.props.quadrant].squares[this.props.number].type}>
                </Token>
            )
        }
    }
    styles = {
        background: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        position: 'relative',
        // height: 98,
        // width: 98,
    }
    initMoveToken = () => {
        if (this.props.player_turn !== this.props.player) {
            //do nothing since not your token
        } else if (!this.props.move_in_progress) {
            console.log('token clicked in square: ' + this.props.number );
            this.props.dispatch({
                type:'INIT_MOVE', 
                token: this.props.board['q_'+this.props.quadrant].squares[this.props.number]
            })
        } else {
            console.log('token captured at square: ' + this.props.number );
            this.props.dispatch({
                type:'CAPTURE_TOKEN', 
                quadrant: this.props.quadrant, 
                square: this.props.number,
                captured_token: this.props.board['q_'+this.props.quadrant].squares[this.props.number]
            })
        }
    }
    finishMoveToken = () => {
        if (this.props.move_in_progress) {
            console.log('token moved to square: ' + this.props.number );
            this.props.dispatch({type:'FINISH_MOVE', quadrant: this.props.quadrant, square: this.props.number})
        }
    }

    render() { 
        return ( 
            <div className={'s'+(this.props.number+1)} onClick={this.finishMoveToken} style={this.styles}>
            {/* <p>{this.props.number}</p> */}
                {this.insertToken()}
            </div>
         );
    }
}
const mapStateToProps = state => state

export default connect(mapStateToProps)(Square);