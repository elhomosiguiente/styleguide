const React = require('react');

const Page = require('./components/Page');
const Example = require('./components/Example');

const Panel = require('../src/Panel');
const Alert = require('../src/Alert');

const SCOPE = { React, Alert };

const EXAMPLE_DEFAULT = '<Alert.Info>Flash message goes here.</Alert.Info>';
const EXAMPLE_DANGER = '<Alert.Danger>This is an alert!</Alert.Danger>';

module.exports = () => {
    return (
        <Page title="Alerts" active="alerts">
            <Panel>
                <Panel.Heading title="Alerts" />
                <Panel.Body>
                    <p>Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don’t show more than one at a time.</p>
                    <pre>
                        const Alert = require('gitbook-styleguide/lib/Alert');
                    </pre>
                </Panel.Body>
            </Panel>

            <Example title="Default" source={EXAMPLE_DEFAULT} scope={SCOPE}></Example>
            <Example title="Danger" source={EXAMPLE_DANGER} scope={SCOPE}></Example>
        </Page>
    );
};