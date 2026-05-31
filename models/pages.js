const { run, get, query } = require('./db');
const CryptoJS = require('crypto-js');

/**
 * 生成随机密码（5位纯数字）
 * @returns {string} 返回5位纯数字密码
 */
function generateRandomPassword() {
  const chars = '0123456789';
  let password = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  console.log('生成密码:', password); // 调试输出
  return password;
}

/**
 * 创建新页面
 * @param {string} htmlContent HTML内容
 * @param {boolean} isProtected 是否启用密码保护
 * @param {string} codeType 代码类型（html, markdown, svg, mermaid）
 * @param {Object} libraryMeta 书库元数据 { title, description, author, isLibrary }
 * @returns {Promise<Object>} 返回生成的URL ID和密码
 */
async function createPage(htmlContent, isProtected = false, codeType = 'html', libraryMeta = {}) {
  try {
    const timestamp = new Date().getTime().toString();
    const hash = CryptoJS.MD5(htmlContent + timestamp).toString();
    const urlId = hash.substring(0, 7);
    const password = generateRandomPassword();
    console.log('生成密码:', password);

    const { title = null, description = null, author = null, isLibrary = false } = libraryMeta;

    await run(
      'INSERT INTO pages (id, html_content, created_at, password, is_protected, code_type, title, description, author, is_library) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [urlId, htmlContent, Date.now(), password, isProtected ? 1 : 0, codeType,
       title, description, author, isLibrary ? 1 : 0]
    );

    return { urlId, password };
  } catch (error) {
    console.error('创建页面错误:', error);
    throw error;
  }
}

/**
 * 通过ID获取页面
 * @param {string} id 页面ID
 * @returns {Promise<Object|null>} 返回页面对象或null
 */
async function getPageById(id) {
  try {
    return await get('SELECT * FROM pages WHERE id = ?', [id]);
  } catch (error) {
    console.error('获取页面错误:', error);
    throw error;
  }
}

/**
 * 获取最近创建的页面列表
 * @param {number} limit 限制数量
 * @returns {Promise<Array>} 返回页面列表
 */
async function getRecentPages(limit = 10) {
  try {
    return await query(
      'SELECT id, created_at FROM pages ORDER BY created_at DESC LIMIT ?',
      [limit]
    );
  } catch (error) {
    console.error('获取最近页面错误:', error);
    throw error;
  }
}

/**
 * 获取书库中所有公开页面
 * @returns {Promise<Array>}
 */
async function getLibraryPages() {
  try {
    return await query(
      'SELECT id, title, description, author, is_protected, created_at FROM pages WHERE is_library = 1 ORDER BY created_at DESC'
    );
  } catch (error) {
    console.error('获取书库页面错误:', error);
    throw error;
  }
}

module.exports = {
  createPage,
  getPageById,
  getRecentPages,
  getLibraryPages,
};
