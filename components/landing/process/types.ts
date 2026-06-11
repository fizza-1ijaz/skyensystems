export type ProcessStage = {
  id: number;
  step: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Clockwise rotation in degrees (e.g. 90 for landscape assets in portrait frames). */
  imageRotation?: number;
};
