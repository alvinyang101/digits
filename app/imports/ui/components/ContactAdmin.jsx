import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ContactAdmin extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.contact.image}/>
            <Card.Header style={{ fontsize: 20 }}>
              {this.props.contact.firstName} {this.props.contact.lastName}
            </Card.Header>
            <Card.Meta>
              {this.props.contact.address}
            </Card.Meta>
            <Card.Description>
              {this.props.contact.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ContactAdmin.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactAdmin;
