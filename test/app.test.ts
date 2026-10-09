test('GET /api/version returns the current version', async () => {
  const response = await fetch(`${baseUrl}/api/version`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    version: process.env.APP_VERSION ?? 'development',
  });
});