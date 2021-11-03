import React, {useState} from 'react';
import {LyricButton} from '.';

export default {
    title: 'Buttons/LyricButton',
    component: LyricButton
}

const Template = args => <LyricButton {...args} />

export const Default = Template.bind({});