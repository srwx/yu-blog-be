import bcrypt from "bcrypt"

/**
 * A function to check is plain text password is match with hash string
 * @param plainTextPassword plain text of password
 * @param hash a hashed string of password, you can get hashed string by getHashPassword()
 * @returns boolean of result
 */

export const isPasswordCorrect = (plainTextPassword: string, hash: string) => {
  const result = bcrypt.compareSync(plainTextPassword, hash)
  return result
}
