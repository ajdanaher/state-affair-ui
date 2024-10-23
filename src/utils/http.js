export async function httpPost(data) {
  return new Promise(async (resolve, reject) => {
    const path = `http://localhost:8080/v1/news`;
    try {
      const response = await fetch(path, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      resolve({ message: resData.message });
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

export async function httpFetchNews(data) {
  return new Promise(async (resolve, reject) => {
    const path = `http://localhost:8080/v1/news/fetch`;
    try {
      const response = await fetch(path, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      resolve({ message: resData.message });
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}


export async function httpGet() {
  return new Promise(async (resolve, reject) => {
    const path = `http://localhost:8080/v1/news`;
    try {
      const response = await fetch(path, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      resolve(resData);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}