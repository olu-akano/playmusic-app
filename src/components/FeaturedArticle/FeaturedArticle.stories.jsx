import React from 'react';
import { FeaturedArticle } from '.';

export default {
    title: 'Components/Featured Article',
    component: FeaturedArticle
}

const Template = args => <FeaturedArticle {...args} />

export const Default = Template.bind({});
Default.args = {
    story: {
        name: 'A musician',
        genre: 'a genre',
        intro: 'intro of the musician'
    }
}


