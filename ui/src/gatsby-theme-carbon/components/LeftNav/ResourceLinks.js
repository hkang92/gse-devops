import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IBM Garage Solution Engineering',
    href: 'https://ibm-cloud-architecture.github.io/',
  },
  {
    title: 'Github GSE-DevOps',
    href: 'https://github.com/ibm-cloud-architecture/gse-devops',
  },
  {
    title: 'Carbon',
    href: 'https://www.carbondesignsystem.com',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
