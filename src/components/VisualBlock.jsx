import React from 'react';
import BoxModelVisual from './visuals/BoxModelVisual';
import FlexboxVisual from './visuals/FlexboxVisual';
import GridVisual from './visuals/GridVisual';
import PositionVisual from './visuals/PositionVisual';
import ResponsiveVisual from './visuals/ResponsiveVisual';
import TransitionVisual from './visuals/TransitionVisual';
import HtmlTreeVisual from './visuals/HtmlTreeVisual';
import SemanticVisual from './visuals/SemanticVisual';
import SelectorVisual from './visuals/SelectorVisual';
import SpecificityVisual from './visuals/SpecificityVisual';
import EffectsVisual from './visuals/EffectsVisual';

// Ma'lumot faylida { type: 'visual', visual: 'flexbox' } deb yoziladi
const VISUALS = {
  boxModel: BoxModelVisual,
  flexbox: FlexboxVisual,
  grid: GridVisual,
  position: PositionVisual,
  responsive: ResponsiveVisual,
  transition: TransitionVisual,
  htmlTree: HtmlTreeVisual,
  semantic: SemanticVisual,
  selectors: SelectorVisual,
  specificity: SpecificityVisual,
  effects: EffectsVisual
};

export default function VisualBlock({ name, accent }) {
  const Visual = VISUALS[name];
  return Visual ? <Visual accent={accent} /> : null;
}
