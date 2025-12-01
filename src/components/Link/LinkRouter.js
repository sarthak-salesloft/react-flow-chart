import React from 'react';
import { LinkDefault } from '@mrblenny/react-flow-chart';
import { CustomLink } from './CustomLink';
import { DottedLink } from './DottedLink';

/**
 * This component acts as a router.
 * It receives the link data and decides which component to render
 * based on the link's `type` property.
 */
export const LinkRouter = (props) => {
   console.log(props.link)
  if (props.link.properties?.type === 'reports') {
    return <DottedLink {...props} />;
  }

  // For 'influence' or any other case, use the default link.
  return <CustomLink {...props} />;
};