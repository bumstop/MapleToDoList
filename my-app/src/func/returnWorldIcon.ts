import {
  worldArcane,
  worldBera,
  worldCroa,
  worldElysium,
  worldEnosis,
  worldLuna,
  worldNova,
  worldReboot,
  worldRed,
  worldScania,
  worldUnion,
  worldZenith,
  worldAurora
} from "../assets/images";

export function returnWorldIcon(characterWorldName: string) {
  switch (characterWorldName) {
    case "레드":
      return worldRed;
    case "이노시스":
      return worldEnosis;
    case "유니온":
      return worldUnion;
    case "스카니아":
      return worldScania;
    case "루나":
      return worldLuna;
    case "제니스":
      return worldZenith;
    case "크로아":
      return worldCroa;
    case "베라":
      return worldBera;
    case "엘리시움":
      return worldElysium;
    case "아케인":
      return worldArcane;
    case "노바":
      return worldNova;
    case "오로라":
      return worldAurora;
    case "리부트":
      return worldReboot;
    case "리부트2":
      return worldReboot;
  }
}
