var React = require('react');

var HTMLPage = React.createClass({
    propTypes: {
        lang: React.PropTypes.string,
        children: React.PropTypes.node
    },

    getDefaultProps() {
        return {
            lang: 'en'
        };
    },

    render() {
        return (
            <html lang={this.props.lang}>
                {this.props.children}
            </html>
        );
    }
});

var HTMLHead = React.createClass({
    propTypes: {
        charSet: React.PropTypes.string,
        children: React.PropTypes.node
    },

    getDefaultProps() {
        return {
            charSet: 'utf-8'
        };
    },

    render() {
        return (
            <head>
                <meta charSet={this.props.charSet} />
                {this.props.children}
            </head>
        );
    }
});

var HTMLBody = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        return (
            <body>{this.props.children}</body>
        );
    }
});

module.exports      = HTMLPage;
module.exports.Head = HTMLHead;
module.exports.Body = HTMLBody;
