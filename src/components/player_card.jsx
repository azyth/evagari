import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlayerCard extends Component {
    state = {  }

    determineDropShadown(){
        let styles = {};
        if (this.props.player_turn === this.props.player) {
            styles.boxShadow = '0 0 0 5px white';
        }
        return styles
    }
    capturedPieces() {
        let captures = '';
        this.props['player_'+this.props.player].captures.forEach(c => {
            if (captures === '') {
                captures = c.player + '-' + c.type;
            } else {
                captures = captures + ' : ' + c.player + '-' + c.type;
            }
        });
        return captures;
    }
    
    render() { 
        return ( 
            <div className={'player_cell c' + this.props.player + ' player_'+ this.props.player} style={this.determineDropShadown()}>
                <p>PLAYER {this.props.player}</p>
                <p>captures: {this.capturedPieces()}</p>
            </div>
         );
    }
}
 
const mapStateToProps = state => state
 
export default connect(mapStateToProps)(PlayerCard);