import React, { useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { Highlight } from 'prism-react-renderer';

// VS Code Dark+ ranglari, yorqinroq qilib sozlangan
const brightTheme = {
  plain: { color: '#f3f3f3', backgroundColor: '#1e1e1e' },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#7ec36b', fontStyle: 'italic' } },
    { types: ['punctuation', 'operator'], style: { color: '#f0f0f0' } },
    { types: ['keyword', 'atrule', 'important'], style: { color: '#6cb6ff', fontWeight: 'bold' } },
    { types: ['control', 'module', 'directive'], style: { color: '#e08cf0', fontWeight: 'bold' } },
    { types: ['string', 'char', 'attr-value', 'template-string', 'regex', 'url'], style: { color: '#ffa07a' } },
    { types: ['number', 'boolean', 'constant', 'symbol'], style: { color: '#d4f0b0' } },
    { types: ['function', 'method'], style: { color: '#ffee9c' } },
    { types: ['class-name', 'builtin', 'maybe-class-name', 'tag'], style: { color: '#5eead4' } },
    { types: ['variable', 'property', 'attr-name', 'parameter', 'selector'], style: { color: '#b6e6ff' } },
    { types: ['inserted'], style: { color: '#b5f0a0' } },
    { types: ['deleted'], style: { color: '#ff9a9a' } },
  ],
};

// Kod matniga qarab tilni aniqlaydi (ma'lumot fayllarida til ko'rsatilmagan)
function detectLanguage(code, lang) {
  if (lang) return lang;
  const t = code.trim();
  const firstLine = t.split('\n').find((l) => l.trim() && !l.trim().startsWith('//')) || '';
  if (/^(--|SELECT\b|CREATE\b|INSERT\b|UPDATE\b|DELETE\b|ALTER\b|DROP\b|WITH\b)/i.test(t)) return 'sql';
  if (/^(npm|npx|yarn|pnpm|nest|git|cd|mkdir|psql|docker|\$)\s/.test(firstLine) && !/[{};]/.test(t)) return 'bash';
  if (/^<[a-zA-Z!]/.test(t) && !/^<[A-Z]/.test(t) && !/\bimport\b|=>|return\s*\(/.test(t)) return 'markup';
  if (/^[{[]/.test(t) && /"\s*:/.test(t) && !/=>|function|const |let /.test(t)) return 'json';
  if (/\b(interface|enum|implements|readonly)\b|:\s*(string|number|boolean|any|void)\b|<[A-Z]\w*>|\bas\s+\w+/.test(t)) return 'tsx';
  return 'jsx';
}

const LABELS = { jsx: 'JavaScript', tsx: 'TypeScript', sql: 'SQL', bash: 'Terminal', markup: 'HTML', json: 'JSON', css: 'CSS' };

export default function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);
  const source = code.replace(/\n+$/, '');
  const language = detectLanguage(source, lang);

  const handleCopy = () => {
    navigator.clipboard?.writeText(source).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <Box sx={{ my: 2, borderRadius: '10px', overflow: 'hidden', border: '1px solid #333', background: '#1e1e1e', boxShadow: '0 4px 15px rgba(0,0,0,0.6)' }}>
      {/* VS Code uslubidagi sarlavha paneli */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1.5, py: 0.5, background: '#252526', borderBottom: '1px solid #333' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ display: 'flex', gap: 0.75 }}>
            {['#ff5f56', '#ffbd2e', '#27c93f'].map((col) => (
              <Box key={col} sx={{ width: 11, height: 11, borderRadius: '50%', background: col }} />
            ))}
          </Box>
          <Box sx={{ color: '#9da5b4', fontSize: '0.8rem', fontFamily: 'Consolas, monospace' }}>{LABELS[language] || language}</Box>
        </Box>
        <Tooltip title={copied ? 'Nusxalandi!' : 'Nusxalash'}>
          <IconButton size="small" onClick={handleCopy} sx={{ color: copied ? '#4ec9b0' : '#9da5b4' }}>
            {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>

      <Highlight theme={brightTheme} code={source} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <Box component="pre" sx={{ m: 0, p: 2, overflowX: 'auto', fontFamily: '"Fira Code", Consolas, "Courier New", monospace', fontSize: '1.08rem', lineHeight: 1.6, background: '#1e1e1e' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} style={{ display: 'flex' }}>
                <span style={{ width: '2.2em', flexShrink: 0, textAlign: 'right', paddingRight: '1.2em', color: '#9aa0a6', userSelect: 'none' }}>{i + 1}</span>
                <span style={{ whiteSpace: 'pre' }}>
                  {line.map((token, k) => <span key={k} {...getTokenProps({ token })} />)}
                  {line.length === 1 && line[0].content === '' ? ' ' : null}
                </span>
              </div>
            ))}
          </Box>
        )}
      </Highlight>
    </Box>
  );
}
