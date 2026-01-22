import {
  LighthouseVisual,
  FlexibilityVisual,
  ScaleVisual,
  SEOVisual,
} from "./visuals";

const VISUALS: Record<string, React.ComponentType> = {
  perf: LighthouseVisual,
  flex: FlexibilityVisual,
  scale: ScaleVisual,
  seo: SEOVisual,
};

interface TabVisualProps {
  tabId: string;
}

export function TabVisual({ tabId }: TabVisualProps) {
  const VisualComponent = VISUALS[tabId];

  if (!VisualComponent) {
    return null;
  }

  return <VisualComponent />;
}
