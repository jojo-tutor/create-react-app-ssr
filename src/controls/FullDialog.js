import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer, Toolbar, TextField } from 'react-md';

class FullDialog extends PureComponent {
  render() {
    const { title, visible, children, onHide } = this.props;
    return (
      <DialogContainer
        id="add-desserts-dialog"
        aria-labelledby="add-desserts-dialog-title"
        visible={visible}
        onHide={onHide}
        fullPage
      >
        <Toolbar
          nav={<Button icon onClick={onHide}>arrow_back</Button>}
          title={title}
          titleId="add-desserts-dialog-title"
          fixed
          colored
          actions={<Button type="submit" flat>Submit</Button>}
        />
        { children }
        <Button floating fixed onClick={() => {}} primary>add</Button>
      </DialogContainer>
    );
  }
}

FullDialog.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default FullDialog
