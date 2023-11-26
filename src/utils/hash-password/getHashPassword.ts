import bcrypt from "bcrypt"

/**
 * @param plainTextPassword plain text of password
 * @returns a hashed string of password
 */

export const getHashPassword = (plainTextPassword: string) => {
  const saltRound = 10
  const hashPassword = bcrypt.hashSync(plainTextPassword, saltRound)
  return hashPassword
}
