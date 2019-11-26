# Internationalization

### Intro

The default language of MT-Mobile is Chinese. If you want to use other languages, you can follow the instructions below.

### Switch languages

MT-Mobile supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to different languages.

```js
import { Locale } from 'mt-mobile';
import enUS from 'mt-mobile/lib/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Modify default configs

Use `Locale.add` method to modify the default configs.

```js
import { Locale } from 'mt-mobile';

const messages = {
  'en-US': {
    vanPicker: {
      confirm: 'Close'
    }
  }
};

Locale.add(messages);
```

### Config files

Current supported languages:

| Language | Filename |
|------|------|
| Chinese | zh-CN |
| English | en-US |

