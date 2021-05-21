import { promises as fs } from "fs";

export const readFile = async (file) => {
  const result = {
    status: 200,
    results: [],
  };
  try {
    const data = await fs.readFile(file);
    result.results = JSON.parse(Buffer.from(data));
  } catch (error) {
    result.status = 404;
    result.results = error;
  }
  return result;
};

export const writeJsonFile = async (file, newObj) => {
  const result = {
    status: 200,
    results: [],
  };
  try {
    const exist = await readFile(file);
    let jsonData = newObj;
    if (exist.status === 200) {
      jsonData = exist.results;
      jsonData.push(newObj);
      await fs.writeFile(file, JSON.stringify(jsonData, null));
    } else {
      await fs.writeFile(file, JSON.stringify(Array(jsonData), null));
    }
    result.results = "Writting in JSON file";
  } catch (error) {
    result.status = 404;
    result.results = error;
  }
  return result;
};

export const updateFile = async (file, newObj) => {
  const result = {
    status: 200,
    results: [],
  };
  const data = await readFile(file);
  try {
    const jsonData = data.results;
    // this part is to write the logic to update data
    jsonData[0] = newObj;

    await fs.writeFile(file, JSON.stringify(jsonData, null));
    result.results = "update JSON file";
  } catch (error) {
    result.status = 404;
    result.results = error;
  }
  return result;
};

export const deleteFile = async (file, key) => {
  const result = {
    status: 200,
    results: [],
  };
  const data = await readFile(file);
  try {
    const jsonData = data.results;
    // this part is to write the logic to delete data
    jsonData.splice(key, 1);

    await fs.writeFile(file, JSON.stringify(jsonData, null));
    result.results = "Delete data JSON file";
  } catch (error) {
    result.status = 404;
    result.results = error;
  }
  return result;
};
