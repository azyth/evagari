import React, { Component } from 'react';
import { connect } from 'react-redux';

class Token extends Component {
    
    styles = {
        token: {
            // background: '#fff',
            borderColor: '#000',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 30,
            height: '60%',
            width: '60%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        marker: {
            position: 'relative',
            // top: '50%',
            // left: '50%',
            textAlign: 'center',
            transform: 'translate(0%, 25%)',
        }
    }

    displayType = (type) => {
        switch (type) {
            case 'K':
                return 'K';
            case 'S':
                return 'S';
            case 'T':
                return 'T';
            case 'X':
                return 'X';
            default:
                return null;
        }
    }
  

    render() { 
        return ( 
            <div 
                className={'player_'+this.props.player}
                style={this.styles.token}
                onClick={this.props.onClickHandler}>
                <p style={this.styles.marker}>{this.displayType(this.props.type)}</p>
            </div>
         );
    }
}
// const mapStateToProps = state => ({
//     player: state.player_turn

// })
 
export default connect()(Token);