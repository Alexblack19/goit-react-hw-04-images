import PropTypes from 'prop-types';
import { useState } from 'react';
import { Header, Form, Button, Span, Input } from './Searchbar.styled';
import { toast } from 'react-toastify';

export function Searchbar({ onSubmit }) {
  const [photoTag, setPhotoTag] = useState('');

  const handleChange = e => {
    setPhotoTag(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (photoTag.trim() === '') {
      toast.info('Enter your search query');
      return;
    }
    onSubmit(photoTag);
    setPhotoTag('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Span>Search</Span>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          value={photoTag}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
