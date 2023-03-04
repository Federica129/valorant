type Character = {
  uuid: string;
  displayName: string;
  descriptio: string;
  developerName: string;
  characterTags: null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: [string];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role;
  abilities: [Abilities];
  voiceLine: VoiceLine;
};

type Role = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
};

type Abilities = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
};

type VoiceLine = {
  minDuration: number;
  maxDuration: number;
  mediaList: [ML];
};

type ML = {
  id: number;
  wwise: string;
  wave: string;
};

export type { Character, Abilities, VoiceLine, ML };
