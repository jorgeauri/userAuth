import { Pool } from "pg";

const connectionString =
  "postgres://uadjgcxh:R1Ya8OeB536d8Bb5dlguuLWTR5ltFM0d@tuffi.db.elephantsql.com/uadjgcxh";

const db = new Pool({ connectionString });

export default db;
