import {
  CATEGORIES_TERM_TEXT_OUTFILE,
  TERMS_TERM_TEXT_OUTFILE,
} from "./main.ts";
import { CPCA_ROW, CTCAE_MODEL } from "./models.ts";

const TERM_CTCAE = "CTCAE";
const TERM_CTCAE_GROUP = "CTCAE-GROUP";

type CategoriesAndTerminologies = {
  categories: string[];
  terms: string[];
};

export async function loadMapAndWriteTerms(json: string): Promise<boolean> {
  const categoriesAndModels = fillModelsAndCategoriesFromJsonData(json);
  const result = createTermString(
    categoriesAndModels.categories,
    categoriesAndModels.models,
  );
  await Deno.writeTextFile(
    CATEGORIES_TERM_TEXT_OUTFILE,
    result.categories.join("\n"),
  );
  await Deno.writeTextFile(TERMS_TERM_TEXT_OUTFILE, result.terms.join("\n"));

  return true;

}

export function fillModelsAndCategoriesFromJsonData(excelJson: string) {
  const categories: Record<string, number> = {};
  const models: CTCAE_MODEL[] = [];

  const importedTerms: CPCA_ROW[] = JSON.parse(excelJson);
  importedTerms.forEach((excelRow) => {
    const model = transformFromExcelModelToSimplifiedModel(excelRow);
    if (categories[model.category]) {
      categories[model.category] = categories[model.category] + 1;
    } else {
      categories[model.category] = 1;
    }
    models.push(model);
  });
  return { categories: categories, models: models };
}

/**
 * Transform Excel model into domain model
 * @param c Excel based model
 * @returns Simplified model
 */
function transformFromExcelModelToSimplifiedModel(c: CPCA_ROW): CTCAE_MODEL {
  return {
    code: c["MedDRA Code"],
    category: c["MedDRA SOC"],
    term: c["CTCAE Term"],
    g1: c["Grade 1   "],
    g2: c["Grade 2   "],
    g3: c["Grade 3   "],
    g4: c["Grade 4   "],
    g5: c["Grade 5   "],
    definition: c.Definition,
    change: c["CTCAE v5.0 Change"],
  };
}


/**
  * @param categories
  * @param models
  * @returns
  */
function createTermString(
  categories: Record<string, number>,
  models: CTCAE_MODEL[],
): CategoriesAndTerminologies {
  let categoryNumber = 1000;
  const termCategory: string[] = [];
  const terms: string[] = [];
  Object.keys(categories).forEach((category) => {
    categoryNumber++;
    const currentTermCategory =
      `${TERM_CTCAE_GROUP}::${categoryNumber}::${category}`;

    termCategory.push(currentTermCategory);

    models
      .filter((model) => model.category == category)
      .forEach((model) => {
        const currentTerm = `${TERM_CTCAE}::${model.code}::${model.term}`;
        terms.push(currentTerm);
      });
  });
  return { categories: termCategory, terms: terms };
}