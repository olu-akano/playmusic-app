import React from 'react';
import { Card } from '.';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        size: {
            control: 'radio',
            options: [ 'small', 'large' ]
        },
        name: {
            control: 'text'
        },
        genre: {
            control: 'text'
        },
        intro: {
            control: 'text'
        }
    }
}

const Template = args => <Card {...args} />

export const Default = Template.bind({});
Default.args = {
    size: 'small',
    name: 'Davido',
    genre: 'Afrobeats',
    intro: 'Song by a popular Nigerian musician'
}

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    name: 'Davido',
    genre: 'Afrobeats',
    intro: 'Song by a popular Nigerian musician'
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    name: 'Davido',
    genre: 'Afrobeats',
    intro: 'Song by a popular Nigerian musician'
}