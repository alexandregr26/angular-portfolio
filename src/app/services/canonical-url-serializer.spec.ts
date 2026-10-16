import { CanonicalUrlSerializer } from './canonical-url-serializer';

describe('CanonicalUrlSerializer', () => {
  const serializer = new CanonicalUrlSerializer();

  it('uses directory URLs for project pages', () => {
    expect(serializer.serialize(serializer.parse('/project/capstone')))
      .toBe('/project/capstone/');
    expect(serializer.serialize(serializer.parse('/project/capstone/?ref=resume#overview')))
      .toBe('/project/capstone/?ref=resume#overview');
  });

  it('leaves the homepage and unknown routes alone', () => {
    expect(serializer.serialize(serializer.parse('/'))).toBe('/');
    expect(serializer.serialize(serializer.parse('/missing'))).toBe('/missing');
  });
});
