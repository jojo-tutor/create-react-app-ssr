import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer, Toolbar, TextField } from 'react-md';

class FullDialog extends PureComponent {
  render() {
    const { title, visible, children, onAdd, onHide } = this.props;
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
          actions={
            <Button
              raised
              secondary
              type="submit"
              iconChildren='save'>
              Save
            </Button>
          }
        />
        { children }
        <Button floating fixed onClick={onAdd} primary>add</Button>
      </DialogContainer>
    );
  }
}

FullDialog.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
}

export default FullDialog
