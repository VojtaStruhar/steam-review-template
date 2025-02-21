import Handlebars from "handlebars";
import fsp from 'node:fs/promises'
import path from 'node:path'

const langs = {};

function addLang(key, lang) {
  langs[key] = lang;
}

async function readAllLangs() {
  const files = await fsp.readdir(path.resolve('scripts/langs'));
  for (const file of files) {
    const [name, ext] = file.split('.');
    if (ext !== 'json') continue;

    const lang = await fsp.readFile(path.resolve('scripts/langs', file), 'utf-8');
    const jsonLang = JSON.parse(lang);
    addLang(name, jsonLang);
  }
}

async function templateEdit(langKey){
  const lang = langs[langKey];
  
  const astroTemplate = await fsp.readFile(path.resolve('scripts/template/pages/{{ lang }}/index.astro.hbs'), 'utf-8');
  const template = Handlebars.compile(astroTemplate);
  const result = template({ lang: langKey, ...lang });
  await fsp.mkdir(path.resolve("scripts/output/pages", langKey), { recursive: true });
  await fsp.writeFile(path.resolve("scripts/output/pages", langKey, 'index.astro'), result);
}

function findGeneratorParents(obj, parentKey = null) {
  const keys = [];

  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
      if ("__generator" in obj) {
          return parentKey ? [parentKey] : [];
      }

      for (const key in obj) {
          keys.push(...findGeneratorParents(obj[key], key));
      }
  }

  return keys;
}

async function generateReviewTemplate(langKey){
  const lang = langs[langKey];
  const keys = findGeneratorParents(lang); // OUTPUT: [ 'object_to_ignore' ]
  for (const key of keys) {
    delete lang[key];
  }
  
  const finalName = `template_${langKey}.json`;
  await fsp.mkdir(path.resolve('scripts/output/review_templates'), { recursive: true });
  await fsp.writeFile(path.resolve('scripts/output/review_templates', finalName), JSON.stringify(lang, null, 2));
}

async function generateJsTemplate(){
  const generalJsTemplate = await fsp.readFile(path.resolve('scripts/template/review_templates/general.js.hbs'), 'utf-8');
  const template = Handlebars.compile(generalJsTemplate);
  const langsKeys = Object.keys(langs);
  const result = template({ langsKeys });
  await fsp.mkdir(path.resolve('scripts/output/review_templates'), { recursive: true });
  await fsp.writeFile(path.resolve('scripts/output/review_templates/general.js'), result);
}

async function flagSelectorTemplate(){
  const flagSelectorTemplate = await fsp.readFile(path.resolve('scripts/template/components/FlagSelect.astro.hbs'), 'utf-8');
    const template = Handlebars.compile(flagSelectorTemplate);
  const result = template({ langs });

  await fsp.mkdir(path.resolve('scripts/output/components'), { recursive: true });
  await fsp.writeFile(path.resolve('scripts/output/components/FlagSelect.astro'), result);
}

async function moveOutputFiles(){
  const files = await fsp.readdir(path.resolve('scripts/output'));

  console.log(files)
  
  for (const file of files) {
    const src = path.join('scripts/output', file);
    const dest = path.join('src', file);

    try{
      await fsp.rename(src, dest);
    }
    catch{
      await fsp.cp(src, dest, { recursive: true, force: true });
      await fsp.rm(src, { recursive: true, force: true });
    }
  }
}

(async () => {
  await readAllLangs();
  await flagSelectorTemplate();
  for (const langKey in langs) {
    await templateEdit(langKey);
    await generateReviewTemplate(langKey);
  }
  await generateJsTemplate();
  console.log("Generation completed!");

  await moveOutputFiles();
  console.log("Done!");
})()