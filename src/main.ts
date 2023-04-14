// @deno-types="https://deno.land/x/sheetjs@v0.18.3/types/index.d.ts"
import * as XLSX from "https://deno.land/x/sheetjs@v0.18.3/xlsx.mjs";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import {
  fillModelsAndCategoriesFromJsonData,
  loadMapAndWriteTerms,
} from "./transform.ts";
import { CTCAE_DATABASE } from "./models.ts";


const EXCEL_SPREADSHEET_CTCAE = "./data/CTCAE_v5.0_2017-11-27.xlsx";
const CTCAE_JSON_OUTFILE = "output/ctae.json";
const CATEGORIES_JSON_OUTFILE = "output/categories.json";
export const CATEGORIES_TERM_TEXT_OUTFILE = "output/categories.txt";
export const TERMS_TERM_TEXT_OUTFILE = "output/terms.txt";

// deno-lint-ignore no-unused-vars
const { args, options, literal, cmd } = await new Command()
  .name("CTCAE parser and model generator")
  .version("0.0.1")
  .description("A simple tool to parse CTCAE Excel spreadsheet and output models to be used within openEHR applications")
  .option("-t --terminologies", "Write terminologies to txt file")
  .option("-j --json", "Write Excel as JSON file ")
  .parse(Deno.args);


await doTheWork();

async function doTheWork() {
  console.log("|- starting the work");

  const excelFile = loadExcelFile(EXCEL_SPREADSHEET_CTCAE);
  const excelAsJsonObject = XLSX.utils.sheet_to_json(excelFile.Sheets[excelFile.SheetNames[0]]);
  const excelAsJsonString = JSON.stringify(excelAsJsonObject, null, 1);
  
  await emitIfSet(excelAsJsonString);
  const db = createDatabaseModel(excelAsJsonString);
  await Deno.writeTextFile(CATEGORIES_JSON_OUTFILE, JSON.stringify(db, null, 1));

  console.log("|-- All finished");

  function loadExcelFile(filename:string) {
    console.log("Loading CTCAE codes from Excel file " + filename);
    return XLSX.readFile(filename);

  }
  async function emitIfSet(json:string) {
    if (options.json) {
      console.log("Writing Excel json to file " + CTCAE_JSON_OUTFILE);
      await Deno.writeTextFile(CTCAE_JSON_OUTFILE, json);
    }

    if (options.terminologies) {
      console.log("Writing terminologies as text files ");
      loadMapAndWriteTerms(json);
    }
  }
  function createDatabaseModel(json:string) {
    const categoriesAndModels = fillModelsAndCategoriesFromJsonData(json);
    const db: CTCAE_DATABASE = {
      categories: [],
      models: categoriesAndModels.models,
    };
    let n = 1000;
    Object.keys(categoriesAndModels.categories).forEach((k) => {
      n += 1;
      db.categories.push({ id: n, name: k });
    });
    return db;
  }

}