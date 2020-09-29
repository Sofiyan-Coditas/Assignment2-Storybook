import { html } from 'lit-html';
import { OrxeChips } from '@component-chip/chips';
import './chips.css';

/**
 * Primary UI component for user interaction
 */
export const chips = () => {
  const chipArray = [
    {
      label: 'Chip 1',
      count: 2
    },
    {
      label: 'Chip 2',
      count: 4
    },
    {
      label: 'Chip 3',
      count: 10
    }
  ];
  
  return html`
    <orxe-chips chip-content="${chipArray}"></orxe-chips>
  `;
};
