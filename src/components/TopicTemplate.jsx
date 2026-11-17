import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeBlock from './CodeBlock';
import VisualBlock from './VisualBlock';

function getThemeColors(theme) {
  if (theme === 'tailwind') {
    return {
      ...getThemeColors('postgres'),
      primary: '#06b6d4',
      primaryLight: '#67e8f9',
      primaryGlow: '#a5f3fc',
      border: '#06b6d4',
      bgAccent: 'rgba(6, 182, 212, 0.16)',
      bgAccentStrong: 'rgba(6, 182, 212, 0.24)',
      bgRule: 'rgba(6, 182, 212, 0.13)',
      textPrimary: '#67e8f9',
      shadow: 'rgba(6, 182, 212, 0.3)',
      shadowCard: 'rgba(6, 182, 212, 0.12)',
      truthyBg: 'rgba(6, 182, 212, 0.12)',
      truthyBorder: '#06b6d4',
      truthyText: '#67e8f9',
      taskBorder: '#06b6d4',
      taskNumBg: '#06b6d4',
      selectedBg: 'rgba(8, 80, 98, 0.95)',
      selectedBorder: '#67e8f9',
      iconColor: '#67e8f9'
    };
  }
  if (theme === 'git') {
    return {
      ...getThemeColors('postgres'),
      primary: '#eab308',
      primaryLight: '#fde047',
      primaryGlow: '#fef08a',
      border: '#eab308',
      bgAccent: 'rgba(234, 179, 8, 0.16)',
      bgAccentStrong: 'rgba(234, 179, 8, 0.24)',
      bgRule: 'rgba(234, 179, 8, 0.13)',
      textPrimary: '#fde047',
      shadow: 'rgba(234, 179, 8, 0.3)',
      shadowCard: 'rgba(234, 179, 8, 0.12)',
      truthyBg: 'rgba(234, 179, 8, 0.12)',
      truthyBorder: '#eab308',
      truthyText: '#fde047',
      taskBorder: '#eab308',
      taskNumBg: '#eab308',
      selectedBg: 'rgba(100, 78, 6, 0.95)',
      selectedBorder: '#fde047',
      iconColor: '#fde047'
    };
  }
  if (theme === 'html') {
    return {
      ...getThemeColors('postgres'),
      primary: '#e44d26',
      primaryLight: '#ff7a50',
      primaryGlow: '#ffb199',
      border: '#e44d26',
      bgAccent: 'rgba(228, 77, 38, 0.16)',
      bgAccentStrong: 'rgba(228, 77, 38, 0.24)',
      bgRule: 'rgba(228, 77, 38, 0.13)',
      textPrimary: '#ffb199',
      shadow: 'rgba(228, 77, 38, 0.3)',
      shadowCard: 'rgba(228, 77, 38, 0.12)',
      truthyBg: 'rgba(228, 77, 38, 0.12)',
      truthyBorder: '#e44d26',
      truthyText: '#ffd2c4',
      taskBorder: '#e44d26',
      taskNumBg: '#e44d26',
      selectedBg: 'rgba(120, 38, 18, 0.95)',
      selectedBorder: '#ffb199',
      iconColor: '#ffb199'
    };
  }
  if (theme === 'react') {
    return {
      primary: '#764abc',
      primaryLight: '#9b6bff',
      primaryGlow: '#00d8ff',
      border: '#764abc',
      bgMain: 'rgba(13, 20, 33, 0.95)',
      bgCard: 'rgba(5, 6, 8, 0.7)',
      bgAccent: 'rgba(118, 74, 188, 0.15)',
      bgAccentStrong: 'rgba(118, 74, 188, 0.2)',
      bgRule: 'rgba(118, 74, 188, 0.12)',
      textPrimary: '#00d8ff',
      textSecondary: '#94a3b8',
      textMuted: '#cbd5e1',
      textCode: '#e2e8f0',
      shadow: 'rgba(118, 74, 188, 0.3)',
      shadowCard: 'rgba(118, 74, 188, 0.1)',
      falsyBg: 'rgba(239, 68, 68, 0.1)',
      falsyBorder: '#ef4444',
      falsyText: '#fca5a5',
      truthyBg: 'rgba(118, 74, 188, 0.1)',
      truthyBorder: '#764abc',
      truthyText: '#d6bcfa',
      taskBg: 'rgba(13, 20, 33, 0.8)',
      taskBorder: '#764abc',
      taskNumBg: '#764abc',
      taskNumColor: '#050608',
      selectedBg: 'rgba(78, 40, 139, 0.95)',
      selectedBorder: '#00d8ff',
      iconColor: '#00d8ff'
    };
  }
  if (theme === 'postgres') {
    return {
      primary: '#336791',
      primaryLight: '#4a7fb5',
      primaryGlow: '#5aa7d4',
      border: '#336791',
      bgMain: 'rgba(13, 20, 33, 0.95)',
      bgCard: 'rgba(5, 6, 8, 0.7)',
      bgAccent: 'rgba(51, 103, 145, 0.18)',
      bgAccentStrong: 'rgba(51, 103, 145, 0.25)',
      bgRule: 'rgba(51, 103, 145, 0.14)',
      textPrimary: '#8ecae6',
      textSecondary: '#94a3b8',
      textMuted: '#cbd5e1',
      textCode: '#e2e8f0',
      shadow: 'rgba(51, 103, 145, 0.35)',
      shadowCard: 'rgba(51, 103, 145, 0.12)',
      falsyBg: 'rgba(239, 68, 68, 0.1)',
      falsyBorder: '#ef4444',
      falsyText: '#fca5a5',
      truthyBg: 'rgba(51, 103, 145, 0.12)',
      truthyBorder: '#336791',
      truthyText: '#bfdbfe',
      taskBg: 'rgba(13, 20, 33, 0.8)',
      taskBorder: '#336791',
      taskNumBg: '#336791',
      taskNumColor: '#050608',
      selectedBg: 'rgba(23, 59, 87, 0.95)',
      selectedBorder: '#8ecae6',
      iconColor: '#8ecae6'
    };
  }
  if (theme === 'nest') {
    return {
      primary: '#e0234e',
      primaryLight: '#ff4d6d',
      primaryGlow: '#ff6b81',
      border: '#e0234e',
      bgMain: 'rgba(13, 20, 33, 0.95)',
      bgCard: 'rgba(5, 6, 8, 0.7)',
      bgAccent: 'rgba(224, 35, 78, 0.15)',
      bgAccentStrong: 'rgba(224, 35, 78, 0.22)',
      bgRule: 'rgba(224, 35, 78, 0.12)',
      textPrimary: '#ff8fa3',
      textSecondary: '#94a3b8',
      textMuted: '#cbd5e1',
      textCode: '#e2e8f0',
      shadow: 'rgba(224, 35, 78, 0.3)',
      shadowCard: 'rgba(224, 35, 78, 0.1)',
      falsyBg: 'rgba(239, 68, 68, 0.1)',
      falsyBorder: '#ef4444',
      falsyText: '#fca5a5',
      truthyBg: 'rgba(224, 35, 78, 0.1)',
      truthyBorder: '#e0234e',
      truthyText: '#ffc2ce',
      taskBg: 'rgba(13, 20, 33, 0.8)',
      taskBorder: '#e0234e',
      taskNumBg: '#e0234e',
      taskNumColor: '#050608',
      selectedBg: 'rgba(120, 18, 42, 0.95)',
      selectedBorder: '#ff8fa3',
      iconColor: '#ff8fa3'
    };
  }
  return {
    primary: '#10b981',
    primaryLight: '#34d399',
    primaryGlow: '#00ff88',
    border: '#10b981',
    bgMain: 'rgba(13, 20, 33, 0.95)',
    bgCard: 'rgba(5, 6, 8, 0.7)',
    bgAccent: 'rgba(16, 185, 129, 0.15)',
    bgAccentStrong: 'rgba(16, 185, 129, 0.2)',
    bgRule: 'rgba(16, 185, 129, 0.12)',
    textPrimary: '#00ff88',
    textSecondary: '#94a3b8',
    textMuted: '#cbd5e1',
    textCode: '#e2e8f0',
    shadow: 'rgba(16, 185, 129, 0.3)',
    shadowCard: 'rgba(16, 185, 129, 0.1)',
    falsyBg: 'rgba(239, 68, 68, 0.1)',
    falsyBorder: '#ef4444',
    falsyText: '#fca5a5',
    truthyBg: 'rgba(16, 185, 129, 0.1)',
    truthyBorder: '#10b981',
    truthyText: '#86efac',
    taskBg: 'rgba(13, 20, 33, 0.8)',
    taskBorder: '#10b981',
    taskNumBg: '#10b981',
    taskNumColor: '#050608',
    selectedBg: 'rgba(6, 78, 59, 0.95)',
    selectedBorder: '#00ff88',
    iconColor: '#10b981'
  };
}

export default function TopicTemplate({ module, theme = 'default' }) {
  if (!module) return null;

  const c = getThemeColors(theme);

  return (
    <Box sx={{ 
      flex: 1, 
      background: c.bgMain, 
      border: `2px solid ${c.border}`, 
      borderRadius: '18px', 
      padding: '45px',
      backdropFilter: 'blur(10px)',
      boxShadow: `0 0 30px ${c.shadow}`,
      overflowY: 'auto',
      color: c.textMuted
    }}>
      <Typography variant="h3" sx={{ color: c.textPrimary, fontWeight: 800, mb: 1, fontSize: '2.4rem' }}>
        {module.heading}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: c.textSecondary, fontSize: '1.25rem', mb: 4, pb: 2, borderBottom: `1px solid ${c.border}40` }}>
        {module.subheading}
      </Typography>

      {module.sections.map((sec, idx) => (
        <Box key={idx} sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ color: c.textPrimary, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5, fontSize: '1.65rem' }}>
            <Box component="span" sx={{ background: c.bgAccent, color: c.textPrimary, px: 1.5, py: 0.5, borderRadius: '8px', fontSize: '1rem', border: `1px solid ${c.border}` }}>
              # {idx + 1}
            </Box>
            {sec.title}
          </Typography>

          {sec.text && <Typography sx={{ mb: 2, color: c.textCode, fontSize: '1.15rem', lineHeight: 1.8 }}>{sec.text}</Typography>}

          {sec.type === 'comparison' && (
            <>
              <Grid container spacing={3} sx={{ my: 2 }}>
                {sec.cards.map((card, i) => (
                  <Grid item xs={12} sm={4} key={i}>
                    <Paper sx={{ background: c.bgCard, border: `1px solid ${c.border}`, borderRadius: '12px', p: 3, height: '100%', boxShadow: `0 0 15px ${c.shadowCard}` }}>
                      <Typography variant="h6" sx={{ color: c.textPrimary, mb: 1 }}>{card.title}</Typography>
                      <Typography variant="subtitle2" sx={{ color: '#38bdf8', mb: 1.5, fontWeight: 'bold' }}>{card.subtitle}</Typography>
                      <Typography sx={{ color: c.textSecondary, fontSize: '1rem' }}>{card.desc}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {sec.actionsTitle && <Typography variant="h6" sx={{ color: c.primary, mt: 3, mb: 2 }}>{sec.actionsTitle}</Typography>}
              {sec.actions && (
                <Grid container spacing={2}>
                  {sec.actions.map((act, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Box sx={{ background: c.bgAccent, borderLeft: `4px solid ${c.primary}`, p: 1.5, borderRadius: '8px', color: c.textCode, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircleIcon sx={{ color: c.primary, fontSize: '1.2rem' }} /> {act}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </>
          )}

          {sec.type === 'list' && sec.points && (
            <Box component="ul" sx={{ pl: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {sec.points.map((p, i) => (
                <Typography component="li" key={i} sx={{ color: c.textMuted, fontSize: '1.1rem' }}>
                  {p}
                </Typography>
              ))}
            </Box>
          )}

          {sec.type === 'rule' && (
            <>
              <Box component="ul" sx={{ pl: 3, display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2.5 }}>
                {sec.points.map((p, i) => (
                  <Typography component="li" key={i} sx={{ color: c.textMuted, fontSize: '1.1rem' }}>{p}</Typography>
                ))}
              </Box>
              <Paper sx={{ background: c.bgRule, p: 2.5, borderRadius: '12px', borderLeft: `5px solid ${c.primary}`, color: c.textPrimary, fontWeight: 'bold', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LightbulbIcon sx={{ color: c.iconColor }} /> {sec.rule}
              </Paper>
            </>
          )}

          {sec.type === 'visual' && <VisualBlock name={sec.visual} accent={c.primary} />}

          {sec.type === 'code' && (
            <CodeBlock code={sec.code} lang={sec.lang} output={sec.output} html={sec.html} preview={sec.preview !== false} tailwind={!!module.tailwind} />
          )}

          {sec.type === 'falsyTruthy' && (
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ background: c.falsyBg, p: 3, borderRadius: '12px', border: `1px solid ${c.falsyBorder}`, height: '100%' }}>
                  <Typography variant="h6" sx={{ color: c.falsyBorder, mb: 2 }}>❌ Falsy (false)</Typography>
                  <Box component="ul" sx={{ pl: 2, display: 'flex', flexDirection: 'column', gap: 1, color: c.falsyText }}>
                    {sec.falsy.map((item, i) => <Typography component="li" key={i}><code>{item}</code></Typography>)}
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ background: c.truthyBg, p: 3, borderRadius: '12px', border: `1px solid ${c.truthyBorder}`, height: '100%' }}>
                  <Typography variant="h6" sx={{ color: c.textPrimary, mb: 2 }}>✔ Truthy (true)</Typography>
                  <Box component="ul" sx={{ pl: 2, display: 'flex', flexDirection: 'column', gap: 1, color: c.truthyText }}>
                    {sec.truthy.map((item, i) => <Typography component="li" key={i}><code>{item}</code></Typography>)}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          )}

          {sec.type === 'tasks' && (
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {sec.tasks.map((task, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Paper sx={{ background: c.taskBg, border: `1px solid ${c.taskBorder}`, borderRadius: '12px', p: 2, display: 'flex', alignItems: 'center', gap: 2, height: '100%' }}>
                    <Box sx={{ background: c.taskNumBg, color: c.taskNumColor, width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                      {i + 1}
                    </Box>
                    <Typography sx={{ fontSize: '1.05rem', color: c.textCode }}>{task}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  );
}