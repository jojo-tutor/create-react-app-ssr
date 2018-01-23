import React, { PureComponent } from 'react';
import { Card, TextField } from 'react-md';

class HomeForm extends PureComponent {
  render() {
    return (
      <Card tableCard>
        <section className="md-grid" aria-labelledby={`dessert-group-title`}>
          <h2 id={`dessert-group`} className="md-cell md-cell--12">
            {`New Dessert`}
          </h2>
          <TextField
            id={`dessert-name`}
            name={`name`}
            label="Dessert"
            customSize="title"
            defaultValue={'dessert'}
            placeholder="Ice Cream"
            className="md-cell"
          />
          <TextField
            id={`dessert-name1`}
            name={`name1`}
            label="Dessert"
            customSize="title"
            defaultValue={'dessert'}
            placeholder="Ice Cream"
            className="md-cell"
          />
        </section>
      </Card>
    );
  }
}

export default HomeForm
