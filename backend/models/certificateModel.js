const pool = require("../config/db");
// const crypto = require("crypto");

// Save certificate data into PostgreSQL
const saveCertificate = async (data) => {
  const query = `
    INSERT INTO certificates 
    (file_name, candidate_name, father_name, mother_name, date_of_birth, roll_no, school_name, result) 
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8) 
    RETURNING *;
  `;

  const values = [
    data.file_name,
    data.candidate_name || null,
    data.father_name || null,
    data.mother_name || null,
    data.date_of_birth || null,
    data.roll_no || null,
    data.school_name || null,
    data.result || null,
  ];

  try {
    const result = await pool.query(query, values);
    const savedCert = result.rows[0];

    const crypto = require("crypto");
    const hashString = JSON.stringify(savedCert);
    const hash = crypto.createHash("sha256").update(hashString).digest("hex");

    console.log("Generated Hash:", hash);

    // ✅ DB result ke saath hash bhi return karo
    return { ...savedCert, hash };
  } catch (err) {
    if (err.code === "23505") {
      // 23505 = unique_violation (roll_no already exists)
      throw new Error("Duplicate roll_no: already exists in database");
    }
    throw err;
  }
};

module.exports = { saveCertificate };
