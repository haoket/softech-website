import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export const renderHTML = (rawHTML: any) => {
  return <div className='renderHTML' dangerouslySetInnerHTML={{ __html: ReactHtmlParser(rawHTML).toString() }}></div>;
};
