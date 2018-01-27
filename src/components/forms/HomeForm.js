import React, { PureComponent } from 'react';
import { Card, TextField } from 'react-md';

class HomeForm extends PureComponent {
  render() {
    return (
      <Card className='card_form-details'>
        <section className="md-grid" aria-labelledby={`dessert-group-title`}>
          <h2 className="md-cell md-cell--12">
            {`New Dessert`}
          </h2>
          <TextField
            id={`dessert-name`}
            name={`name`}
            label="Firstname"
            defaultValue={'John'}
            placeholder="Ice Cream"
            className="md-cell md-cell--6"
          />
          <TextField
            id={`dessert-name1`}
            name={`name1`}
            label="Lastname"
            defaultValue={'Doe'}
            placeholder="Ice Cream"
            className="md-cell md-cell--6"
          />
        </section>
      </Card>
    );
  }
}

export default HomeForm
