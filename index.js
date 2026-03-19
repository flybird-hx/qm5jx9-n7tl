const fs = require('fs');
const path = require('path');

exports.handler = async (req, resp) => {
  try {
    const htmlPath = path.join(__dirname, 'index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    resp.setHeader('Content-Type', 'text/html; charset=utf-8');
    resp.send(htmlContent);
  } catch (err) {
    resp.status(500).send('页面加载失败：' + err.message);
  }
};
