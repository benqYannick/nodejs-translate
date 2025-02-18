[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

The [Cloud Translation API](https://cloud.google.com/translate/docs/),
can dynamically translate text between thousands
of language pairs. The Cloud Translation API lets websites and programs
integrate with the translation service programmatically. The Cloud Translation
API is part of the larger Cloud Machine Learning API family.


[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/translate.svg)](https://www.npmjs.org/package/@google-cloud/translate)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-translate/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-translate)




Cloud Translation API Client Library for Node.js


* [Cloud Translation Node.js Client API Reference][client-docs]
* [Cloud Translation Documentation][product-docs]
* [github.com/googleapis/nodejs-translate](https://github.com/googleapis/nodejs-translate)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Cloud Translation API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/translate
```


### Using the client library

```javascript
  // Imports the Google Cloud client library
  const {Translate} = require('@google-cloud/translate');

  // Instantiates a client
  const translate = new Translate({projectId});

  // The text to translate
  const text = 'Hello, world!';

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-translate/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Hybrid Glossaries | [source code](https://github.com/googleapis/nodejs-translate/blob/master/samples/hybridGlossaries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/hybridGlossaries.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-translate/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Translate | [source code](https://github.com/googleapis/nodejs-translate/blob/master/samples/translate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/translate.js,samples/README.md) |



The [Cloud Translation Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-translate/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-translate/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/translate/latest
[product-docs]: https://cloud.google.com/translate/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=translate.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
