import React from 'react';
import Heading from '../components/common/Heading';
import TextSearch from '../components/common/TextSearch';

const Thes = () => {
  return (
    <main>
      <Heading pageTitle={'Thesaurus'} />
      <TextSearch
        styleName={'words-text-search'}
        placeholder={'Type a word here'}
        onChangeHandler={onSearchChange}
        onSubmitHandler={handleSubmit}
      />
    </main>
  );
};

export default Thes;