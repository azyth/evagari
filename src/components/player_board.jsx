import React, { Component } from 'react';
import { connect } from 'react-redux';
import Square from './square';

class PlayerBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orientation: 1,
            player: props.player, //1-4
         }
    }
    top = (player) => {
        return player < 3 ? 0 : 410;
    }
    left = (player) => {
        return (player === 1 || player === 4)? 0 : 410;
    }
    rotate = (player) => {
        let d;
        switch (player) {
            case 1:
                d = 0;
                break;
            case 2:
                d = 90;
                break;
            case 3:
                d = 180;
                break;
            case 4:
                d = 270;
                break;
            default:

        }
        return 'rotate(' + d + 'deg)';
    }
    styles = {
        quadrant: {
            transform: this.rotate(this.props.player),
            borderColor: '#ff0000',
            borderStyle: 'solid',
            boarderWidth: 5,
            height: 400,
            width: 400,
            position: 'absolute',
            top: this.top(this.props.player),
            left: this.left(this.props.player)
        },
        square01: {            position: 'absolute',            top: 0,              left: 0,          },
        square02: {            position: 'absolute',            top: 0,              left: 100,        },
        square03: {            position: 'absolute',            top: 0,              left: 200,        },
        square04: {            position: 'absolute',            top: 0,              left: 300,        },
        square05: {            position: 'absolute',            top: 100,            left: 300,        },
        square06: {            position: 'absolute',            top: 200,            left: 300,        },
        square07: {            position: 'absolute',            top: 300,            left: 300,        },
        square08: {            position: 'absolute',            top: 300,            left: 200,        },
        square09: {            position: 'absolute',            top: 300,            left: 100,        },
        square10: {            position: 'absolute',            top: 300,            left: 0,          },
        square11: {            position: 'absolute',            top: 200,            left: 0,          },
        square12: {            position: 'absolute',            top: 100,            left: 0,          },
        square13: {            position: 'absolute',            top: 100,            left: 100,        },
        square14: {            position: 'absolute',            top: 100,            left: 200,        },
        square15: {            position: 'absolute',            top: 200,            left: 200,        },
        square16: {            position: 'absolute',            top: 200,            left: 100,        },
        
    }
    render() { 
        return ( 
            <div style={this.styles.quadrant}>
                <div style={this.styles.square01}><Square number={0} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square02}><Square number={1} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square03}><Square number={2} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square04}><Square number={3} quadrant={this.props.quadrant}></Square></div>
    
                <div style={this.styles.square05}><Square number={4} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square06}><Square number={5} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square07}><Square number={6} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square08}><Square number={7} quadrant={this.props.quadrant}></Square></div>
    
                <div style={this.styles.square09}><Square number={8} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square10}><Square number={9} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square11}><Square number={10} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square12}><Square number={11} quadrant={this.props.quadrant}></Square></div>
    
                <div style={this.styles.square13}><Square number={12} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square14}><Square number={13} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square15}><Square number={14} quadrant={this.props.quadrant}></Square></div>
                <div style={this.styles.square16}><Square number={15} quadrant={this.props.quadrant}></Square></div>
            </div>
         );
    }
}
const mapStateToProps = state => state
 
export default connect()(PlayerBoard);