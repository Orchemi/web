import { type PropsTableProps } from 'xy-shared';

export const nodeFields: PropsTableProps = {
  props: [
    { name: 'id', type: 'string' },
    { name: 'position', type: 'XYPosition' },
    { name: 'data', type: 'T' },
    { name: 'type?', type: 'U' },
    { name: 'sourcePosition?', type: 'Position' },
    { name: 'targetPosition?', type: 'Position' },
    { name: 'hidden?', type: 'boolean' },
    { name: 'selected?', type: 'boolean' },
    { name: 'dragging?', type: 'boolean' },
    { name: 'draggable?', type: 'boolean' },
    { name: 'selectable?', type: 'boolean' },
    { name: 'connectable?', type: 'boolean' },
    { name: 'resizing?', type: 'boolean' },
    { name: 'deletable?', type: 'boolean' },
    { name: 'dragHandle?', type: 'string' },
    { name: 'width?', type: 'number | null' },
    { name: 'height?', type: 'number | null' },
    { name: 'parentId?', type: 'string' },
    { name: 'zIndex?', type: 'number' },
    { name: 'extent?', type: '"parent" | CoordinateExtent' },
    { name: 'expandParent?', type: 'boolean' },
    { name: 'ariaLabel?', type: 'string' },
    { name: 'origin?', type: 'NodeOrigin' },
    { name: 'style?', type: 'string' },
    { name: 'class?', type: 'string' },
  ],
};