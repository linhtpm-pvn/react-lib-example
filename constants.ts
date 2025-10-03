
import { PropDataItem } from './types';

export const buttonPropsData: PropDataItem[] = [
  {
    prop: 'variant',
    type: "'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'",
    defaultValue: "'primary'",
    description: 'The visual style of the button.',
  },
  {
    prop: 'size',
    type: "'sm' | 'default' | 'lg'",
    defaultValue: "'default'",
    description: 'The size of the button.',
  },
  {
    prop: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables the button, making it un-clickable.',
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: "''",
    description: 'Additional CSS classes to apply.',
  },
];

export const inputPropsData: PropDataItem[] = [
    {
    prop: 'type',
    type: "React.HTMLInputTypeAttribute",
    defaultValue: "'text'",
    description: 'The type of the input (e.g., text, email, password).',
  },
  {
    prop: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables the input field.',
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: "''",
    description: 'Additional CSS classes to apply.',
  },
];

export const textareaPropsData: PropDataItem[] = [
  {
    prop: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables the textarea field.',
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: "''",
    description: 'Additional CSS classes to apply.',
  },
];

export const selectPropsData: PropDataItem[] = [
  {
    prop: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables the select field.',
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: "''",
    description: 'Additional CSS classes to apply.',
  },
];

export const labelPropsData: PropDataItem[] = [
  {
    prop: 'htmlFor',
    type: 'string',
    defaultValue: 'undefined',
    description: 'The ID of the form element the label is associated with.',
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: "''",
    description: 'Additional CSS classes to apply.',
  },
];
