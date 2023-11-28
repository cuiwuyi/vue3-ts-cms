// export const BASE_URL = "https://codercba.com:8000"

let BASE_URL = ''
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'https://codercba.prod:8000'
} else {
  BASE_URL = 'https://codercba.dev:8000'
}

console.log(BASE_URL)

export const TIME_OUT = 10000
export { BASE_URL }
