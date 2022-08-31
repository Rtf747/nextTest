import { pool } from '../../../config/db';

export default async function handler(req, res) {
 switch (req.method) {
  case 'GET':
   return await getLanguages(req, res);

  case 'POST':
   return await createLanguage(req, res);

  default:
   break;
 }
}

const getLanguages = async (req, res) => {
 const [result] = await pool.query('SELECT * FROM programming_languages');
 return res.status(200).json({ result });
};

const createLanguage = async (req, res) => {
 const { name, released_year, githut_rank, pypl_rank, tiobe_rank } = req.body;

 const [result] = await pool.query('INSERT INTO programming_languages SET ?', {
  name,
  released_year,
  githut_rank,
  pypl_rank,
  tiobe_rank,
 });

 console.log(result);

 return res.status(200).json({
  name,
  released_year,
  githut_rank,
  pypl_rank,
  tiobe_rank,
  id: result.insertId,
 });
};
