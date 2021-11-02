import React, {useState} from 'react';
import {LikeButton} from '.';

export default {
    title: 'Buttons/LikeButton',
    component: LikeButton
}

const Template = args => <LikeButton {...args} />

export const Default = Template.bind({});