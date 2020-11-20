const re = /\S+@\S+\.\S+/

export default function isEmail(email) {
  return re.test(email)
}
