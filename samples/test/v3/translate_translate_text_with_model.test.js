// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {TranslationServiceClient} = require('@google-cloud/translate').v3;
const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});
const REGION_TAG = 'translate_translate_text_with_model';

describe(REGION_TAG, () => {
  const translationClient = new TranslationServiceClient();
  const location = 'us-central1';
  const modelId = 'TRL1218052175389786112';
  const input = 'Tell me how this ends';

  it('should translate text with an automl model in project', async () => {
    const projectId = await translationClient.getProjectId();
    const output = await execSync(
      `node v3/${REGION_TAG}.js ${projectId} ${location} ${modelId} ${input}`
    );
    assert.match(output, /Translated Content: 教えて/);
  });
});
