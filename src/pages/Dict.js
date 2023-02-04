import React from 'react';
import Heading from '../components/common/Heading';
import TextSearch from '../components/common/TextSearch';
import DictInfo from '../components/DictInfo';

const Dict = () => {
  return (
    <main>
      <Heading pageTitle={'Dictionary'} />
      <TextSearch styleName={'words-text-search'} placeholder={'Type a word here'} />
      <DictInfo />
    </main>
  );
};

export default Dict;