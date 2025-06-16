// export const USER_API_ENDPOINT = "http://localhost:5011/api/user";
// export const JOB_API_ENDPOINT = "http://localhost:5011/api/job";
// export const APPLICATION_API_ENDPOINT = "http://localhost:5011/api/application";
// export const COMPANY_API_ENDPOINT = "http://localhost:5011/api/company";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const USER_API_ENDPOINT = `${BASE_API_URL}/api/user`;
export const JOB_API_ENDPOINT = `${BASE_API_URL}/api/job`;
export const APPLICATION_API_ENDPOINT = `${BASE_API_URL}/api/application`;
export const COMPANY_API_ENDPOINT = `${BASE_API_URL}/api/company`;
