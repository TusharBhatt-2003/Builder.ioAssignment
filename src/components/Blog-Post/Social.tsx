import React from 'react';
import { Builder } from '@builder.io/react';
import Image from 'next/image';

// Social component with dynamic social media links (Twitter, LinkedIn, Facebook)
const Social = ({ Link, twitterLink, linkedinLink, facebookLink }: { Link?: string; twitterLink?: string; linkedinLink?: string; facebookLink?: string }) => {
  // Image paths for each social media
  const twitterImage = '/X-link.png';
  const linkedinImage = '/linked-in.png';
  const facebookImage = '/facebook.png';
  const profileImage = '/post-info_link.png'; // Image for the profile link

  return (
    
  );
};

// Register the component with Builder.io
Builder.registerComponent(Social, {
  name: 'Social',
  inputs: [
    {
      name: 'Link',
      type: 'string',
      helperText: 'Enter the URL for the profile',
    },
    {
      name: 'twitterLink',
      type: 'string',
      helperText: 'Enter the URL for the Twitter profile',
    },
    {
      name: 'linkedinLink',
      type: 'string',
      helperText: 'Enter the URL for the LinkedIn profile',
    },
    {
      name: 'facebookLink',
      type: 'string',
      helperText: 'Enter the URL for the Facebook profile',
    },
  ],
});

export default Social;
