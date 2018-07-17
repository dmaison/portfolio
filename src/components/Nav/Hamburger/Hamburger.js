import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.css';

class Hamburger extends React.Component{ 

    constructor( props ){
        super( props );
        this.state = {
            expanded: false
        };
    }

    componentDidMount(){
        this.props.history.listen( () => this.setState({ expanded: false }) );
    }

    toggleMenu = () => this.setState({ expanded: !this.state.expanded });

    render(){
        return (
            <div id="hamburger" className="ui right dropdown item">
                <Icon size="big" name="bars" onClick={ this.toggleMenu } />
                <div className="menu" ref="menu" style={{ display: this.state.expanded ? 'block' : 'none' }}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Hamburger;