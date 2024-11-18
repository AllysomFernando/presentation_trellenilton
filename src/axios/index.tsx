import axios, { AxiosInstance } from "axios";

const API_URL =
	"https://us-central1-plucky-cascade-440013-j0.cloudfunctions.net/";
const TOKEN =
	"eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1ODQwMzAwOTI3MjY2MTIxMzk3IiwiZW1haWwiOiJhbGx5c29tLnJlbmN6ZW5jemVuMThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJmT1hpSUZ3VGhtb3J3SlZ6cWRQQ3pnIiwibmJmIjoxNzMxOTM3MjcwLCJpYXQiOjE3MzE5Mzc1NzAsImV4cCI6MTczMTk0MTE3MCwianRpIjoiYzliZDIyZWVkNWJmMTYwMmYyNGU1ZDMzNmE4NTcxYzljNTZhM2FlMyJ9.RemsNq72Wau6968nSfQ7fIYd-N1IQoZ8_Iu7nafwAecLoeq3-tOCVWLygD_qydP2Os6fdVJI101FlbADSNmndiDz-mdujuA-ZR2IpoarVWJfN4a2GTmn6UUaeq_sE1Krwda7n9RGvpwAbbsNoVpRTkEGdgCiOD87nVgLTVrObVy3Ms_NqbXYrxFd_iNz-tIRqgLZ5VM3wV8auzKwAF6EurwsYaCfV717w1bqMd1o9pcfd8uABEPuUJUySk7V9wbOLFNLC37qwq5B6Ixm4AMczAbnYaab7ntSIbnvlRYEk0vLCb6LLyzE_cjpjTl_34NeMnZlFrHc6VJFmqHMIlkdlg";

const api: AxiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "*",
		"Access-Control-Allow-Headers": "*",
		Authorization: `Bearer ${TOKEN}`,
	},
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error("Erro na requisição:", error.response?.data);
		return Promise.reject(error);
	}
);

interface EmailRequest {
	toMail: string;
	content: string;
}

export const sendEmail = async (
	emailRequest: EmailRequest
): Promise<Response> => {
	try {
		const response = await api.post("/function-1", emailRequest);
		return response.data;
	} catch (error: any) {
		console.error(
			"Erro no envio de e-mail:",
			error.response ? error.response.data : error.message
		);
		throw error;
	}
};
