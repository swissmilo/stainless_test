// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Milosthirdproject from '@stainless-temp/milosthirdproject';
import { Response } from 'node-fetch';

const milosthirdproject = new Milosthirdproject({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pets', () => {
  test('create', async () => {
    const responsePromise = milosthirdproject.pets.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(milosthirdproject.pets.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Milosthirdproject.NotFoundError,
    );
  });

  test('retrieve', async () => {
    const responsePromise = milosthirdproject.pets.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      milosthirdproject.pets.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Milosthirdproject.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = milosthirdproject.pets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(milosthirdproject.pets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Milosthirdproject.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      milosthirdproject.pets.list({ limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Milosthirdproject.NotFoundError);
  });
});
