import { BURGER_API_URL } from "./const";
import { TFetchOptions } from "./types";



export async function fetchRequest<T>(endPoint: string, options: TFetchOptions = {}): Promise<never | T>
{  
  let res   = await fetch(`${BURGER_API_URL}${endPoint}`, options)
  // console.log( JSON.stringify(res, null, 4) )

  if ( !res ) {
    return Promise.reject(`Server error...`)
  }
  
  const json  = await res.json()

  // проверяем ответ сервера
  options     = await checkTokenRefresh(options, json)
  
  // повторить запрос, если токен обновлен
  if ( options.checkRefresh ) {
    options.checkRefresh = false
    return await fetchRequest(endPoint, options)
  }
  
  if ( ! json.success ) {
    return Promise.reject(json)
  }

  // console.log( JSON.stringify(json, null, 4) )
  return json;
}



async function checkTokenRefresh(options: TFetchOptions, err: Error)
{
  if (   err.message !== "jwt expired"          )   return options;
  if ( ! localStorage.getItem("refreshToken")   )   return options;
  if ( ! options.headers                        )   return options;
  if ( ! options.headers.authorization          )   return options;

  
  const res = await fetch(`${BURGER_API_URL}/api/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    } as TFetchOptions
  );
  
  
  if ( !res ) {
    return Promise.reject(`Server refresh...`)
  }
  
  // console.log(err)
  // console.log(res)


  const json = await res.json();
  if ( ! json.success ) {
    return Promise.reject(json);
  }


  localStorage.setItem("refreshToken", json.refreshToken);
  localStorage.setItem("accessToken", json.accessToken);
  options.headers.authorization = json.accessToken
  options.checkRefresh  = true
  
  return options;
}

