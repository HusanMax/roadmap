import React, { useState } from 'react';
import RoadmapMain from './components/RoadmapMain';
import JavaScriptPage from './pages/JavaScriptPage';
import NodeJsPage from './pages/NodeJsPage';
import ReactReduxPage from './pages/ReactReduxPage';
import PostgreSQLPage from './pages/PostgreSQLPage';
import NestJsPage from './pages/NestJsPage';
import HtmlCssPage from './pages/HtmlCssPage';
import TopicPage from './components/TopicPage';
import { tailwindAllModules } from './data/Tailwind/AllData';
import { gitAllModules } from './data/Git/AllData';

const TAILWIND_COLORS = { accent: '#06b6d4', accentSoft: '#67e8f9', selectedBg: 'rgba(8, 80, 98, 0.95)', shadow: 'rgba(6, 182, 212, 0.25)' };
const GIT_COLORS = { accent: '#eab308', accentSoft: '#fde047', selectedBg: 'rgba(100, 78, 6, 0.95)', shadow: 'rgba(234, 179, 8, 0.25)' };

const NODES = [
  { title: 'HTML / CSS', id: 'html-css' },
  { title: 'JavaScript', id: 'javascript' },
  { title: 'Node.js', id: 'nodejs' },
  { title: 'React & Redux', id: 'react' },
  { title: 'PostgreSQL', id: 'postgresql' },
  { title: 'NestJS', id: 'nestjs' },
  { title: 'Tailwind CSS', id: 'tailwind' },
  { title: 'Git & GitHub', id: 'git' },
  { title: 'Docker', id: 'docker' },
  { title: 'Redis', id: 'redis' },
  { title: 'GraphQL', id: 'graphql' },
  { title: 'Microservices', id: 'microservices' },
  { title: 'CI / CD', id: 'cicd' }
];

export default function App() {
  const [activePage, setActivePage] = useState(null);

  const handleNodeClick = (node) => {
    if (node.id === 'tailwind') {
      setActivePage('tailwind');
    } else if (node.id === 'git') {
      setActivePage('git');
    } else if (node.id === 'html-css') {
      setActivePage('html-css');
    } else if (node.id === 'javascript') {
      setActivePage('javascript');
    } else if (node.id === 'nodejs') {
      setActivePage('nodejs');
    } else if (node.id === 'react') {
      setActivePage('react');
    } else if (node.id === 'postgresql') {
      setActivePage('postgresql');
    } else if (node.id === 'nestjs') {
      setActivePage('nestjs');
    } else {
      alert("Bu mavzu tez kunda qo'shiladi!");
    }
  };

  return (
    <div>
      {!activePage ? (
        <RoadmapMain nodes={NODES} onNodeClick={handleNodeClick} />
      ) : activePage === 'tailwind' ? (
        <TopicPage modules={tailwindAllModules} theme="tailwind" colors={TAILWIND_COLORS} onBack={() => setActivePage(null)} />
      ) : activePage === 'git' ? (
        <TopicPage modules={gitAllModules} theme="git" colors={GIT_COLORS} onBack={() => setActivePage(null)} />
      ) : activePage === 'html-css' ? (
        <HtmlCssPage onBack={() => setActivePage(null)} />
      ) : activePage === 'javascript' ? (
        <JavaScriptPage onBack={() => setActivePage(null)} />
      ) : activePage === 'nodejs' ? (
        <NodeJsPage onBack={() => setActivePage(null)} />
      ) : activePage === 'react' ? (
        <ReactReduxPage onBack={() => setActivePage(null)} />
      ) : activePage === 'postgresql' ? (
        <PostgreSQLPage onBack={() => setActivePage(null)} />
      ) : activePage === 'nestjs' ? (
        <NestJsPage onBack={() => setActivePage(null)} />
      ) : null}
    </div>
  );
}