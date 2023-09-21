import PropTypes from 'prop-types';
import { Component } from 'react';
import { Header, Form, Button, Span, Input } from './Searchbar.styled';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = { photoTag: '' };

  handleChange = e => {
    this.setState({ photoTag: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.photoTag.trim() === '') {
      toast.info('Enter your search query');
      return;
    }
    this.props.onSubmit(this.state.photoTag);

    this.setState({ photoTag: '' });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <Header>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <Span>Search</Span>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            value={this.state.photoTag}
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
