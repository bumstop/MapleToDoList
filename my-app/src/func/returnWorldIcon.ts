export function returnWorldIcon(characterWorldName: string) {
  switch (characterWorldName) {
    case "레드":
      return `${process.env.PUBLIC_URL}/image/ico_world_red.gif`;
    case "이노시스":
      return `${process.env.PUBLIC_URL}/image/ico_world_enosis.png`;
    case "유니온":
      return `${process.env.PUBLIC_URL}/image/ico_world_union.png`;
    case "스카니아":
      return `${process.env.PUBLIC_URL}/image/ico_world_scania.gif`;
    case "루나":
      return `${process.env.PUBLIC_URL}/image/ico_world_luna.gif`;
    case "제니스":
      return `${process.env.PUBLIC_URL}/image/ico_world_zenith.gif`;
    case "크로아":
      return `${process.env.PUBLIC_URL}/image/ico_world_croa.gif`;
    case "베라":
      return `${process.env.PUBLIC_URL}/image/ico_world_bera.gif`;
    case "엘리시움":
      return `${process.env.PUBLIC_URL}/image/ico_world_elysium.gif`;
    case "아케인":
      return `${process.env.PUBLIC_URL}/image/ico_world_arcane.gif`;
    case "노바":
      return `${process.env.PUBLIC_URL}/image/ico_world_nova.gif`;
    case "리부트":
      return `${process.env.PUBLIC_URL}/image/ico_world_reboot.png`;
    case "리부트2":
      return `${process.env.PUBLIC_URL}/image/ico_world_reboot.png`;
  }
}
