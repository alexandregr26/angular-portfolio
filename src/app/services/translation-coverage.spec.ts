import english from '../../assets/i18n/en.json';
import french from '../../assets/i18n/fr.json';

function flatten(dictionary: object, prefix = ''): Record<string, string> {
  return Object.entries(dictionary).reduce((result, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return { ...result, ...(typeof value === 'string' ? { [path]: value } : flatten(value, path)) };
  }, {});
}

describe('French translation coverage', () => {
  const source = flatten(english);
  const translated = flatten(french);

  it('covers every English key with nonempty text and preserves interpolation parameters', () => {
    expect(Object.keys(translated).sort()).toEqual(Object.keys(source).sort());
    for (const [key, value] of Object.entries(source)) {
      const translation = translated[key] ?? '';
      expect(translation.trim().length).withContext(key).toBeGreaterThan(0);
      const parameters = (text: string) => (text.match(/{{\s*\w+\s*}}/g) ?? []).sort();
      expect(parameters(translation)).withContext(key).toEqual(parameters(value));
    }
  });

  it('translates prose rather than copying English case studies or the 404 fallback', () => {
    for (const [key, value] of Object.entries(source)) {
      if ((key.startsWith('caseStudies.') || key.startsWith('notFound.')) && value.length > 80) {
        expect(translated[key]).withContext(key).not.toBe(value);
      }
    }
  });
});
