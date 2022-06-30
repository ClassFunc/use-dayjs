## use-dayjs

It's simpler to use dayjs

## Support for

```bash
- Typescript
- React js
- Next js
- Node js
```

## Install package

```html
npm i --save use-dayjs
yarn add use-dayjs
```

## Use package

```js
// in App.tsx
import {djsSetLocale} from "use-dayjs/locale";

djsSetLocale('vi')

// in component
import {djsFormat} from "use-dayjs/display";

djsFormat("2022-06-30", "YYYY-MM-DD ddd") //2022-06-30 T5

```
