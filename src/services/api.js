import axios from "axios";

const USERNAME = "coalition";
const PASSWORD = "skills-test";

const auth = btoa(`${USERNAME}:${PASSWORD}`);

export const getPatients = async () => {
  const response = await axios.get(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  return response.data;
};