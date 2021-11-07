const sendHttp = async (userData) => {
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: userData.userName,
          password: userData.password,
        }),
        "Content-Type": "application/json",
      }
    );
    console.log("RESULT", res);

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    console.log("DATA", data);
  } catch (err) {
    console.log(err.message);
  }
};
