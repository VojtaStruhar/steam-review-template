const english_template = await import('./template_en.json');
const spanish_template = await import('./template_es.json');

export default {
  en: english_template.default,
  es: spanish_template.default
}