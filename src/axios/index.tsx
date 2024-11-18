const TOKEN =
	"eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1ODQwMzAwOTI3MjY2MTIxMzk3IiwiZW1haWwiOiJhbGx5c29tLnJlbmN6ZW5jemVuMThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJIb3F4Tnp5aFNvelotbU9vakVLV0lnIiwibmJmIjoxNzMxOTQ4Mjc4LCJpYXQiOjE3MzE5NDg1NzgsImV4cCI6MTczMTk1MjE3OCwianRpIjoiMWUwYzBhZmMxNjU1N2Q2ZTMzZDg0NTMzNjAzMzc2NWMxODZjODQwYiJ9.yHWhPYnsvfyG-St28tlFgcjL_KtFrYDcxW73LOGRHN1i7hnui7HguwMs4vGrtquJ_K47Y7iEeeY1-lbGSXR0CDGUy0lEOXLjeFL-x-Y1rBOkETRKC6FaoVxqNYUwcxoE5ZH4cvsBAA3hJ3_hWZ5xrbvwFhV1hq65uEj_KrxN_GJi9a2EkR-yA5fz0XN6mrFldI_hF0Xe3YBAuAoBt_9gu5STlzCZUGGLtHmGBVdsCiZ8zpTYXe96yTDiQyG1mb-qC8x04siAz4cDJ9feYO60nZISQuALBZyGLOpdAH5ziBtMGNVEuUjXiXZF-dZa_6XaWllsRurA-ceiGdhvWxU1aw";

export const sendEmail = async (emailRequest: {
	toMail: string;
	content: string;
}) => {
	const url = "/api/function-1";

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify(emailRequest),
	});

	if (!response.ok) {
		const errorData = await response.json();
		console.error("Erro no envio de e-mail:", errorData);
		throw new Error(errorData.message || "Erro desconhecido");
	}

	return await response.json();
};
