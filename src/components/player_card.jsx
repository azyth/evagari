import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlayerCard extends Component {
    state = {  }

    determineDropShadown(){
        let styles = {height:'80%', background: '#ddd', margin: 10, display: 'table-cell'};
        if (this.props.player_turn === this.props.player) {
            styles.boxShadow = '0 0 0 1px red';
        }
        return styles
    }
    
    render() { 
        return ( 
            <div style={this.determineDropShadown()}>
                <p>PLAYER</p>
                <p>{this.props.player}</p>
            </div>
         );
    }
}
 
const mapStateToProps = state => state
 
export default connect(mapStateToProps)(PlayerCard);