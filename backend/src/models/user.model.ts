// Database mapper schemas or active record pattern entities if required (Prisma client types).
export interface UserModel {
  id: string;
  email: string;
  passwordHash: string;
}
