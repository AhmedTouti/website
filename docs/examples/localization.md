---
id: i18n
title: Internationalization
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - i18n
 - l10n
 - localization
 - internationalization
 - language
 - lang
 
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";
import * as faker from 'faker';

You can easily customize Grid.js messages and add your language. Simply extend the `language` config to replace the strings:

<CodeBlock children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Title'],
  sort: true,
  search: true,
  pagination: {
    limit: 5
  },
  data: Array(50).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    faker.name.title(),
  ]),
  language: {
    'search': {
      'placeholder': '🔍 Search...'
    },
    'pagination': {
      'previous': '⬅️',
      'next': '➡️',
      'showing': '😃 Displaying',
      'results': () => 'Records'
    }
  }
});
`
}
 transformCode={(code) => 
`
function () {
  ${code}
 
  const wrapperRef = useRef(null);
   
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  
  return (
    <div ref={wrapperRef} />
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef, faker }} />

<br/>

:::tip
See [en_US](https://github.com/grid-js/gridjs/blob/master/src/i18n/en_US.ts) for a full list of messages.
:::
