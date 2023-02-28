import { useState } from 'react';
import { Header, Input, Btn } from './Searchbar.styled';
import { IoSearch } from 'react-icons/io5';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      toast.warning('Do not be cunning, man!');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  const handleChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
        <Btn type="submit">
          <IoSearch fill="violet" />
        </Btn>
      </form>
    </Header>
  );
};
