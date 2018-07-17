import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { overrideLocale } from '../../../actions/app';
import { bindActionCreators } from 'redux';
import LocalizedStrings from 'react-localization';
import './style.css';

/** 
 * @name Locale
 * @class
 * @extends {React.Component}
 * @description Allows the user to select a localization for the application
*/
class Locale extends React.Component {

    /**
     * @name select
     * @method
     * @description Sets the selected language to the app level
     * @param {object} event Synthetic event object
     * @param {object} data Selected option data
     */
    select = ( event, data ) => this.props.overrideLocale( data.value );

    static propTypes = {
        locales: PropTypes.array.isRequired,
        language: PropTypes.string
    }

    render(){

        let currentLocale = this.props.language;

        if( !this.props.language ){
            let labels = new LocalizedStrings({ en: {} }); //do this just do detect language if one is not available
            currentLocale = labels.getLanguage();
        }

        return (
            <Dropdown className="locales" text={ currentLocale } pointing="bottom">
                <Dropdown.Menu>
                    { 
                        this.props.locales.map( ( locale, index ) => (
                            <Dropdown.Item 
                                value={ locale.code } 
                                text={ locale.localization } 
                                onClick={ this.select } 
                                key={ `locale-option-${ index }` }
                                selected={ locale.code === this.props.language } /> 
                            ) 
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>
        );
    }

}

const mapStateToProps = state => {
    return {
        locales: state.app.locales,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ overrideLocale }, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Locale );