import React, { useState } from 'react';
import RoadmapMain from './components/RoadmapMain';
import JavaScriptPage from './pages/JavaScriptPage';
import NodeJsPage from './pages/NodeJsPage';
import ReactReduxPage from './pages/ReactReduxPage';
import PostgreSQLPage from './pages/PostgreSQLPage';
import NestJsPage from './pages/NestJsPage';

const NODES = [
  { title: 'HTML / CSS', id: 'html-css' },
  { title: 'JavaScript', id: 'javascript' },
  { title: 'Node.js', id: 'nodejs' },
  { title: 'React & Redux', id: 'react' },
  { title: 'PostgreSQL', id: 'postgresql' },
  { title: 'NestJS', id: 'nestjs' },
  { title: 'Express.js', id: 'express' },
  { title: 'MongoDB', id: 'mongodb' },
  { title: 'Docker', id: 'docker' },
  { title: 'Redis', id: 'redis' },
  { title: 'GraphQL', id: 'graphql' },
  { title: 'Microservices', id: 'microservices' },
  { title: 'CI / CD', id: 'cicd' }
];

export default function App() {
  const [activePage, setActivePage] = useState(null);

  const handleNodeClick = (node) => {
    if (node.id === 'javascript') {
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